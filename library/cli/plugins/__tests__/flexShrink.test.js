import { plugin } from "../flexShrink";

test("flexShrink", () => {
  const themeConfig = {
    flexShrink: {
      10: 10,
      ["negative"]: -1,
    },
  };

  const output = plugin(themeConfig);
  expect(output["flex-shrink-negative"]).toEqual({ flexShrink: -1 });
  expect(output["flex-shrink-10"]).toEqual({ flexShrink: 10 });
});
