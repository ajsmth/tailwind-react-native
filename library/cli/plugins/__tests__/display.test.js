import { plugin } from "../display";

test("display", () => {
  const themeConfig = {
    display: {
      flex: 'flex',
      hidden: 'hidden'
    },
  };

  const output = plugin(themeConfig);
  expect(output['flex']).toEqual({ display: 'flex' })
  expect(output['hidden']).toEqual({ display: 'hidden' })
});
