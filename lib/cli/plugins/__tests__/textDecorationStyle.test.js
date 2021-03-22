import { plugin } from "../textDecorationStyle";

test("textDecorationStyle", () => {
  const themeConfig = {
    textDecorationStyle: {
      underline: "underline",
    },
  };

  const output = plugin(themeConfig);
  expect(output["text-decoration-underline"]).toEqual({ textDecorationStyle: "underline" });
});
