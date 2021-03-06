var globalizationPlugin = {
    version : '1.0.0',
    displayBlockId : '',

    // inplace of 'innerHTML' you can use 'innerText' & 'textContent'
    init : function () {
        if (window.globalization && typeof window.globalization === 'object') {
            document.getElementById('winGlob').innerText = JSON.stringify(navigator.globalization);
            document.getElementById('winGlob').setAttribute("style", "backgroundColor:#22ff44;");
        } else {
            document.getElementById('winGlob').innerText = 'false';
            document.getElementById('winGlob').setAttribute("style", "color:#ffffff;background-color:#ff0022;");
        }        
    },
    // Register your function that will call the dialogs
    hook : function (divBlockId) {
        document.getElementById('status0').innerHTML = "hook() called";
        //
        globalizationPlugin.displayBlockId = divBlockId;
        // You can listen to 'click', but 'touchend' bypasses the inherent delay.
        // See: https://www.w3schools.com/jsref/dom_obj_event.asp
        document.getElementById('getGlobalizationStuff').addEventListener("touchend", globalizationPlugin.getGlobalizationStuff, false);
    },
    //
    getGlobalizationStuff : function () {
        var language = '', locale = '', isDLST = '', FDoW = '';

        document.getElementById('status0').innerHTML = "getGlobalizationStuff Called";

        navigator.globalization.getPreferredLanguage(
            function (lang) { document.getElementById('language').innerHTML = lang.value; },
            onError
            );
        navigator.globalization.getLocaleName(
            function (loc) { document.getElementById('locale').innerHTML = loc.value; },
            onError
            );
        navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (dlst) { document.getElementById('daylight').innerHTML =  dlst.value; },
            onError
            );
        navigator.globalization.getFirstDayOfWeek(
            function (dow) { document.getElementById('fdow').innerHTML =  dow.value; },
            onError
            );

        //navigator.globalization.dateToString
        //navigator.globalization.stringToDate
        //navigator.globalization.getDatePattern
        //navigator.globalization.getDateNames
        //navigator.globalization.numberToString
        //navigator.globalization.stringToNumber
        //navigator.globalization.getNumberPattern
        //navigator.globalization.getCurrencyPattern
    },
    //
    onError : function (errObject) {
        document.getElementById('errorCallback').innerHTML = 
            "Error: " + JSON.stringify(errObject);
    }
}
