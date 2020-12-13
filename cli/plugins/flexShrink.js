function flexShrink(theme) {
    const flexShrink = {};
  
    for (let flexShrinkName in theme.flexShrink) {
      const value = theme.flexShrink[flexShrinkName];
  
      flexShrink[`flex-shrink-${flexShrinkName}`] = {
        default: {
          flexShrink: value,
        },
      };
    }
  
    return flexShrink;
  }
  
  module.exports = flexShrink;
  