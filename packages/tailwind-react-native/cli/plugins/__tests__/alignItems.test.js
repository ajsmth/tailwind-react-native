import { plugin } from "../alignItems";

test("alignItems", () => {
  const themeConfig = {
    alignItems: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
    },
  };

  const output = plugin(themeConfig);

  expect(output["items-start"]).toEqual({ alignItems: "flex-start" });
  expect(output["items-end"]).toEqual({ alignItems: "flex-end" });
});
