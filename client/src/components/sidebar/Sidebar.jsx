import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
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
    // {
    //   text: "Journals",
    //   icon: <NotesIcon />,
    //   onClick: () => navigate("/journals"),
    // },
    {
      text: "Goals",
      icon: <img alt='goals' src={require("./icons/goal.png")} />,
      onClick: () => navigate("/"),
    },
    {
      text: "Journals",
      icon: (
        <img
          alt='journal'
          src={require("./icons/journal.png")}
          className='add-journal-icon'
        />
      ),
      onClick: () => navigate("/journals"),
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
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
