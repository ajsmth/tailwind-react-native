

function interpolateStyles(value, ...styles) {
  const interpolations = getInterpolationsForStyles(...styles);
  const interpolatedStyle = applyAnimatedValueToInterpolations(value, interpolations);
  return interpolatedStyle;
}

function getInterpolationsForStyles(...styles) {
  const output = {};

  if (styles.length === 0) {
    return {};
  }

  if (styles.length === 1) {
    return styles;
  }

  styles.forEach((style, index) => {
    structureStylesToInterpolation(output, style, index);
  });

  // transform back to array
  if (output.transform) {
    output.transform = Object.keys(output.transform).map((key) => {
      return {
        [key]: output.transform[key],
      };
    });
  }

  return output;
}

function structureStylesToInterpolation(output = {}, style = {}, index) {
  style.transform = style.transform || [];

  const styleKeys = Object.keys(style);

  styleKeys.forEach((styleProp) => {
    if (style[styleProp] !== undefined && styleProp !== "transform") {
      if (!output[styleProp]) {
        output[styleProp] = {
          inputRange: [],
          outputRange: [],
        };
      }

      output[styleProp].inputRange.push(index);
      output[styleProp].outputRange.push(style[styleProp]);
    }
  });

  if (style.transform.length) {
    style.transform.forEach((transformation) => {
      if (!output.transform) {
        // use an obj and convert to array after
        output.transform = {};
      }

      const [propertyName] = Object.keys(transformation);
      if (!output.transform[propertyName]) {
        output.transform[propertyName] = {
          inputRange: [],
          outputRange: [],
        };
      }

      output.transform[propertyName].inputRange.push(index);
      output.transform[propertyName].outputRange.push(
        transformation[propertyName]
      );
    });
  }
}

function applyAnimatedValueToInterpolations(value, styles) {
  const assembledStyles = {};

  styles.transform = styles.transform || [];

  styles.transform.forEach((transformation) => {
    const [transformProperty] = Object.keys(transformation);
    const interpolation = transformation[transformProperty];

    const interpolatedStyle = value.interpolate(interpolation);

    if (!assembledStyles.transform) {
      assembledStyles.transform = [];
    }

    assembledStyles.transform.push({ [transformProperty]: interpolatedStyle });
  });

  Object.keys(styles).forEach((key) => {
    if (styles[key] && key !== "transform") {
      assembledStyles[key] = value.interpolate(styles[key]);
    }
  });

  return assembledStyles;
}

export default interpolateStyles;
