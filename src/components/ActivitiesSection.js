import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import data from "../data.json";
import Section from "./Section";
import ActivityItem from "./ActivityItem";

const ActivitiesSection = () => {
  const classes = useStyles();

  return (
    <Section title="Activities">
      <List className={classes.list} dense>
        {data.activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            person={activity.person}
            action={activity.action}
            target={activity.target}
            created_at={activity.created_at}
          />
        ))}
      </List>
    </Section>
  );
};

const useStyles = makeStyles((theme) => ({
  list: {
    padding: 0,
    marginTop: -theme.spacing(),
  },
}));

export default ActivitiesSection;
