import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Box, Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledButton = styled(Button)({
  fontWeight: "400",
  "&:hover": {
    color: "black",
    fontWeight: "400",
    backgroundColor: "#b4b4b4",
    borderRadius: "10px",
  },
});

export default function Header() {
  return (
    <AppBar
      sx={{ backgroundColor: "#161c38", borderBottom: "3px solid black" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton
            component={NavLink}
            to="/"
            edge="start"
            color="inherit"
            aria-label="home"
          >
            <img
              src="../public/images/logo.png"
              alt="World Builder Logo"
              style={{ height: "50px" }}
            />
          </IconButton>
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
