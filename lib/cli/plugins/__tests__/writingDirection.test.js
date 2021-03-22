import { plugin } from "../writingDirection";

test("writingDirection", () => {
  const themeConfig = {
    writingDirection: {
      ltr: "ltr",
    },
  };

  const output = plugin(themeConfig);
  expect(output["text-direction-ltr"]).toEqual({ writingDirection: "ltr" });
});
