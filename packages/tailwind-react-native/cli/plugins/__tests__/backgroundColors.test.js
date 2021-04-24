import { plugin } from "../backgroundColor";

test("backgroundColor", () => {
  const themeConfig = {
    color: {
      red: '#123456',
      blue: {
        100: '#654321'
      }
    },
  };


  const output = plugin(themeConfig);

  expect(output["bg-red"]).toEqual({ backgroundColor: "#123456" });
  expect(output["bg-blue-100"]).toEqual({ backgroundColor: "#654321" });
});
