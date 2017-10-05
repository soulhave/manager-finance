module.exports = function (angular) {
    return angular.module('financeApp', [
        require('angular-route'),
        require('angular-material'), 
        require('angular-material-data-table'),
        require('simple-grid-material'),
        require('angular-material-sidemenu')
    ]);
}