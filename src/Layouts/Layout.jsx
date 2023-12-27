import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Header />
      <Box sx={{ pt: "64px", width: "100%", minWidth: "100vh" }}>
        <Outlet />
      </Box>
    </>
  );
}
