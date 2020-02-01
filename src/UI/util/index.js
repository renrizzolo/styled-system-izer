import { system } from "styled-system";
// convenience shorthand for border radii e.g bblr={1} = borderBottomLeftRadius={1}
const config = {
  bblr: {
    property: "borderBottomLeftRadius",
    scale: "radii"
  },
  bbrr: {
    property: "borderBottomRightRadius",
    scale: "radii"
  },
  btlr: {
    property: "borderTopLeftRadius",
    scale: "radii"
  },
  btrr: {
    property: "borderTopRightRadius",
    scale: "radii"
  },
  br: {
    property: "borderRadius",
    scale: "radii"
  }
};

export const borderRadiuses = system(config);
