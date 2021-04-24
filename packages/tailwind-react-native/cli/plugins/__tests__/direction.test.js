import { plugin } from "../direction";

test("direction", () => {
  const themeConfig = {
    direction: {
      ltr: "ltr",
      rtl: "rtl",
    },
  };

  const output = plugin(themeConfig);
  expect(output["direction-ltr"]).toEqual({ direction: "ltr" });
});
