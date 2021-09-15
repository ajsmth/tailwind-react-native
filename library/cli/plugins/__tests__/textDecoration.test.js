import { plugin } from "../textDecoration";

test("textDecoration", () => {
  const themeConfig = {
    textDecoration: {
      underline: "underline",
    },
  };

  const output = plugin(themeConfig);
  expect(output["underline"]).toEqual({ textDecoration: "underline" });
});
