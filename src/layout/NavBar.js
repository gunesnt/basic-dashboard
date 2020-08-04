import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import MuiMenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

import { drawerWidth } from "../theme";
import logo from "../icons/logo.svg";
import { menuItems, bottomMenuItems } from "../constants/menuItems";

const MenuList = ({ items, classes }) => (
  <MuiMenuList disablePadding>
    {items.map((item) => (
      <Tooltip key={item.title} title={item.title} placement="right" arrow>
        <MenuItem className={classes.item} selected={item.selected}>
          <item.Icon />
        </MenuItem>
      </Tooltip>
    ))}
  </MuiMenuList>
);

const NavBar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root} aria-label="mailbox folders">
      <Drawer classes={{ paper: classes.paper }} variant="permanent">
        <div className={classes.item}>
          <img alt="logo" src={logo} />
        </div>
        <Divider />
        <div className={classes.menu}>
          <MenuList items={menuItems} classes={classes} />
          <MenuList items={bottomMenuItems} classes={classes} />
        </div>
      </Drawer>
    </nav>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: drawerWidth,
    flexShrink: 0,
  },
  paper: {
    width: drawerWidth,
    display: "flex",
  },
  menu: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  item: {
    height: 80,
    width: 80,
    display: "flex",
    justifyContent: "center",
  },
}));

export default NavBar;
