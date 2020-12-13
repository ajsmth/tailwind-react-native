function alignSelf(theme) {
    const alignSelf = {};
  
    for (let alignSelfName in theme.alignSelf) {
      const value = theme.alignSelf[alignSelfName];
  
      alignSelf[`self-${alignSelfName}`] = {
        default: {
          alignSelf: value,
        },
      };
    }
  
    return alignSelf;
  }
  
  module.exports = alignSelf;
  