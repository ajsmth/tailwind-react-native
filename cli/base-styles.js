const applyBaseStyle = require("./util/applyBaseStyle");

const baseStyles = {

   ["direction-ltr"]: {
    direction: "ltr",
  },

  ["direction-rtl"]: {
    direction: "rtl",
  },

  ["flex-negative"]: {
    flex: -1,
  },

  ["flex-row"]: {
    flexDirection: "row",
  },
  ["flex-row-reverse"]: {
    flexDirection: "row-reverse",
  },
  ["flex-col"]: {
    flexDirection: "column",
  },
  ["flex-col-reverse"]: {
    flexDirection: "column-reverse",
  },

  ["flex-grow-0"]: {
    flexGrow: 0,
  },
  ["flex-grow-1"]: {
    flexGrow: 1,
  },

  ["flex-shrink-0"]: {
    flexShrink: 0,
  },
  ["flex-shrink-1"]: {
    flexShrink: 1,
  },

  ["justify-start"]: {
    justifyContent: "flex-start",
  },
  ["justify-end"]: {
    justifyContent: "flex-end",
  },
  ["justify-center"]: {
    justifyContent: "center",
  },
  ["justify-between"]: {
    justifyContent: "space-between",
  },
  ["justify-around"]: {
    justifyContent: "space-around",
  },
  ["justify-evenly"]: {
    justifyContent: "space-evenly",
  },

  ["items-start"]: {
    alignItems: "flex-start",
  },
  ["items-end"]: {
    alignItems: "flex-end",
  },
  ["items-center"]: {
    alignItems: "center",
  },
  ["items-baseline"]: {
    alignItems: "baseline",
  },
  ["items-stretch"]: {
    alignItems: "stretch",
  },

  ["content-start"]: {
    alignContent: "flex-start",
  },
  ["content-end"]: {
    alignContent: "flex-end",
  },
  ["content-center"]: {
    alignContent: "center",
  },
  ["content-between"]: {
    alignContent: "space-between",
  },
  ["content-around"]: {
    alignContent: "space-around",
  },
  ["content-stretch"]: {
    alignContent: "stretch",
  },

  ["self-auto"]: {
    alignSelf: "auto",
  },
  ["self-start"]: {
    alignSelf: "flex-start",
  },
  ["self-end"]: {
    alignSelf: "flex-end",
  },
  ["self-center"]: {
    alignSelf: "center",
  },
  ["self-stretch"]: {
    alignSelf: "stretch",
  },
  ["self-baseline"]: {
    alignSelf: "baseline",
  },

  ["flex-wrap"]: {
    flexWrap: "wrap",
  },
  ["flex-wrap-reverse"]: {
    flexWrap: "wrap-reverse",
  },
  ["flex-nowrap"]: {
    flexWrap: "nowrap",
  },

  ["border-solid"]: {
    borderStyle: "solid",
  },
  ["border-dotted"]: {
    borderStyle: "dotted",
  },
  ["border-dashed"]: {
    borderStyle: "dashed",
  },

  ["resize-cover"]: {
    resizeMode: "cover",
  },
  ["resize-contain"]: {
    resizeMode: "contain",
  },
  ["resize-stretch"]: {
    resizeMode: "stretch",
  },
  ["resize-repeat"]: {
    resizeMode: "repeact",
  },
  ["resize-center"]: {
    resizeMode: "center",
  },

  ["text-left"]: {
    textAlign: "left",
  },
  ["text-right"]: {
    textAlign: "right",
  },
  ["text-center"]: {
    textAlign: "center",
  },
  ["text-justify"]: {
    textAlign: "justify",
  },

  ["underline"]: {
    textDecoration: "underline",
  },

  ["line-through"]: {
    textDecoration: "line-through",
  },

  ["underline-line-through"]: {
    textDecoration: "underline line-through",
  },

  ["uppercase"]: {
    textTransform: "uppercase",
  },
  ["lowercase"]: {
    textTransform: "lowercase",
  },
  ["capitalize"]: {
    textTransform: "capitalize",
  },
  ["normal-case"]: {
    textTransform: "none",
  },

  ["text-decoration-solid"]: {
    textDecorationStyle: "solid",
  },
  ["text-decoration-double"]: {
    textDecorationStyle: "double",
  },
  ["text-decoration-dotted"]: {
    textDecorationStyle: "dotted",
  },
  ["text-decoration-dashed"]: {
    textDecorationStyle: "dashed",
  },

  ["text-align-vertical-auto"]: {
    textAlignVertical: "auto",
  },
  ["text-align-vertical-top"]: {
    textAlignVertical: "top",
  },
  ["text-align-vertical-bottom"]: {
    textAlignVertical: "bottom",
  },
  ["text-align-vertical-center"]: {
    textAlignVertical: "center",
  },

  ["text-direction-ltr"]: {
    writingDirection: "ltr",
  },
  ["text-direction-auto"]: {
    writingDirection: "auto",
  },
  ["text-direction-rtl"]: {
    writingDirection: "rtl",
  },
};

const stylesByPlatform = applyBaseStyle(baseStyles);

module.exports = stylesByPlatform;
