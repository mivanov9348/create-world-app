import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function AuthLayout() {
  return (
    <div>
      <Header />
      <main>
        <Box component="main" sx={{ marginTop: 1, marginBottom: 2 }}>
          <Outlet />
        </Box>
      </main>
      <Footer />
    </div>
  );
}
