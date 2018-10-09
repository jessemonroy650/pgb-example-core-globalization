var globalizationPlugin = {
    version : '1.0.0',

    init : function () {
        return JSON.stringify(navigator.globalization);
    },
    // Register your function that will call the dialogs
    hook : function () {
        document.getElementById('status0').innerHTML = "hook() called";
        // You can listen to 'click', but 'touchend' by passes the inherent delay.
        // See: https://www.w3schools.com/jsref/dom_obj_event.asp
        //document.getElementById('getCurrentPosition').addEventListener("click", geolocationPlugin.getCurrentPosition, false);
        //document.getElementById('watchPosition').addEventListener("click", geolocationPlugin.watchPosition, false);
        //document.getElementById('clearWatch').addEventListener("click", geolocationPlugin.clearWatch, false);
    },
    //
    getGlobalizationStuff (divBlockId) {
        var language = '', locale = '', isDLST = '', FDoW = '';

        navigator.globalization.getPreferredLanguage(
            function (lang) { language = lang.value; },
            onError
            );
        navigator.globalization.getLocaleName(
            function (loc) { locale = loc.value; },
            onError
            );
        //navigator.globalization.dateToString
        //navigator.globalization.stringToDate
        //navigator.globalization.getDatePattern
        //navigator.globalization.getDateNames
        navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (dlst) { isDLST = dlst.value; },
            onError
            );
        navigator.globalization.getFirstDayOfWeek(
            function (dow) { FDoW = dow.value; }
            onError
            );
        //navigator.globalization.numberToString
        //navigator.globalization.stringToNumber
        //navigator.globalization.getNumberPattern
        //navigator.globalization.getCurrencyPattern
        document.getElementById(divBlockId).innerHTML = 
            "<p class=r /><b>language: </b>" + language +
            "<p class=g /><b>locale: </b>" + locale +
            "<p class=b /><b>isDayLightSavingsTime: </b>" + isDLST +
            "<p class=a /><b>First Day Of Week: </b>" + FDoW;
    },

    onError : function (errObject) {
        document.getElementById('errorCallback').innerHTML = 
            "Error: " + JSON.stringify(errObject);
    }
}
