import { plugin } from "../margin";

test("margin", () => {
  const themeConfig = {
    margin: {
      1: 1,
      10: 10,
    },
  };

  const output = plugin(themeConfig);
  expect(output["m-10"]).toEqual({ margin: 10 });
  expect(output["mx-1"]).toEqual({ marginHorizontal: 1 });
  expect(output["m-auto"]).toEqual({ margin: "auto" });
  expect(output["mx-auto"]).toEqual({ marginHorizontal: "auto" });
  expect(output["-mx-1"]).toEqual({ marginHorizontal: -1 });
});
