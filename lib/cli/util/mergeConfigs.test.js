import defaultConfig from "../defaultConfig";
import mergeConfigs from "./mergeConfigs";

test("mergeConfigs output includes extending custom props", () => {
    const customTheme = {
        theme: {
            extend: {
                fontFamily: {
                    serif: "Times New Roman",
                    sans: "Comic Sans",
                },

                color: {
                    awesomeColor: "123456",
                },

                platformColors: ({ color }) => {
                    return {
                        platformRed: color("red-500"),
                    };
                },
            },
        },
    };

    const output = mergeConfigs(defaultConfig, customTheme);

    expect(output.theme.fontFamily.serif).toEqual("Times New Roman");
    expect(output.theme.fontFamily.sans).toEqual("Comic Sans");

    // colors
    expect(output.theme.color.awesomeColor).toEqual("123456");
    expect(output.theme.platformColors.platformRed).toEqual("#ef4444");
});

test("default theme can be overridden by custom theme", () => {
    const customTheme = {
        theme: {
            height: {
                tall: 256,
            },
        },
    };

    const output = mergeConfigs(defaultConfig, customTheme);

    expect(output.theme.height).toEqual({ tall: 256 });
});
