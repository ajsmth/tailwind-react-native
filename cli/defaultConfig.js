const remToPts = require("./helpers").remToPts;
const colors = require("./colors");
const spacings = require("./spacings");

module.exports = {
  theme: {
    flex: {
      negative: -1,
      0: 0,
      1: 1,
      2: 2,
      4: 4,
      8: 8,
    },

    flexDirection: {
      row: "row",
      ["row-reverse"]: "row-reverse",
      col: "column",
      ["col-reverse"]: "column-reverse",
    },

    flexGrow: {
      0: 0,
      1: 1,
    },

    flexShrink: {
      0: 0,
      1: 1,
    },

    justifyContent: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      between: "space-between",
      around: "space-around",
      evenly: "space-evenly",
    },

    alignItems: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      baseline: "baseline",
      stretch: "stretch",
    },

    alignContent: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      between: "space-between",
      around: "space-around",
      stretch: "stretch",
    },

    alignSelf: {
      auto: "auto",
      start: "flex-start",
      end: "flex-end",
      center: "center",
      stretch: "stretch",
      baseline: "baseline",
    },

    flexWrap: {
      ["flex-wrap"]: "wrap",
      ["flex-wrap-reverse"]: "wrap-reverse",
      ["flex-nowrap"]: "nowrap",
    },

    borderStyle: {
      soid: "solid",
      dotted: "dotted",
      dashed: "dashed",
    },

    resizeMode: {
      cover: "cover",
      contain: "contain",
      stretch: "stretch",
      repeat: "repeat",
      center: "center",
    },

    textAlign: {
      left: "left",
      right: "right",
      center: "center",
      justify: "justify",
    },

    textDecoration: {
      underline: "underline",
      ["line-through"]: "line-through",
      ["underline-line-through"]: "underline line-through",
    },

    textTransform: {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
      ["normal-case"]: "none",
    },

    textAlignVertical: {
      auto: "auto",
      top: "top",
      bottom: "bottom",
      center: "center",
    },

    writingDirection: {
      ltr: "ltr",
      auto: "auto",
      rtl: "rtl",
    },

    textDecorationStyle: {
      solid: "solid",
      double: "double",
      dotted: "dotted",
      dashed: "dashed",
    },

    position: {
      relative: "relative",
      absolute: "absolute",
    },

    overflow: {
      hidden: "hidden",
      scroll: "scroll",
      visible: "visible",
    },

    display: {
      flex: "flex",
      hidden: "hidden",
    },

    direction: {
      ltr: "ltr",
      rtl: "rtl",
    },

    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      transparent: "transparent",
      current: "currentColor",
    },

    margin: {
      auto: "auto",
      ...spacings,
    },

    padding: {
      ...spacings,
    },

    inset: {
      ...spacings,
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
    },

    width: {
      ...spacings,
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
    },

    height: {
      ...require("./spacings"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
    },

    borderRadius: {
      none: 0,
      sm: remToPts("0.125rem"),
      DEFAULT: remToPts("0.25rem"),
      md: remToPts("0.375rem"),
      lg: remToPts("0.5rem"),
      xl: remToPts("0.75rem"),
      "2xl": remToPts("1rem"),
      "3xl": remToPts("1.5rem"),
      full: remToPts("9999rem"),
    },

    borderWidth: {
      DEFAULT: 1,
      0: 0,
      2: 2,
      4: 4,
      8: 8,
    },

    opacity: {
      5: 0.05,
      10: 0.1,
      20: 0.2,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      80: 0.8,
      90: 0.9,
      95: 0.95,
      100: 1,
    },

    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
    },

    boxShadow: {
      sm: [1, 2, 1, 0.05, "rgb(0,0,0)"],
      DEFAULT: [1, 3, 1, 0.1, "rgba(0,0,0)"],
      md: [4, 6, -1, 0.1, "rgb(0,0,0)"],
      lg: [10, 15, -3, 0.1, "rgb(0,0,0)"],
      xl: [20, 25, -5, 0.1, "rgb(0,0,0)"],
      "2xl": [25, 50, -12, 0.25, "rgb(0,0,0)"],
      none: [0, 0, 0, 0, "rgb(0,0,0)"],
    },

    fontFamily: {
      sans: "ui-sans-serif",
      serif: "ui-serif",
      mono: "ui-monospace",
    },

    fontSize: {
      xs: [remToPts("0.75rem"), { lineHeight: remToPts("1rem") }],
      sm: [remToPts("0.875rem"), { lineHeight: remToPts("1.25rem") }],
      base: [remToPts("1rem"), { lineHeight: remToPts("1.5rem") }],
      lg: [remToPts("1.125rem"), { lineHeight: remToPts("1.75rem") }],
      xl: [remToPts("1.25rem"), { lineHeight: remToPts("1.75rem") }],
      "2xl": [remToPts("1.5rem"), { lineHeight: remToPts("2rem") }],
      "3xl": [remToPts("1.875rem"), { lineHeight: remToPts("2.25rem") }],
      "4xl": [remToPts("2.25rem"), { lineHeight: remToPts("2.5rem") }],
      "5xl": [remToPts("3rem"), { lineHeight: remToPts("3rem") }],
      "6xl": [remToPts("3.75rem"), { lineHeight: remToPts("3.75rem") }],
      "7xl": [remToPts("4.5rem"), { lineHeight: remToPts("4.5rem") }],
      "8xl": [remToPts("6rem"), { lineHeight: remToPts("6rem") }],
      "9xl": [remToPts("8rem"), { lineHeight: remToPts("8rem") }],
    },

    aspectRatio: {
      none: 0,
      square: 1,
      ["16/9"]: 16 / 9,
      ["4/3"]: 4 / 3,
      ["21/9"]: 21 / 9,
    },

    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    lineHeight: {
      tight: remToPts("1.25rem"),
      snug: remToPts("1.375rem"),
      normal: remToPts("1.5rem"),
      relaxed: remToPts("1.625rem"),
      loose: remToPts("2rem"),
      3: remToPts(".75rem"),
      4: remToPts("1rem"),
      5: remToPts("1.25rem"),
      6: remToPts("1.5rem"),
      7: remToPts("1.75rem"),
      8: remToPts("2rem"),
      9: remToPts("2.25rem"),
      10: remToPts("2.5rem"),
    },

    textShadowRadius: {
      tight: remToPts("1.25rem"),
      snug: remToPts("1.375rem"),
      normal: remToPts("1.5rem"),
      relaxed: remToPts("1.625rem"),
      loose: remToPts("2rem"),
      3: remToPts(".75rem"),
      4: remToPts("1rem"),
      5: remToPts("1.25rem"),
      6: remToPts("1.5rem"),
      7: remToPts("1.75rem"),
      8: remToPts("2rem"),
      9: remToPts("2.25rem"),
      10: remToPts("2.5rem"),
    },

    letterSpacing: {
      tighter: remToPts("-0.05rem"),
      tight: remToPts("-0.025rem"),
      normal: remToPts("0rem"),
      wide: remToPts("0.025rem"),
      wider: remToPts("0.05rem"),
      widest: remToPts("0.1rem"),
    },

    translate: {
      ...spacings,
    },

    rotate: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
      45: "45deg",
      90: "90deg",
      180: "180deg",
    },

    scale: {
      0: 0,
      50: 0.5,
      75: 0.75,
      90: 0.9,
      95: 0.95,
      100: 1,
      105: 1.05,
      110: 1.1,
      125: 1.25,
      150: 1.5,
    },

    skew: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
    },
  },
};
