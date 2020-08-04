import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";

import { appBarHeight } from "../theme";
import AppBar from "./AppBar";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {children}
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: {
    minHeight: appBarHeight,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default Layout;
