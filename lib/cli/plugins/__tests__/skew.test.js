import { plugin } from "../skew";

test("skew", () => {
  const themeConfig = {
    skew: {
      12: 12,
    },
  };

  const output = plugin(themeConfig);
  expect(output["skew-12"]).toEqual({ skew: 12 });
  expect(output["skew-x-12"]).toEqual({ skewX: 12 });
  expect(output["-skew-y-12"]).toEqual({ skewY: -12 });
});
