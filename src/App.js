import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { BuildTheme } from "./assets/global/Theme-variable";
import MultistepForm from './components/MultistepForm/MultistepForm';
//import { CheckboxesAutocomplete } from "./theme/components/forms/autoComplete/CheckboxesAutocomplete";
import FullLayout from "./theme/layouts/full-layout/FullLayout";
const App = () => {
  const customizer = {
    direction: "ltr",
    theme: "RED_THEME",
    activeMode: "light",
  };
  const theme = BuildTheme(customizer);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={1}>
        <FullLayout
          customizer={customizer}
          children={
            <>
              <MultistepForm />
            </>
          }
        />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
