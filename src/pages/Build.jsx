import { Box, Grid, Button } from "@mui/material";

import { useState } from "react";
import StoryDetails from "../components/Build/StoryCard";

export default function Build() {
  function handleAddStory() {
    // Logic to add a new story
    // Redirect to the new story page or update the list
  }

  return (
    <Box
      sx={
        {
          /* existing styles */
        }
      }
    >
      <Button onClick={handleAddStory}>Add Story</Button>
      <Grid container spacing={2}></Grid>
    </Box>
  );
}
