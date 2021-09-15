import { plugin } from "../boxShadow";

test("boxShadow", () => {
  const smallShadow = {
    ios: {
      shadowColor: "rgba(0,0,0)",
      shadowOffset: {
        height: 2,
        width: 1,
      },
      shaddowOpacity: 0.1,
      shadowRadius: 3,
    },
    android: {
      elevation: 1,
    },
  };

  const defaultShadow = {
    ios: {
      shadowColor: "rgba(1,0,0)",
      shadowOffset: {
        height: 6,
        width: 1,
      },
      shaddowOpacity: 1,
      shadowRadius: 3,
    },
    android: {
      elevation: 1,
    },
  };

  const themeConfig = {
    boxShadow: {
      sm: smallShadow,
      DEFAULT: defaultShadow,
    },
  };

  const output = plugin(themeConfig);

  expect(output["shadow-sm"]).toEqual(smallShadow);
  expect(output['shadow']).toEqual(defaultShadow)
});
