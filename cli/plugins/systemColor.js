const colors = require("../colors");

function systemColor(theme) {
  const systemColor = {};

  for (let systemColorName in systemColors) {
    const value = systemColors[systemColorName];

    systemColor[`text-platform-${systemColorName}`] = {
      ios: {
        color: {
          semantic: [value.ios],
        },
      },
      android: {
        color: {
          resource_paths: [value.android],
        },
      },
      default: {
        color: value.default,
      },
    };

    systemColor[`bg-platform-${systemColorName}`] = {
      ios: {
        backgroundColor: {
          semantic: [value.ios],
        },
      },
      android: {
        backgroundColor: {
          resource_paths: [value.android],
        },
      },
      default: {
        backgroundColor: value.default,
      },
    };
  }

  return systemColor;
}

function getColor(colorName) {
  const [name, value] = colorName.split("-");
  const color = colors[name] ? colors[name][value] : colorName;
  return color || "";
}

const systemColors = {
  blue: {
    ios: "systemBlue",
    android: "?attr/systemBlue",
    default: getColor("blue-500"),
  },
  brown: {
    ios: "systemBrown",
    android: "?attr/systemBrown",
    default: getColor("brown-500"),
  },
  green: {
    ios: "systemGreen",
    android: "?attr/systemGreen",
    default: getColor("green-500"),
  },
  indigo: {
    ios: "systemIndigo",
    android: "?attr/systemIndigo",
    default: getColor("indigo-500"),
  },
  orange: {
    ios: "systemOrange",
    android: "?attr/systemOrange",
    default: getColor("orange-500"),
  },
  pink: {
    ios: "systemPink",
    android: "?attr/systemPink",
    default: getColor("pink-500"),
  },
  purple: {
    ios: "systemPurple",
    android: "?attr/systemPurple",
    default: getColor("purple-500"),
  },
  red: {
    ios: "systemRed",
    android: "?attr/systemRed",
    default: getColor("red-500"),
  },
  teal: {
    ios: "systemTeal",
    android: "?attr/systemTeal",
    default: getColor("teal-500"),
  },
  yellow: {
    ios: "systemYellow",
    android: "?attr/systemYellow",
    default: getColor("yellow-500"),
  },
  ["gray-1"]: {
    ios: "systemGray",
    android: "?attr/systemGray",
    default: getColor("gray-600"),
  },
  ["gray-2"]: {
    ios: "systemGray2",
    android: "?attr/systemGray2",
    default: getColor("gray-500"),
  },
  ["gray-3"]: {
    ios: "systemGray3",
    android: "?attr/systemGray3",
    default: getColor("gray-400"),
  },
  ["gray-4"]: {
    ios: "systemGray4",
    android: "?attr/systemGray4",
    default: getColor("gray-300"),
  },
  ["gray-5"]: {
    ios: "systemGray5",
    android: "?attr/systemGray5",
    default: getColor("gray-200"),
  },
  ["gray-6"]: {
    ios: "systemGray6",
    android: "?attr/systemGray6",
    default: getColor("gray-100"),
  },
  clear: {
    ios: "clear",
    android: "?attr/clear",
    default: getColor("transparent"),
  },
};

module.exports = systemColor;
