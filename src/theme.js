import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

export const drawerWidth = 80;
export const appBarHeight = 80;

const palette = {
  primary: {
    main: "#2995DA",
    dark: "#042235",
  },
  secondary: {
    main: "#F8CE43",
  },
  warning: {
    main: "#F8CE43",
  },
  info: {
    main: "#40D2BF",
  },
  error: {
    main: red.A400,
  },
  background: {
    default: "#E5E5E5",
    paper: "#fff",
  },
  text: {
    primary: "#000",
    secondary: "#7F7F7F",
  },
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "Nunito Sans, Arial",
    fontWeightMedium: 600,
    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },
  },
  palette,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: palette.primary.dark,
      },
    },
    MuiMenuItem: {
      root: {
        opacity: 0.3,
        "&:hover, &:focus": {
          opacity: 1,
        },
        "&$selected": {
          "&, &:hover": {
            opacity: 1,
            backgroundColor: `${palette.primary.main} !important`,
          },
        },
      },
    },
    MuiBadge: {
      badge: {
        fontSize: 11,
        padding: "0 4px",
        border: `2px solid ${palette.background.paper}`,
      },
    },
  },
  props: {
    MuiAppBar: {
      elevation: 1,
    },
    MuiPaper: {
      elevation: 1,
    },
  },
  shadows: [
    "none",
    "0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1)",
  ],
});

export default theme;
