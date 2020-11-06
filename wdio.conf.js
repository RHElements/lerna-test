const { join } = require("path");
const { exec } = require("child_process");
const CustomReporter = require("./test/vrt/reporter/custom-reporter");

console.log(`
    ${process.env.CI ? "CI=true" : "CI=false"}
`);

const argv = require("yargs").argv;
const patterns = argv._.length > 1 ? argv._.slice(1) : [];

require("dotenv").config();

let proc;

exports.config = {
  logLevel: "error",
  framework: "mocha",
  mochaOpts: {
    timeout: 30000
  },
  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_KEY,
  baseUrl: "http://localhost:8080/",
  specs: [`./elements/${patterns.length > 0 ? `+(${patterns.join("|")})` : "*"}/test/*_e2e.js`],
  reporters: [
    "spec",
    [
      CustomReporter,
      {
        outputDir: "./test/vrt/"
      }
    ]
  ], // process.env.npm_config_loglevel === "verbose" && !process.env.CI ? "spec" : CustomReporter,
  maxInstances: 3,
  capabilities: [
    {
      os: "OS X",
      browserName: "chrome",
      browser_version: "83.0",
      resolution: "1920x1080",
      "browserstack.local": "true",
      "browserstack.selenium_version": "3.5.2"
    },
    {
      os: "Windows",
      os_version: "10",
      browserName: "IE",
      browser_version: "11.0",
      resolution: "1920x1080",
      "browserstack.local": "true",
      "browserstack.selenium_version": "3.5.2"
    }
  ],
  services: [
    ["browserstack", { browserstackLocal: true }],
    [
      "image-comparison",
      {
        baselineFolder: join(process.cwd(), "./test/vrt-baseline/"),
        formatImageName: `{tag}`,
        screenshotPath: join(process.cwd(), "./test/vrt-snapshots"),
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
        disableCSSAnimation: true,
        hideScrollBars: true
      }
    ]
  ],
  onPrepare: () => {
    proc = exec("http-server");
  },
  onComplete: () => {
    proc.kill();
  }
};
