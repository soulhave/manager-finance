module.exports = function(ngModel) {
    ngModel.controller('HomeCtrl', function($scope, $mdSidenav,$mdMedia, $location, $log) {
        /** Init data. */
        this.init = function() {
            this.isOpen = false;
            this.selectedDirection = 'up';
            this.selectedMode = 'md-fling';
            this.loading = true;
        }

        this.close = function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left')
                .close();
        };

        this.buildToggler = function() {
            if(!$mdMedia('gt-md')){
                $mdSidenav('left')
                .toggle();
            }

        }

        this.go = function (path){
            $location.path(path);
            if(!$mdMedia('gt-md')){
                this.close();
            }
        }

        this.isSmall = function (){
            return !$mdMedia('gt-md');
        }



        this.init();
    })
};