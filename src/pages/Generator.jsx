import { Box, CssBaseline } from "@mui/material";

import NameGenerator from "../components/Generator/NameGenerator";

export default function Generator() {
  return (
    <Box
      sx={{
        height: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column", // Ensuring flex items are stacked vertically
        alignItems: "center", // Horizontal centering
        justifyContent: "center", // Vertical centering
      }}
    >
      <CssBaseline />
      <NameGenerator />
    </Box>
  );
}
