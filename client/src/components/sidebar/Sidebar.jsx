import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import NotesIcon from "@mui/icons-material/Notes";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  // const navigateHome = () => {
  //   navigate("/hello");
  // };
  const itemList = [
    { text: "Home", icon: <HomeIcon />, onClick: () => navigate("/") },
    {
      text: "Journals",
      icon: <NotesIcon />,
      onClick: () => navigate("/journals"),
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      {/* <AppBar
        position='fixed'
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar> */}
      <Drawer
        PaperProps={{
          sx: { width: "25%" },
        }}
        variant='permanent'
        anchor='left'
      >
        <List>
          {itemList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
export default Sidebar;
