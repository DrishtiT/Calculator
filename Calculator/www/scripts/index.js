// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

function f1() {
    var x = parseInt(document.form1.t1.value);
    var y = parseInt(document.form1.t2.value);
    var z = x + y;
    document.getElementById('result').innerHTML = z;
}
function f2() {
    var a = parseInt(document.form2.t3.value);
    var b = parseInt(document.form2.t4.value);
    var d = a - b;
    document.getElementById('result1').innerHTML = d;
}

//function f3() {
//    var x = parseInt(document.form3.t1.value);
//    var y = parseInt(document.form3.t2.value);
//    var z = x * y;
//    document.getElementById('result').innerHTML = z;
//}
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();
