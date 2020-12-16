function padding(theme) {
    const padding = {};
  
    for (let paddingName in theme.padding) {
      const value = theme.padding[paddingName];
  
      if (paddingName === "auto") {
        padding[`p-auto`] = {
          default: {
            padding: "auto",
          },
        };
  
        padding[`px-auto`] = {
          default: {
            paddingHorizontal: "auto",
          },
        };
  
        padding[`py-auto`] = {
          default: {
            paddingVertical: "auto",
          },
        };
  
        continue;
      }
  
      padding[`p-${paddingName}`] = {
        default: {
          padding: value,
        },
      };
  
      padding[`pt-${paddingName}`] = {
        default: {
          paddingTop: value,
        },
      };
  
      padding[`pb-${paddingName}`] = {
        default: {
          paddingBottom: value,
        },
      };
  
      padding[`pl-${paddingName}`] = {
        default: {
          paddingLeft: value,
        },
      };
  
      padding[`pr-${paddingName}`] = {
        default: {
          paddingRight: value,
        },
      };
  
      padding[`px-${paddingName}`] = {
        default: {
          paddingHorizontal: value,
        },
      };
  
      padding[`py-${paddingName}`] = {
        default: {
          paddingVertical: value,
        },
      };


      padding[`ps-${paddingName}`] = {
        default: {
          paddingStart: value,
        },
      };
      padding[`pe-${paddingName}`] = {
        default: {
          paddingEnd: value,
        },
      };
    }

    return padding
  }
  
  module.exports = padding;
  