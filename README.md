# pgb-example-core-globalization
Phonegap Build example for core plugin Cordova 'Geolocation' using `cli-6.0.0`

This app uses the Cordova 'Device' & 'Globalization' plugin.

**NOTE:** The plugin is being deprecated. Migration is in process. Read detail on this blog post => [Migrating from the Globalization Plugin](https://cordova.apache.org/news/2017/11/20/migrate-from-cordova-globalization-plugin.html). The blog suggests this [mozilla article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) as a resource.

* https://www.npmjs.com/package/cordova-plugin-device
* https://www.npmjs.com/package/cordova-plugin-globalization

[ECMAScript Internationalization API Specification](https://www.ecma-international.org/ecma-402/1.0/) will replace this plugin.

## globalizationPlugin.init()

The following labels which are next to the **App Version** at the top of the screen are debugging aids. The values for these labels are written with black text on a white background. If the background color changes, the function `ECMAIntlTest()` and the method `globalizationPlugin.init()` method have run.

* window.globalization:
* window.Intl:

**NOTE:** My test platform no longer activates the plugin, so I cannot test this app in full.

## Objects

* GlobalizationError 

## Methods
### Called
* navigator.globalization.getPreferredLanguage
* navigator.globalization.getLocaleName
* navigator.globalization.isDayLightSavingsTime
* navigator.globalization.getFirstDayOfWeek
### Not Called
* navigator.globalization.dateToString
* navigator.globalization.stringToDate
* navigator.globalization.getDatePattern
* navigator.globalization.getDateNames
* navigator.globalization.numberToString
* navigator.globalization.stringToNumber
* navigator.globalization.getNumberPattern
* navigator.globalization.getCurrencyPattern
