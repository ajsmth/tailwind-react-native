function position(theme) {
    const position = {};
  
    for (let positionName in theme.position) {
      const value = theme.position[positionName];
  
      position[`${positionName}`] = {
        default: {
          position: value,
        },
      };
    }
  
    return position;
  }
  
  module.exports = position;
  