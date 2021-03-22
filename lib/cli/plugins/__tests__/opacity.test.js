import { plugin } from "../opacity";

test("opacity", () => {
  const themeConfig = {
    opacity: {
      10: 0.1,
      100: 1,
    },
  };

  const output = plugin(themeConfig);
  expect(output["opacity-10"]).toEqual({ opacity: 0.1 });
  expect(output["opacity-100"]).toEqual({ opacity: 1 });
});
