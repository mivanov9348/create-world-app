import { List, ListItem, ListItemText } from "@mui/material";
import PropTypes from "prop-types";

function Sidebar({ onSelect }) {
  const items = ["+ Character", "+ Religion", "+ Place"]; // Example items

  return (
    <List
      component="nav"
      sx={{
        border: "3px solid #000",
        borderRadius: "5px",
        width: "250px",
        height: "100vh",
      }}
    >
      {items.map((item, index) => (
        <ListItem key={index} button onClick={() => onSelect(item)}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
}

Sidebar.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Sidebar;
