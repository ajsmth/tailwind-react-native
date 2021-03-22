import { plugin } from "../borderRadius";

test("borderRadius", () => {
  const themeConfig = {
    borderRadius: {
      sm: 2,
      DEFAULT: 4
    },
  };

  const output = plugin(themeConfig);

  expect(output['rounded']).toEqual({ borderRadius: 4 })
  expect(output["rounded-sm"]).toEqual({ borderRadius: 2 });
  expect(output["rounded-tl-sm"]).toEqual({ borderTopLeftRadius: 2 });
});
