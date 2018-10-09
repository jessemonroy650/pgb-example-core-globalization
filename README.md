# pgb-example-core-globalization
Phonegap Build example for core plugin Cordova 'Geolocation' using `cli-6.0.0`

This app uses the Cordova 'Device' & 'Globalization' plugin.

**NOTE:** The plugin is being deprecated. Migration is in process. Read detail on this blog post => [Migrating from the Globalization Plugin](https://cordova.apache.org/news/2017/11/20/migrate-from-cordova-globalization-plugin.html). The blog suggests this [mozilla article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) as a resource.

* https://www.npmjs.com/package/cordova-plugin-device
* https://www.npmjs.com/package/cordova-plugin-globalization

[ECMAScript Internationalization API Specification](https://www.ecma-international.org/ecma-402/1.0/)

## Objects

* GlobalizationError 

## Methods

* navigator.globalization.getPreferredLanguage
* navigator.globalization.getLocaleName
* navigator.globalization.dateToString
* navigator.globalization.stringToDate
* navigator.globalization.getDatePattern
* navigator.globalization.getDateNames
* navigator.globalization.isDayLightSavingsTime
* navigator.globalization.getFirstDayOfWeek
* navigator.globalization.numberToString
* navigator.globalization.stringToNumber
* navigator.globalization.getNumberPattern
* navigator.globalization.getCurrencyPattern
