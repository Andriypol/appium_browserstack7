import { config as sharedConfig } from "./wdio.conf.js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
export const config = {
    ...sharedConfig,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',

    capabilities: [{
        'bstack:options': {
          platformName: 'Android',
        'appium:deviceName': 'Oppo Reno 3 Pro', // Or another device you want to test
        'appium:platformVersion': '10.0',
        'appium:automationName': 'UiAutomator2',

        // Link to the uploaded app in BrowserStack
        'appium:app': process.env.BROWSERSTACK_ANDROID_APP_ID,

        // Skip reset to avoid reinstalling the app every time
        'appium:noReset': true,

        // Optional for debugging
        'appium:newCommandTimeout': 300,
        }
      }],
    services: [
        [
          'browserstack',
          {
            app: process.env.BROWSERSTACK_ANDROID_APP_ID,
            buildIdentifier: "${BUILD_NUMBER}",
            // opts: { forcelocal: false, localIdentifier: "webdriverio-appium-app-browserstack-repo" },
            browserstackLocal: true,
            testObservability: true,
            testObservabilityOptions: { 
                  projectName: "BrowserStack Android app testing",
                  buildName: 'browserstack Android build',
              },
            debug: true,
            networkLogs: true,
            consoleLogs: "warn"
          },
        ]
      ],
}
