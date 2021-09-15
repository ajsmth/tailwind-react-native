import { plugin } from "../textColor";

test("textColor", () => {
  const themeConfig = {
    color: {
      red: '#123456',
      blue: {
        100: '#654321'
      }
    },
  };



  const output = plugin(themeConfig);

  expect(output["text-red"]).toEqual({ color: "#123456" });
  expect(output["text-s-blue-100"]).toEqual({ textShadowColor: "#654321" });
});
