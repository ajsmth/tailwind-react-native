function flexGrow(theme) {
    const flexGrow = {};
  
    for (let flexGrowName in theme.flexGrow) {
      const value = theme.flexGrow[flexGrowName];
  
      flexGrow[`flex-grow-${flexGrowName}`] = {
        default: {
          flexGrow: value,
        },
      };
    }
  
    return flexGrow;
  }
  
  module.exports = flexGrow;
  