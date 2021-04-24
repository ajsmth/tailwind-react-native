import { plugin } from "../borderStyle";

test("borderStyle", () => {
  const themeConfig = {
    borderStyle: {
      solid: "solid",
    },
  };

  const output = plugin(themeConfig);

  expect(output["solid"]).toEqual({ borderStyle: "solid" });
});
