function ECMAIntlTest(divId) {

    // Add 2018-10-08T17:22:25 per documentation for 'Globalization' plugin
    if (window.Intl && typeof window.Intl === 'object') {
        document.getElementById(divId).textContent = 'ECMA Intl API available';
        document.getElementById(divId).style.backgroundColor = "#22ff44;";
    } else {
        document.getElementById(divId).textContent = 'false';
        document.getElementById(divId).setAttribute("color:#fffff;backgroundColor:#ff0022");
    }
}