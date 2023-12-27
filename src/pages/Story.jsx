import { Box, Grid } from "@mui/material";
import Sidebar from "../components/Story/Sidebar";
import MainBox from "../components/Story/MainBox";

export default function Story() {
  return (
    <Box sx={{ flexGrow: 1, mt: "20px" }}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={10}>
          <MainBox />
        </Grid>
      </Grid>
    </Box>
  );
}
