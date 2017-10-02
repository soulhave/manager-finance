module.exports = function (ngModule) {
    ngModule
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('red')
                .accentPalette('indigo');
        }).constant('_', window._)
        .run(function ($rootScope) {
            $rootScope._ = window._;
        });
}