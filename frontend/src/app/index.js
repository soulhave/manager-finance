module.exports = function (angular, firebase) {
    require('./finance.firebase.js')(firebase);
    ngModule = require('./finance.module.js')(angular);
    require('./entrie')(ngModule);
    require('./home')(ngModule);    
    require('./finance.route.js')(ngModule);
    require('./finance.config.js')(ngModule, firebase);
}
