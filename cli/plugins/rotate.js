function rotate(theme) {
    const rotate = {};
  
    for (let rotateName in theme.rotate) {
      const value = theme.rotate[rotateName];
  
      rotate[`rotate-${rotateName}`] = {
        default: {
          transform: [{ rotate: value }],
        },
      };
  
      rotate[`-rotate-${rotateName}`] = {
        default: {
          transform: {
            rotate: -value,
          },
        },
      };
  
      rotate[`rotate-x-${rotateName}`] = {
        default: {
          transform: [{ rotateX: value }],
        },
      };
  
      rotate[`-rotate-x-${rotateName}`] = {
        default: {
          transform: {
            rotateX: -value,
          },
        },
      };
  
      rotate[`rotate-y-${rotateName}`] = {
        default: {
          transform: [{ rotateY: value }],
        },
      };
  
      rotate[`-rotate-y-${rotateName}`] = {
        default: {
          transform: {
            rotateY: -value,
          },
        },
      };
    }
  
    return rotate;
  }
  
  module.exports = rotate;
  