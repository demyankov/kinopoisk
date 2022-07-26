import { FontWeight } from "../../enums/fontWeight";

export const TYPOGRAPHY = {
  desktop: {
    headline1: {
      fontSize: "2.5rem",
      fontWeight: FontWeight.Semibold,
      lineHeight: "3.75rem",
    },
    headline2: {
      fontSize: "1.5rem",
      fontWeight: FontWeight.Semibold,
      lineHeight: "2.25rem",
    },
    subHeadline1: {
      fontSize: "1.125rem",
      fontWeight: FontWeight.Semibold,
      lineHeight: "1.5rem",
    },
    subHeadline2: {
      fontSize: "1rem",
      fontWeight: FontWeight.Bold,
      lineHeight: "1.5rem",
    },
    subHeadline3: {
      fontSize: "1rem",
      fontWeight: FontWeight.Semibold,
      lineHeight: "1.5rem",
    },
    body: {
      fontSize: "1rem",
      fontWeight: FontWeight.Medium,
      lineHeight: "1.5rem",
    },
  },

  tablet: {
    headline1: {
      fontSize: "2rem",
      fontWeight: FontWeight.Semibold,
      lineHeight: "3rem",
    },
    headline2: {
      fontSize: "1.5rem",
      fontWeight: FontWeight.Semibold,
      lineHeight: "2.25rem",
    },
    subHeadline1: {
      fontSize: "1.125rem",
      fontWeight: FontWeight.Semibold,
      lineHeight: "1.5rem",
    },
    subHeadline2: {
      fontSize: "1rem",
      fontWeight: FontWeight.Bold,
      lineHeight: "1.5rem",
    },
    subHeadline3: {
      fontSize: "1rem",
      fontWeight: FontWeight.Semibold,
      lineHeight: "1.5rem",
    },
    body: {
      fontSize: "1rem",
      fontWeight: FontWeight.Medium,
      lineHeight: "1.5rem",
    },
  },

  mobile: {
    headline1: {
      fontSize: "1.75rem",
      fontWeight: FontWeight.Semibold,
      lineHeight: "2.625rem",
    },
    headline2: {
      fontSize: "1.25rem",
      fontWeight: FontWeight.Semibold,
      lineHeight: "2rem",
    },
    subHeadline1: {
      fontSize: "1.125rem",
      fontWeight: FontWeight.Semibold,
      lineHeight: "1.5rem",
    },
    subHeadline2: {
      fontSize: "1rem",
      fontWeight: FontWeight.Bold,
      lineHeight: "1.5rem",
    },
    subHeadline3: {
      fontSize: "1rem",
      fontWeight: FontWeight.Semibold,
      lineHeight: "1.5rem",
    },
    body: {
      fontSize: "1rem",
      fontWeight: FontWeight.Medium,
      lineHeight: "1.5rem",
    },
  },
};

export const SIDEBARWIDTH = {
  desktop: "15rem",
  tablet: "13rem",
  mobile: "13rem",
};

export const SPACING = {
  desktop: {
    L1: "4rem",
    L2: "3.5rem",
    L3: "3rem",
    L4: "2.5rem",
    L5: "2rem",
    L6: "1.5rem",
    L7: "1rem",
    L8: "0.75rem",
    L9: "0.5rem",
    L10: "0.25rem",
  },

  tablet: {
    L1: "4rem",
    L2: "3rem",
    L3: "2.5rem",
    L4: "2rem",
    L5: "1.75rem",
    L6: "1.25rem",
    L7: "1rem",
    L8: "0.75rem",
    L9: "0.5rem",
    L10: "0.25rem",
  },

  mobile: {
    L1: "3rem",
    L2: "2.5rem",
    L3: "2.25rem",
    L4: "1.75rem",
    L5: "1.5rem",
    L6: "1rem",
    L7: "0.75rem",
    L8: "0.75rem",
    L9: "0.5rem",
    L10: "0.25rem",
  },
};

const darkTheme = {
  colors: {
    fontBase: "#fff",
    fontInvert: "#000",
    fontSecond: "#80858b",
    fontActive: "#7b61ff",
    fontError: "#ee204d",
    background: "#000",
    backgroundRating: "#00a340",
    backgroundInvert: "#e5e5e5",
    backgroundMedium: "#242426",
    backgroundSecond: "#323537",
    backgroundBright: "#7b61ff",
    backgroundButtonHover: "#664af0",
    backgroundDisabled: "#80858b",
  },
};

const lightTheme = {
  colors: {
    fontBase: "#000",
    fontInvert: "#fff",
    background: "#e5e5e5",
    backgroundInvert: "#ccc",
    backgroundMedium: "#666",
    fontSecond: "#444",
    fontActive: "#7b61ff",
    fontError: "#ee204d",
    backgroundSecond: "#ccc",
    backgroundRating: "#00a340",

    backgroundBright: "#7b61ff",
    backgroundButtonHover: "#664af0",
    backgroundDisabled: "#80858b",
  },
};

export const appTheme = {
  Dark: darkTheme,
  Light: lightTheme,
};
