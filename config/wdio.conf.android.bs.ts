import { config as sharedConfig } from "./wdio.conf.js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
export const config = {
    ...sharedConfig,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',

    capabilities: [{
      platformName: 'Android', // Keep this outside bstack:options
      'appium:automationName': 'UiAutomator2', // Appium capabilities stay outside too

      'appium:app': process.env.BROWSERSTACK_ANDROID_APP_ID, // Your uploaded app ID

      'bstack:options': { // Put BrowserStack-specific options here
          deviceName: 'Oppo Reno 3 Pro',
          platformVersion: '10.0',
          projectName: "BrowserStack Android App Testing",
          buildName: 'browserstack Android build',
          sessionName: 'Calculator App Test', 
          
          debug: true, // Enable debugging (live view, etc.)
          networkLogs: true, // Capture network logs
          consoleLogs: "warn", // Capture console logs

          local: false, // Set to true if testing localhost (optional)

          // Optional but useful settings
          idleTimeout: 300, // Timeout for inactivity
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
