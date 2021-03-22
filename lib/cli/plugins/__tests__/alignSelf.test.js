import { plugin } from "../alignSelf";

test("alignSelf", () => {
  const themeConfig = {
    alignSelf: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
    },
  };

  const output = plugin(themeConfig);

  expect(output["self-start"]).toEqual({ alignSelf: "flex-start" });
  expect(output["self-end"]).toEqual({ alignSelf: "flex-end" });
});
