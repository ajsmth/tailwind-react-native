import { plugin } from "../zIndex";

test("zIndex", () => {
  const themeConfig = {
    zIndex: {
      10: 0.1,
      100: 1,
    },
  };

  const output = plugin(themeConfig);
  expect(output["z-10"]).toEqual({ zIndex: 0.1 });
  expect(output["z-100"]).toEqual({ zIndex: 1 });
});
