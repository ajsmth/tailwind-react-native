function create(fn, styles, memoize = true) {
  const memo = {};

  return function styleFn(classNames = "") {
    if (memoize && memo[classNames]) {
      return memo[classNames];
    }

    const style = fn(classNames, styles);

    if (memoize) {
      memo[classNames] = style;
    }

    return style;
  };
}

module.exports = create;
