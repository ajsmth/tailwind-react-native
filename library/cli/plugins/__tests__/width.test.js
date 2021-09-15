import { plugin } from "../width";

test("width", () => {
  const themeConfig = {
    width: {
      sm: 40,
      md: 50,
    },
  };

  const output = plugin(themeConfig);
  expect(output["w-sm"]).toEqual({ width: 40 });
  expect(output["max-w-md"]).toEqual({ maxWidth: 50 });
  expect(output["min-w-md"]).toEqual({ minWidth: 50 });
});
