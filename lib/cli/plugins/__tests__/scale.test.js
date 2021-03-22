import { plugin } from "../scale";

test("scale", () => {
  const themeConfig = {
    scale: {
      12: 12,
    },
  };

  const output = plugin(themeConfig);
  expect(output["scale-12"]).toEqual({ scale: 12 });
  expect(output["scale-x-12"]).toEqual({ scaleX: 12 });
  expect(output["-scale-y-12"]).toEqual({ scaleY: -12 });
});
