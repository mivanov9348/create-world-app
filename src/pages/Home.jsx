import { Box, CssBaseline } from "@mui/material";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Box
        component="img"
        alt="img"
        sx={{ height: "100px", width: "100px", marginTop: "100px" }}
        src="../public/images/logo.png"
      ></Box>
    </>
  );
}
