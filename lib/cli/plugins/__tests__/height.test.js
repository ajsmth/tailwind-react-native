import { plugin } from "../height";

test("height", () => {
  const themeConfig = {
    height: {
      sm: 40,
      md: 50,
    },
  };

  const output = plugin(themeConfig);
  expect(output["h-sm"]).toEqual({ height: 40 });
  expect(output["max-h-md"]).toEqual({ maxHeight: 50 });
  expect(output["min-h-md"]).toEqual({ minHeight: 50 });
});
