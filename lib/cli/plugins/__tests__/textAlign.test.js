import { plugin } from "../textAlign";

test("textAlign", () => {
  const themeConfig = {
    textAlign: {
      center: "center",
    },
  };

  const output = plugin(themeConfig);
  expect(output["text-center"]).toEqual({ textAlign: "center" });
});
