import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import data from "../data.json";
import Card from "./TeamCard";
import TabContext from "../contexts/TabContext";
import Section from "./Section";

const TeamsSection = () => {
  const classes = useStyles();
  const [tab] = useContext(TabContext);
  const [filteredData, setFilteredData] = useState(data.teams);
  const filteredCount = filteredData.length;
  const totalCount = data.teams.length;

  useEffect(() => {
    const newData =
      tab === 0
        ? data.teams
        : data.teams.filter((t) =>
            tab === 1 ? t.is_favorited : t.is_archived
          );
    setFilteredData(newData);
  }, [tab]);

  const titles = ["All Teams", "Favorite Teams", "Archived Teams"];

  return (
    <Section
      title={titles[tab]}
      info={`Showing ${filteredCount} of ${totalCount}`}
    >
      <Grid container spacing={2}>
        {filteredData.map((team) => (
          <Grid item key={team.id} className={classes.gridItem}>
            <Card
              title={team.name}
              subHeader={team.created_at}
              imageSrc={team.image}
              isFav={team.is_favorited}
              description={team.description}
              campaigns={team.campaigns_count}
              leads={team.leads_count}
              disabled={team.is_archived}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

const useStyles = makeStyles((theme) => ({
  gridItem: {
    flex: 1,
    minWidth: 300,
    maxWidth: 600,
  },
}));

export default TeamsSection;
