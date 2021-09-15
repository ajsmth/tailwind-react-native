import { plugin } from "../fontFamily";

test("fontFamily", () => {
  const themeConfig = {
    fontFamily: {
      sans: "123",
      serif: "321",
    },
  };

  const output = plugin(themeConfig);
  expect(output["font-sans"]).toEqual({ fontFamily: "123" });
  expect(output["font-serif"]).toEqual({ fontFamily: "321" });
});
