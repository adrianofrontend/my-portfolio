import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: 'space-evenly',
  
}));

const NavBar = () => {
  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projects</MenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
