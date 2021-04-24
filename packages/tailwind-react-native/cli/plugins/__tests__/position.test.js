import { plugin } from "../position";

test("position", () => {
  const themeConfig = {
    position: {
      absolute: "absolute",
      relative: "relative",
    },
  };

  const output = plugin(themeConfig);
  expect(output["absolute"]).toEqual({ position: "absolute" });
  expect(output["relative"]).toEqual({ position: "relative" });
});
