module.exports = function (ngModule) {
    ngModule
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider
                    .when('/entrie', {
                        template: require('./entrie/entrie.view.html'),
                        controller: 'EntrieCtrl',
                        controllerAs: 'ctrl'
                    }).when('/', {
                        template: '<div>Home</div>'
                    });
            }
        ]);
}