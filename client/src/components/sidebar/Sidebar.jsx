import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const itemList = [
    { text: "Home", icon: <HomeIcon />, onClick: () => navigate("/") },
    {
      text: "Goals",
      icon: <LibraryAddCheckIcon />,
      onClick: () => navigate("/goals"),
    },
    {
      text: "Journals",
      icon: <DriveFileRenameOutlineIcon />,
      onClick: () => navigate("/journals"),
    },
    {
      text: "Logout",
      icon: <LogoutIcon />,
      onClick: () => navigate("/login"),
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
          {itemList.map((item) => {
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
