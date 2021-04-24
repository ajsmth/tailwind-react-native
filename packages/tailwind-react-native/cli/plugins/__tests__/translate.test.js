import { plugin } from "../translate";

test("translate", () => {
  const themeConfig = {
    translate: {
      12: 12,
    },
  };

  const output = plugin(themeConfig);
  expect(output["translate-12"]).toEqual({ translate: 12 });
  expect(output["translate-x-12"]).toEqual({ translateX: 12 });
  expect(output["-translate-y-12"]).toEqual({ translateY: -12 });
});
