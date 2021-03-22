import { plugin } from "../fontSize";

test("fontSize", () => {
  const themeConfig = {
    fontSize: {
      lg: 900,
      md: "500",
    },
  };

  const output = plugin(themeConfig);
  expect(output["text-lg"]).toEqual({ fontSize: 900 });
  expect(output["text-md"]).toEqual({ fontSize: "500" });
});
