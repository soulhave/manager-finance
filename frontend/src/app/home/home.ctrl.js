module.exports = function (ngModel) {
    ngModel.controller('HomeCtrl', function ($scope, $log) {
        /** Init data. */
        this.init = function () {
            this.isOpen = false;
            this.selectedDirection = 'up';
            this.selectedMode = 'md-fling';
        }

        this.init();
    })
};