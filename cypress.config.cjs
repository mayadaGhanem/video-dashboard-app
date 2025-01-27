module.exports = {
  e2e: {
    baseUrl: "http://localhost:5173/",
    supportFile: "cypress/support/index.js", // Path to your support file
    fixturesFolder: "cypress/fixtures", // Path to your fixtures folder
    specPattern: "cypress/e2e/**/*.spec.{js,ts,jsx,tsx}",
  },
};
