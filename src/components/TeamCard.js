import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { ReactComponent as CampaignIcon } from "../icons/campaign.svg";
import { ReactComponent as LeadIcon } from "../icons/lead.svg";

const TeamCard = ({
  title,
  subHeader,
  imageSrc,
  isFav,
  description,
  campaigns,
  leads,
  disabled,
}) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx([classes.root, disabled ? classes.disabled : ""])}
      variant="outlined"
    >
      <CardHeader
        avatar={<Avatar aria-label="recipe" variant="rounded" src={imageSrc} />}
        action={
          disabled ? undefined : (
            <Checkbox
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon />}
              defaultChecked={isFav}
            />
          )
        }
        title={title}
        subheader={subHeader}
        classes={{
          avatar: classes.avatar,
          title: classes.title,
          subheader: classes.subheader,
        }}
      />
      <CardContent className={classes.description}>
        <Typography className="auto-ellipsis" variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableSpacing>
        <Button startIcon={<CampaignIcon />}>{campaigns} Campaigns</Button>
        <Button startIcon={<LeadIcon />}>{leads.toLocaleString()} Leads</Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  disabled: {
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.background.default,
  },
  avatar: {
    marginRight: theme.spacing(),
  },
  title: {
    fontSize: 16,
  },
  subheader: {
    color: theme.palette.text.disabled,
    fontSize: 13,
  },
  description: {
    paddingTop: 2,
    "&, & p": {
      color: theme.palette.grey[600],
      lineHeight: "17px",
    },
    "& p": {
      maxHeight: 34,
    },
  },
  actions: {
    borderTop: `1px solid ${theme.palette.background.default}`,
    "& button": {
      textTransform: "none",
      fontSize: 13,
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.grey[600],
      padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
    },
    "& svg": {
      width: theme.spacing(2),
      fill: theme.palette.text.disabled,
    },
  },
}));

export default TeamCard;
