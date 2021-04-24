import { plugin } from "../rotate";

test("rotate", () => {
  const themeConfig = {
    rotate: {
      12: "12deg",
    },
  };

  const output = plugin(themeConfig);
  expect(output["rotate-12"]).toEqual({ rotate: "12deg" });
  expect(output["rotate-x-12"]).toEqual({ rotateX: "12deg" });
  expect(output["-rotate-y-12"]).toEqual({ rotateY: "-12deg" });
});
