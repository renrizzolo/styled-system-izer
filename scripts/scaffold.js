const fs = require("fs-extra");
const path = require("path");
const execSync = require("child_process").execSync;
const chalk = require("chalk");
const program = require("commander");
const inquirer = require("inquirer");

const packageJson = require("../package.json");
const cwdPackageJson = require(path.join(process.cwd(), "package.json"));

let packageManager = "npm";
const defaultComponentsDir = path.join(process.cwd(), "src", "UI");
const defaultThemeDir = path.join(process.cwd(), "src", "theme");

const packages = [
  "styled-components",
  "styled-system",
  "@styled-system/prop-types"
];

const receiver = async () => {
  const prompt = await inquirer.prompt([
    {
      type: "input",
      name: "path",
      message: `Where do you want the UI components to be installed? 
      \n (default is ${defaultComponentsDir}) 
      \n ${chalk.bgRed("WARNING")} any conflicting files will be overwritten!`
    }
  ]);
  let dir = defaultComponentsDir;

  if (prompt.path) {
    dir = prompt.path;
    console.log(`
      Using componenents path ${chalk.cyan(path.resolve(dir))}
    `);
  } else {
    console.log(`
      Using default componenets path ${chalk.cyan(defaultComponentsDir)}
    `);
  }
  try {
    await copyFiles(dir);
  } catch (error) {
    handleError(error);
  }
  // copy theme
  const themePrompt = await inquirer.prompt([
    {
      type: "input",
      name: "themePath",
      message: `Where do you want the theme files to be installed? 
      ${chalk.bgRed("WARNING")} any conflicting files will be overwritten!
      (default is ${defaultThemeDir})`
    }
  ]);
  let themeDir = defaultThemeDir;

  if (themePrompt.themePath) {
    themeDir = themePrompt.themePath;
    console.log(`
      Using theme path ${chalk.cyan(path.resolve(themeDir))}
    `);
  } else {
    console.log(`
      Using default theme path ${chalk.cyan(defaultThemeDir)}
    `);
  }
  try {
    await copyTheme(themeDir);
  } catch (error) {
    handleError(error);
  }

  await installPackages();

  console.log(
    `${chalk.bgCyanBright(
      chalk.black("styled-system-izer")
    )} installation done.`
  );
  console.log(
    `Don't forget to wrap your app in the ${themeDir}/ThemeWrapper.js component.`
  );
};
async function main() {
  program
    .version(packageJson.version)
    .option("-y, --useyarn", "Use Yarn instead of NPM")
    .action(receiver);
  await program.parseAsync(process.argv);
}

const copyFiles = dir => {
  return new Promise((resolve, reject) => {
    console.log(`Copying components to ${chalk.cyan(path.resolve(dir))}`);
    try {
      fs.copy(path.join(__dirname, "../src/UI/"), dir);
      console.log("Copying done");
      resolve();
    } catch (error) {
      handleError(error);
      reject(error);
    }
  });
};
const copyTheme = dir => {
  return new Promise((resolve, reject) => {
    console.log(`Copying theme files to ${chalk.cyan(path.resolve(dir))}`);
    try {
      fs.copy(path.join(__dirname, "../src/theme/"), dir);
      console.log("Copying done");
      resolve();
    } catch (error) {
      handleError(error);
      reject(error);
    }
  });
};
const installPackages = async () => {
  return new Promise(async (resolve, reject) => {
    if (program.useyarn) {
      console.log(`using ${chalk.cyan("yarn")}`);
      packageManager = "yarn";
    }
    proms = [];
    packages.forEach(package => {
      if ([...Object.keys(cwdPackageJson.dependencies)].includes(package)) {
        console.log(chalk.cyan(package), "already installed, skipping");
      } else {
        proms.push(install(package));
      }
    });
    await Promise.all(proms);
    resolve();
  });
};

install = package => {
  return new Promise((resolve, reject) => {
    console.log(
      chalk.bgBlackBright(
        "installing ",
        chalk.cyan(package),
        `with ${packageManager}`
      )
    );
    try {
      packageManager === "npm"
        ? execSync(`npm install ${package}`)
        : execSync(`yarn add ${package}`);
      console.log("...done");
      console.log("");
      resolve();
    } catch (error) {
      handleError(error);
      reject();
    }
  });
};

const handleError = e => {
  console.error(
    chalk.red("ERROR! An error was encountered while executing the script")
  );
  console.error(e);
  console.log(chalk.red("Exiting with error."));
  process.exit(1);
};

main();
