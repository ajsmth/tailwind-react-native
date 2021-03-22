import { plugin } from "../flexGrow";

test("flexGrow", () => {
  const themeConfig = {
    flexGrow: {
      10: 10,
      ["negative"]: -1,
    },
  };

  const output = plugin(themeConfig);
  expect(output["flex-grow-negative"]).toEqual({ flexGrow: -1 });
  expect(output["flex-grow-10"]).toEqual({ flexGrow: 10 });
});
