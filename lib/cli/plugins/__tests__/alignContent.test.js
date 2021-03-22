import { plugin } from "../alignContent";

test("alignContent", () => {
  const themeConfig = {
    alignContent: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
    },
  };

  const output = plugin(themeConfig);

  expect(output["content-start"]).toEqual({ alignContent: "flex-start" });
  expect(output["content-end"]).toEqual({ alignContent: "flex-end" });
});
