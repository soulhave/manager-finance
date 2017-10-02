module.exports = function (ngModel) {
    ngModel.controller('EntrieCtrl', function ($scope, $log, EntrieBean, EntrieService) {
        
        var icons = [
            {label: 'Bradesco', icon: 'bradesco-24x24.png'},
            {label: 'Itau', icon: 'itau-24x24.png'},
            {label: 'Verios', icon: 'verios-24x24.png'},
        ]

        /** Init data. */
        this.init = function () {
            $scope.entrie = new EntrieBean();
            var tmp = new EntrieBean();

            tmp.description = 'klajsdkfl askdjf aksldjf asdkjf aksldjf adkls;fj adklajsdkfl askdjf aksldjf asdkjf aksldjf adkls;fj adklajsdkfl askdjf aksldjf asdkjf aksldjf adkls;fj adklajsdkfl askdjf aksldjf asdkjf aksldjf adkls;';
            tmp.date = '12/12/2017';
            tmp.value = 10000000.30;
            tmp.bank = 'Itau';
            tmp.type = 'Investimento';
            tmp.operation = 'Credito';
            tmp.id = 1;

            $scope.listEntries = [tmp];
            var tmp2 = angular.copy(tmp)
            tmp2.value = -20000.00;
            tmp2.id = 2;
            tmp2.bank = 'Bradesco';
            
            $scope.listEntries.push(tmp2);

            var tmp3 = angular.copy(tmp)
            tmp3.value = 3.57;
            tmp3.id = 2;
            tmp3.bank = 'Verios';   

            $scope.listEntries.push(tmp3);

            var tmp4 = angular.copy(tmp)
            tmp4.value = -30003.57;
            tmp4.id = 2;
            tmp4.bank = 'Bradesco';   

            $scope.listEntries.push(tmp4);

        };

        /**
         * Get image
         */
        this.getImage = function(bank) {
            var res = icons.filter(function (obj){
                if(bank && bank == obj.label){
                    return obj;
                }
                return;
            });

            if(res && res.length > 0){
                return res[0].icon;
            }
            
            return '';
        }

        /**
         * Returnt true if value is negative.
         */
        this.isNegative = function(value){
            if(value && value < 0){
                return true;
            }
            return false;
        }

        this.init();
    });
};