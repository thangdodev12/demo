module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["babel-plugin-styled-components"],
    [
      "import",
      {
        libraryName: "antd",
        style: true,
      },
    ],
    [
      "module-resolver",
      {
        alias: {
          "@components": "./src/components",
          "@globalConstants": "./src/globalConstants",
          "@globalTypes": "./src/globalTypes",
          "@hooks": "./src/lib/hooks",
          "@theme": "./src/lib/theme",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@redux": "./src/redux",
          "@lib": "./src/lib",
          "@services": "./src/services",
        },
      },
    ],
  ],
};
