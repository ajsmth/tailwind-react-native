import { plugin } from "../textAlignVertical";

test("textAlignVertical", () => {
  const themeConfig = {
    textAlignVertical: {
      bottom: "bottom",
    },
  };

  const output = plugin(themeConfig);
  expect(output["text-vertical-bottom"]).toEqual({ textAlignVertical: "bottom" });
});
