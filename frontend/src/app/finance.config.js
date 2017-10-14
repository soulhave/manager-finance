module.exports = function (ngModule, firebase) {
    ngModule
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('red')
                .accentPalette('indigo');
        }).constant('_', window._)
        .constant('firebase', firebase)
        .run(function ($rootScope) {
            $rootScope._ = window._;
            window.firebase = firebase;
            $rootScope.firebase = window.firebase;
        });
}