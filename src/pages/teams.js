import React from "react";
import Grid from "@material-ui/core/Grid";
import TeamsSection from "../components/TeamsSection";
import ActivitiesSection from "../components/ActivitiesSection";

const TeamsPage = () => (
  <Grid container spacing={4} style={{ marginTop: 148 }}>
    <Grid item sm md lg xl>
      <TeamsSection />
    </Grid>
    <Grid item sm={5} md={4} lg={3} xl={2}>
      <ActivitiesSection />
    </Grid>
  </Grid>
);

export default TeamsPage;
