module.exports = function(ngModel) {
    ngModel.controller('HomeCtrl', function($scope, $mdSidenav,$mdMedia, $log) {
        /** Init data. */
        this.init = function() {
            this.isOpen = false;
            this.selectedDirection = 'up';
            this.selectedMode = 'md-fling';
        }

        this.close = function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left').close()
                .then(function() {
                    $log.debug("close LEFT is done");
                });

        };

        this.buildToggler = function() {
            if(!$mdMedia('gt-md')){
                $mdSidenav('left')
                .toggle();
            }

        }

        this.init();
    })
};