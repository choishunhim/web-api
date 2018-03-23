'use strict';
// config database
var sqlConfig = {
    user: 'dev',
    password: 'Dev_123456',
    server: '192.168.2.61',
    port: 1433,
    database: 'devdb'
};

exports.getConfig = function () {
    return sqlConfig;
};