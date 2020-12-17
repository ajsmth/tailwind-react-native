function rotate(theme) {
  const rotate = {};

  for (let rotateName in theme.rotate) {
    const value = theme.rotate[rotateName];

    rotate[`rotate-${rotateName}`] = {
      rotate: value,
    };

    rotate[`-rotate-${rotateName}`] = {
      rotate: `-${value}`,
    };

    rotate[`rotate-x-${rotateName}`] = {
      rotateX: value,
    };

    rotate[`-rotate-x-${rotateName}`] = {
      rotateX: `-${value}`,
    };

    rotate[`rotate-y-${rotateName}`] = {
      rotateY: value,
    };

    rotate[`-rotate-y-${rotateName}`] = {
      rotateY: `-${value}`,
    };
  }

  return rotate;
}

module.exports = rotate;
