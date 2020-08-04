import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const ActivityItem = ({ person, action, target, created_at }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root} alignItems="flex-start">
      <ListItemAvatar className={classes.avatar}>
        <Avatar alt={person.name} src={person.avatar} />
      </ListItemAvatar>
      <ListItemText
        className={classes.text}
        primary={
          action === "increased_quota" ? (
            <>
              <strong>{person.name}</strong> increased <strong>{target}</strong>
              's quota.
            </>
          ) : action === "added_leads" ? (
            <>
              <strong>{person.name}</strong> added new leads to{" "}
              <strong>{target}</strong>.
            </>
          ) : action === "archived_team" ? (
            <>
              <strong>{person.name}</strong> archived the team{" "}
              <strong>{target}</strong>.
            </>
          ) : (
            ""
          )
        }
        secondary={created_at}
      />
    </ListItem>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing()}px 0`,
  },
  avatar: {
    minWidth: 0,
    margin: 0,
    "& > *": {
      width: theme.spacing(4.5),
      height: theme.spacing(4.5),
      marginRight: theme.spacing(),
    },
  },
  text: {
    margin: 0,
  },
}));

export default ActivityItem;
