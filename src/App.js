import React, { useState } from "react";
import Layout from "./layout";
import TeamsPage from "./pages/teams";
import TabContext from "./contexts/TabContext";

const App = () => {
  const [tab, setTab] = useState(0);

  return (
    <TabContext.Provider value={[tab, setTab]}>
      <Layout>
        <TeamsPage />
      </Layout>
    </TabContext.Provider>
  );
};

export default App;
