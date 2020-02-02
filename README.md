# Styled System Izer

*I haven't actually finished setting up the default components/theme yet!*

~~usage: `npx styled-system-izer` inside your existing react project root.~~
usage (to test before I publish this to npm): download repsitory, run `npm i -g ./`, then `npx styled-system-izer` in project root.

use flag `-y` or `--useyarn` to use `yarn add` for installation (default is `npm install`)

## What is this?
Just a quick way to bootstrap a [Styled System](https://github.com/styled-system/styled-system) UI component library.
Unlike something like [rebass](https://github.com/rebassjs/rebass), it's just designed to be run once inside an existing project, then you have the components / theme in your project ready to set up / tweak.
Installs `styled-system`, `@styled-system/prop-types` and `styled-components` if not already in your `package.json`
Copies some default `styled-system` UI components and a basic theme object to your chosen folder, and a `ThemeProvider` wrapper component with a global stylesheet.


## Components
see [Styled System docs for prop breakdown](https://styled-system.com/table)

|Component|default el|props|
|---------|----------|-----|
|Box      |div       | `zIndex`, `fontSize`, `order`, `space`, `layout`, `color`, `background`, `border`, `borderColor`, `display`, `borderRadius`, `borderRadiuses*`, `overflow`, `boxShadow`, `justifySelf`, `alignSelf`, `flex`|