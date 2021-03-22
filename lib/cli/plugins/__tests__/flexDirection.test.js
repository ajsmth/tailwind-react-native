import { plugin } from "../flexDirection";

test("flexDirection", () => {
  const themeConfig = {
    flexDirection: {
      row: "row",
      ["row-reverse"]: "row-reverse",
    },
  };

  const output = plugin(themeConfig);
  expect(output["flex-row"]).toEqual({ flexDirection: "row" });
  expect(output["flex-row-reverse"]).toEqual({ flexDirection: "row-reverse" });
});
