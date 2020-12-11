function display(theme) {
    const display = {};
  
    for (let displayName in theme.display) {
      const value = theme.display[displayName];
  
      display[`${displayName}`] = {
        default: {
          display: value,
        },
      };
    }
  
    return display;
  }
  
  module.exports = display;
  