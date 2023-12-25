import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledButton = styled(Button)({
  fontWeight: "400",
  "&:hover": {
    color: "black",
    fontWeight: "400",
    backgroundColor: "grey",
    borderRadius: "10px",
  },
});

export default function Header() {
  return (
    <AppBar
      sx={{ backgroundColor: "#5a5a5a", borderBottom: "3px solid black" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <StyledButton color="inherit" component={NavLink} to="/">
            Home
          </StyledButton>
          <StyledButton color="inherit" component={NavLink} to="/build">
            Build
          </StyledButton>
          <StyledButton color="inherit" component={NavLink} to="/generator">
            Generator
          </StyledButton>
        </Box>
        <StyledButton color="inherit" component={NavLink} to="/login">
          Login
        </StyledButton>
        <StyledButton color="inherit" component={NavLink} to="/register">
          Register
        </StyledButton>
      </Toolbar>
    </AppBar>
  );
}
