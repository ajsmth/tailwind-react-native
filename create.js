function create(styles, fn) {
  const memo = {};

  return function styleFn(classNames = "") {
    if (memo[classNames]) {
      return memo[classNames];
    }

    const style = fn(classNames, styles);
    memo[classNames] = style;
    return style;
  };
}

export default create;
