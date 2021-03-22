import { plugin } from "../padding";

test("padding", () => {
  const themeConfig = {
    padding: {
      1: 1,
      10: 10,
    },
  };

  const output = plugin(themeConfig);
  expect(output["p-10"]).toEqual({ padding: 10 });
  expect(output["px-1"]).toEqual({ paddingHorizontal: 1 });
});
