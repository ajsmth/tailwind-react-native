import { plugin } from "../flexWrap";

test("flexGrow", () => {
  const themeConfig = {
    flexWrap: {
      DEFAULT: "wrap",
      ["nowrap"]: "nowrap",
      ["reverse"]: "wrap-reverse",
    },
  };

  const output = plugin(themeConfig);
  expect(output["flex-wrap"]).toEqual({ flexWrap: "wrap" });
  expect(output["flex-wrap-reverse"]).toEqual({ flexWrap: "wrap-reverse" });
});
