import { plugin } from "../borderColor";

test("borderColor", () => {
  const themeConfig = {
    color: {
      red: "#123456",
      blue: {
        100: "#654321",
      },
    },
  };

  const output = plugin(themeConfig);

  expect(output["border-red"]).toEqual({ borderColor: "#123456" });
  expect(output["border-l-red"]).toEqual({ borderLeftColor: "#123456" });
  expect(output["border-blue-100"]).toEqual({ borderColor: "#654321" });
});
