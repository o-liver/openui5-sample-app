module.exports = function(config) {
	"use strict";

	config.set({

		frameworks: ["ui5"],

		browsers: ["Chrome"],

		browserConsoleLogOptions: {
			level: "error"
		},

		customLaunchers: {
                  Piper_ChromeRemote: {
                    base: "WebDriver",
                    browserName: "chrome",
                    name: "Karma",
                    pseudoActivityInterval: 30000,
                    config: {
                      hostname: "localhost",
                      port: 4444
                    }
                  }
                }
        });
};
