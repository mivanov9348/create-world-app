import { Container, Typography, Divider, Button } from "@mui/material";
import { useState } from "react";

export default function CityNameGenerator() {
  const [cityName, setcityName] = useState("");

  function generateName() {
    setcityName("Duckburg");
  }
  return (
    <Container
      sx={{
        textAlign: "center",
        backgroundColor: "gray",
        height: "150px",
        width: "500px",
        border: "2px solid black",
        padding: 2,
        borderRadius: "5px",
      }}
    >
      <Typography variant="h5">Generate A Random City Name</Typography>
      <Divider sx={{ color: "red" }} />
      <Button variant="contained" onClick={generateName} sx={{ mt: "10px" }}>
        Generate!
      </Button>
      <Typography variant="h6" sx={{ color: "#000dff" }}>
        {cityName || "-"}
      </Typography>
    </Container>
  );
}
