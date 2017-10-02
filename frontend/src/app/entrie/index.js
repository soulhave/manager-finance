module.exports = function (ngModule){
    require('./entrie.bean.js')(ngModule);
    require('./entrie.service.js')(ngModule);
    require('./entrie.ctrl.js')(ngModule);
    require('./entrie.css');    
};