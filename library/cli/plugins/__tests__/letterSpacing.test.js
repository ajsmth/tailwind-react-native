import { plugin } from "../letterSpacing";

test("letterSpacing", () => {
  const themeConfig = {
    letterSpacing: {
      ["wide"]: 0.25,
    },
  };

  const output = plugin(themeConfig);
  expect(output["tracking-wide"]).toEqual({ letterSpacing: 0.25 });
});
