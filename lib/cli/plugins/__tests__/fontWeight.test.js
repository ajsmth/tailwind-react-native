import { plugin } from "../fontWeight";

test("fontWeight", () => {
  const themeConfig = {
    fontWeight: {
      bold: "900",
      semibold: "500",
    },
  };

  const output = plugin(themeConfig);
  expect(output["font-bold"]).toEqual({ fontWeight: "900" });
  expect(output["font-semibold"]).toEqual({ fontWeight: "500" });
});
