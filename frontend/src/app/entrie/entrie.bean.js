module.exports = function (ngModel) {
    ngModel.factory('EntrieBean', function () {
        var entrie = function () {
            this.description = '';
            this.date = '';
            this.value = 0.00;
            this.type = '';
            this.bank = '';
            this.operation = '';
            this.id = 0;
        }

        entrie.prototype = {
            
        }

        return entrie;
    })

}