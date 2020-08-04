import React, { useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

import { ReactComponent as PlusIcon } from "../icons/plus.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { menuItems } from "../constants/menuItems";
import TabContext from "../contexts/TabContext";

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(18),
    minWidth: "0 !important",
    padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
    marginRight: theme.spacing(3),
    color: "black",
  },
}))((props) => <Tab {...props} />);

const Header = () => {
  const classes = useStyles();
  const [tab, setTab] = useContext(TabContext);

  const onTabChange = (event, newValue) => setTab(newValue);

  const { title, Icon } = menuItems[1];

  return (
    <Toolbar className={classes.root} color="transparent">
      <Toolbar className={classes.toolbar}>
        <div className={classes.titleWrapper}>
          <Icon className={classes.icon} />
          <Typography variant="h4" className={classes.titleText}>
            {title}
          </Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          classes={{
            root: classes.button,
            startIcon: classes.buttonIcon,
          }}
          startIcon={<PlusIcon />}
          disableElevation
        >
          Create New Team
        </Button>
      </Toolbar>
      <Toolbar className={classes.toolbar}>
        <Tabs
          value={tab}
          onChange={onTabChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="simple tabs example"
          className={classes.tabs}
        >
          {["All", "Favorites", "Archived"]}
          <StyledTab label="All" />
          <StyledTab label="Favorites" />
          <StyledTab label="Archived" />
        </Tabs>
        <Input
          placeholder="Search team name ..."
          className={classes.searchField}
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon className={classes.searchFieldIcon} />
            </InputAdornment>
          }
        />
      </Toolbar>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    minHeight: "0 !important",
    display: "flex",
    justifyContent: "space-between",
    "&:last-child": {
      marginTop: 30,
    },
  },
  titleWrapper: {
    display: "flex",
  },
  titleText: {
    fontSize: 30,
    fontWeight: theme.typography.fontWeightMedium,
  },
  icon: {
    fill: "#A4A6A8",
    width: 34,
    height: 34,
    marginRight: theme.spacing(),
  },
  tabs: {
    alignSelf: "flex-end",
  },
  button: {
    color: "white",
    backgroundColor: theme.palette.info.main,
  },
  buttonIcon: {
    marginRight: theme.spacing(2.5),
  },
  searchField: {
    width: "100%",
    maxWidth: 225,
    minWidth: 190,
    fontWeight: theme.typography.fontWeightMedium,
  },
  searchFieldIcon: {
    fill: theme.palette.text.disabled,
  },
}));

export default Header;
