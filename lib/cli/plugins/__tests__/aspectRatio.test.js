import { plugin } from "../aspectRatio";

test("aspectRatio", () => {
  const themeConfig = {
    aspectRatio: {
      wide: 16 / 9,
    },
  };

  const output = plugin(themeConfig);

  expect(output["aspect-ratio-wide"]).toEqual({ aspectRatio: 16 / 9 });
});
