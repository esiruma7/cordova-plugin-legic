document.addEventListener("deviceready", function () {
    console.log("Device ready, testing LEGIC plugin...");

    Legic.echo("Hello LEGIC!", function(msg) {
        console.log("Echo success: " + msg);
    }, function(err) {
        console.error("Echo error: " + err);
    });

    Legic.getVersion(function(ver) {
        console.log("LEGIC SDK Version: " + ver);
    }, function(err) {
        console.error("Error getting version: " + err);
    });
});
