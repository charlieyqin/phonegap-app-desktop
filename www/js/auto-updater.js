function checkForUpdates(updater) {

    var app = remote.require('app');

    updater.on('error', function(err, msg) {
        console.log(msg);
    })
    .on('checking-for-update', function(err, msg) {
        console.log("checking-for-update");
    })
    .on('update-available', function(err) {
        console.log("update-available");
    })
    .on('update-downloaded', function(err) {
        console.log('update-downloaded');
        updater.quitAndInstall();
    })
    .on('update-not-available', function(err) {
        console.log("update-not-available");
    });

    // TODO: remove hardcoded version before we go into production
    var feedUrl = 'http://localhost:8080?platform=' + determineOperatingSystem() + '&version=' + '0.2.0';//app.getVersion();
    console.log(feedUrl);

    updater.setFeedUrl(feedUrl);
    updater.checkForUpdates();
}