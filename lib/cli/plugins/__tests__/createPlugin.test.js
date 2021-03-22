const createPlugin = require("../createPlugin");

describe("createPlugin", () => {
  const pluginConfig = {
    name: "borderRadius",

    properties: {
      ["rounded"]: ["borderRadius"],
    },
  };

  test("it creates styles based on config mappings", () => {
    const plugin = createPlugin(pluginConfig);

    const styles = plugin({
      borderRadius: {
        DEFAULT: 4,
        sm: 2,
      },
    });

    expect(styles["rounded"]).toBeDefined();
    expect(styles["rounded"]).toEqual({
      borderRadius: 4,
    });

    expect(styles["rounded-sm"]).toEqual({ borderRadius: 2 });
  });

  test("it handles platform specific styles when provided", () => {
    const plugin = createPlugin(pluginConfig);

    const styles = plugin({
      borderRadius: {
        test: {
          android: 1,
          ios: 2,
          default: 123,
        },
      },
    });

    expect(styles["rounded-test"]).toEqual({
      android: {
        borderRadius: 1,
      },
      ios: {
        borderRadius: 2,
      },
      default: {
        borderRadius: 123,
      },
    });
  });
});
