import createStyleFn from "../../build";

const testStyles = {
  test: {
    color: "red",
  },

  wow: {
    backgroundColor: "blue",
  },
};

test("works", () => {
  const fn = createStyleFn({
    test: {
      color: "red",
    },
  });

  const result = fn("test");
  expect(result).toEqual({ color: "red" });
});

test("multiple classNames", () => {
  const fn = createStyleFn(testStyles);

  const result = fn("test", "wow");
  expect(result).toEqual({ color: "red", backgroundColor: "blue" });
});

test("variable classNames", () => {
  const fn = createStyleFn(testStyles);

  const isAmazing = false;
  const result = fn("test", isAmazing && "wow");
  expect(result).toEqual({ color: "red" });
});
