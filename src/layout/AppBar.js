import React from "react";
import { makeStyles } from "@material-ui/core";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import data from "../data.json";
import Header from "./Header";
import { drawerWidth, appBarHeight } from "../theme";
import { ReactComponent as MailIcon } from "../icons/mail.svg";

const AppBar = () => {
  const classes = useStyles();
  const user = data.current_user;

  return (
    <MuiAppBar position="fixed" className={classes.appBar} color="default">
      <Toolbar className={classes.toolbar}>
        <div className={classes.appName}>
          <Typography variant="h6">NARWHAL</Typography>
        </div>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          <Typography color="textPrimary">Teams</Typography>
        </Breadcrumbs>
        <div className={classes.spacer} />
        <IconButton aria-label="delete">
          <Badge badgeContent={user.notifications_count} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
        <Button
          classes={{
            label: classes.avatarButtonLabel,
            endIcon: classes.avatarButtonEndIcons,
          }}
          endIcon={
            <>
              <Avatar alt="John" src={user.avatar} className={classes.avatar} />
              <ArrowDropDownIcon className={classes.avatarButtonIcon} />
            </>
          }
        >
          <span className={classes.avatarButtonText}>Hello, {user.name}</span>
        </Button>
      </Toolbar>
      <Header />
    </MuiAppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    minHeight: appBarHeight,
    justifyContent: "space-end",
  },
  appName: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    marginLeft: -theme.spacing(3),
    padding: `0 ${theme.spacing(5)}px`,
    borderRight: `1px solid ${theme.palette.divider}`,
    "& > *": {
      fontSize: "1.125rem",
      color: "#1A1919",
      fontWeight: 600,
      opacity: 0.5,
    },
  },
  breadcrumbs: {
    padding: `0 ${theme.spacing(3.5)}px`,
    "& *": {
      fontSize: "1.125rem",
    },
  },
  spacer: {
    flex: 1,
  },
  avatarButtonLabel: {
    textTransform: "none",
  },
  avatarButtonText: {
    opacity: 0.5,
  },
  avatarButtonEndIcons: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
  },
  avatarButtonIcon: {
    opacity: 0.2,
  },
}));

export default AppBar;
