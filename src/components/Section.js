import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const Section = ({ className, title, info, children }) => {
  const classes = useStyles();

  return (
    <Paper className={clsx([classes.root, className])}>
      <Toolbar className={classes.header}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {info}
        </Typography>
      </Toolbar>
      {children}
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3.75),
  },
  header: {
    margin: `-${theme.spacing(3.75)}px -${theme.spacing(
      3.75
    )}px ${theme.spacing(3.75)}px`,
    padding: `0 ${theme.spacing(3.75)}px`,
    minHeight: theme.spacing(8.5),
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export default Section;
