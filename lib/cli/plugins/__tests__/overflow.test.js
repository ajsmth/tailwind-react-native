import { plugin } from "../overflow";

test("overflow", () => {
  const themeConfig = {
    overflow: {
      hidden: "hidden",
      scroll: "scroll",
    },
  };

  const output = plugin(themeConfig);
  expect(output["overflow-hidden"]).toEqual({ overflow: "hidden" });
  expect(output["overflow-scroll"]).toEqual({ overflow: "scroll" });
});
