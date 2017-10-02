module.exports = function(ngModel){
    ngModel.service('EntrieService', function () {
        vm = this;

        vm.helloWorldService = function () {
            return '...Ola Mundo...';
        } ;
    });
};