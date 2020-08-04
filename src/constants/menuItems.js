import { ReactComponent as CampaignIcon } from "../icons/campaign.svg";
import { ReactComponent as TeamIcon } from "../icons/team.svg";
import { ReactComponent as LeadIcon } from "../icons/lead.svg";
import { ReactComponent as ReportIcon } from "../icons/report.svg";
import { ReactComponent as HelpIcon } from "../icons/help.svg";

export const menuItems = [
  { title: "Campaigns", Icon: CampaignIcon },
  { title: "Teams", Icon: TeamIcon, selected: true },
  { title: "Leads", Icon: LeadIcon },
  { title: "Reports", Icon: ReportIcon },
];

export const bottomMenuItems = [{ title: "Help", Icon: HelpIcon }];
