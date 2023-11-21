const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  video: true,
  e2e: {
    async setupNodeEvents(on, config) {
      const result = await cloudPlugin(on, config);
      return result;
    },
  },
});
