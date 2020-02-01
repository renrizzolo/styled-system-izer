import React from "react";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./";
import PropTypes from "prop-types";

const ThemeWrapper = ({ children }) => {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

ThemeWrapper.propTypes = {
  children: PropTypes.node
};

export default ThemeWrapper;
