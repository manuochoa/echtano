import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        white: "#FFFFFF",
        purple: "#AB69CC",
        lightBlack: "#2E2E3A",
        black: "#211E31",
        secondaryBlack: "#170B2E",
        green: "#24CA49",
        red: "#E63D3E"
    },
    fonts: ["sans-serif", "Aeonik"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;