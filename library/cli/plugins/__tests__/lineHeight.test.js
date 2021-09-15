import { plugin } from "../lineHeight";

test("lineHeight", () => {
  const themeConfig = {
    lineHeight: {
      ["loose"]: 0.25,
    },
  };

  const output = plugin(themeConfig);
  expect(output["leading-loose"]).toEqual({ lineHeight: 0.25 });
});
