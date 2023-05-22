import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Issues from "./AllIssues";
import MyIssues from "./MyIssues";
import MyTryingIssues from "./MyTryingIssues";
import MyCompletedIssues from "./MyCompletedIssues";
import Grid from "@mui/material/Grid";

const styles = {
  text: {
    color: "white",
    fontSize: "15px",
  },
};

export default function Tabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      xs={12}
      sx={{
        bgcolor: "#131516",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <TabContext value={value}>
        <Grid
          container
          xs={12}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            justifyContent: "center",
            p: "10px",
            alignItems: "center",
           
          }}
        >
          <TabList
            onChange={handleChange}
            sx={{
              backgroundColor: "#3a3f43",
              p: "10px",
              borderRadius: "20px",
              width: "auto",
            }}
          >
            <Tab label="Latest Issues" value="1" sx={styles.text} />
            <Tab label="My Issues" value="2" sx={styles.text} />
            <Tab label="Trying Issues" value="3" sx={styles.text} />
            <Tab label="Completed Issues" value="4" sx={styles.text} />
          </TabList>
        </Grid>
        <TabPanel value="1">
          <Issues />
        </TabPanel>
        <TabPanel value="2">
          <MyIssues />
        </TabPanel>
        <TabPanel value="3">
          <MyTryingIssues />
        </TabPanel>
        <TabPanel value="4">
          <MyCompletedIssues />
        </TabPanel>
      </TabContext>
    </Grid>
  );
}
