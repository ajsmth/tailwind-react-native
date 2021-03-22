import { plugin } from "../justifyContent";

test("justifyContent", () => {
  const themeConfig = {
    justifyContent: {
      ["start"]: "flex-start",
      end: "flex-end",
    },
  };

  const output = plugin(themeConfig);
  expect(output["justify-start"]).toEqual({ justifyContent: "flex-start" });
  expect(output["justify-end"]).toEqual({ justifyContent: "flex-end" });
});
