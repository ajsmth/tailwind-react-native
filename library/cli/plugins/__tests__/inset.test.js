import { plugin } from "../inset";

test("inset", () => {
  const themeConfig = {
    inset: {
      10: 10,
    },
  };

  const output = plugin(themeConfig);
  expect(output["inset-10"]).toEqual({ left: 10, right: 10, bottom: 10, top: 10 });
  expect(output["left-10"]).toEqual({ left: 10 });
});
