import styled from "styled-components";
import propTypes from "@styled-system/prop-types";
import {
  zIndex,
  system,
  compose,
  display,
  flex,
  borderRadius,
  overflow,
  border,
  boxShadow,
  borderColor,
  justifySelf,
  alignSelf,
  space,
  layout,
  color,
  fontSize,
  order,
  background
} from "styled-system";
import { borderRadiuses } from "../util";

// the main layout element uses most
// of the avaialable styled-system props
const boxProps = compose(
  zIndex,
  fontSize,
  order,
  space,
  layout,
  color,
  background,
  border,
  borderColor,
  display,
  borderRadius,
  borderRadiuses,
  overflow,
  boxShadow,
  justifySelf,
  alignSelf,
  flex
);

const Box = styled("div")(boxProps);

Box.propTypes = {
  ...propTypes.fontSize,
  ...propTypes.order,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.borderColor,
  ...propTypes.display,
  ...propTypes.borderRadius,
  ...propTypes.borderRadiuses,
  ...propTypes.overflow,
  ...propTypes.boxShadow,
  ...propTypes.justifySelf,
  ...propTypes.alignSelf,
  ...propTypes.flex
};

Box.defaultProps = {};
Box.displayName = "Box";
export default Box;
