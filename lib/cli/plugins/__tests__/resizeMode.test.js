import { plugin } from "../resizeMode";

test("resizeMode", () => {
  const themeConfig = {
    resizeMode: {
      cover: "cover",
      contain: "contain"
    },
  };

  const output = plugin(themeConfig);
  expect(output["resize-cover"]).toEqual({ resizeMode: "cover" });
  expect(output["resize-contain"]).toEqual({ resizeMode: "contain" });
});
