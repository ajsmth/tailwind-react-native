import { plugin } from "../flex";

test("flex", () => {
  const themeConfig = {
    flex: {
      0: 0,
      negative: -1,
    },
  };

  const output = plugin(themeConfig);
  expect(output["flex-0"]).toEqual({ flex: 0 });
  expect(output['flex-negative']).toEqual({ flex: -1 });
});
