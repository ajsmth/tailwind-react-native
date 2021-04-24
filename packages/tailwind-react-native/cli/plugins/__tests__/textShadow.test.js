import { plugin } from "../textShadow";

test("textShadow", () => {
  const smallShadow = {
    ios: {
      textShadowColor: "rgba(0,0,0)",
      textShadowOffset: {
        height: 2,
        width: 1,
      },
      textShadowOpacity: 0.1,
      textShadowRadius: 3,
    },
    android: {
      elevation: 1,
    },
  };

  const defaultShadow = {
    ios: {
      textShadowColor: "rgba(1,0,0)",
      textShadowOffset: {
        height: 6,
        width: 1,
      },
      textShadowOpacity: 1,
      textShadowRadius: 3,
    },
    android: {
      elevation: 1,
    },
  };

  const themeConfig = {
    textShadow: {
      sm: smallShadow,
      DEFAULT: defaultShadow,
    },
  };

  const output = plugin(themeConfig);

  expect(output["text-shadow-sm"]).toEqual(smallShadow);
  expect(output['text-shadow']).toEqual(defaultShadow)
});
