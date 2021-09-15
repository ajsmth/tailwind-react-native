import { plugin } from "../flexWrap";

test("flexGrow", () => {
  const themeConfig = {
    flexWrap: {
      ["flex-wrap"]: "wrap",
      ["flex-nowrap"]: "nowrap",
      ["flex-wrap-reverse"]: "wrap-reverse",
    },
  };

  const output = plugin(themeConfig);
  expect(output["flex-wrap"]).toEqual({ flexWrap: "wrap" });
  expect(output["flex-wrap-reverse"]).toEqual({ flexWrap: "wrap-reverse" });
});
