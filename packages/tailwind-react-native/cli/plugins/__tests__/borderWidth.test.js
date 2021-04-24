import { plugin } from "../borderWidth";

test("borderWidth", () => {
  const themeConfig = {
    borderWidth: {
      0: 0,
      2: 2,
      DEFAULT: 1,
    },
  };

  const output = plugin(themeConfig);

  expect(output["border"]).toEqual({ borderWidth: 1 });
  expect(output["border-l"]).toEqual({ borderWidthLeft: 1 });
  expect(output["border-l-2"]).toEqual({ borderWidthLeft: 2 });
});
