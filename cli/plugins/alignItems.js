function alignItems(theme) {
    const alignItems = {};
  
    for (let alignItemsName in theme.alignItems) {
      const value = theme.alignItems[alignItemsName];
  
      alignItems[`items-${alignItemsName}`] = {
        default: {
          alignItems: value,
        },
      };
    }
  
    return alignItems;
  }
  
  module.exports = alignItems;
  