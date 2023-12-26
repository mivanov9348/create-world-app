import { Box, CssBaseline, Grid } from "@mui/material";

import NameGenerator from "../components/Generator/NameGenerator";
import CityNameGenerator from "../components/Generator/CityNameGenerator";

export default function Generator() {
  return (
    <Box
      sx={{
        backgroundColor: "#444444",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CssBaseline />

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4}>
          <CityNameGenerator />
        </Grid>

        <Grid item xs={12} md={4}>
          <NameGenerator />
        </Grid>
      </Grid>
    </Box>
  );
}
