import { plugin } from "../textTransform";

test("textTransform", () => {
  const themeConfig = {
    textTransform: {
      uppercase: "uppercase",
    },
  };

  const output = plugin(themeConfig);
  expect(output["uppercase"]).toEqual({ textTransform: "uppercase" });
});
