'use strict';
//global config
var dbIP = '192.168.2.61';
var dbPort = 1433;
var dbUser = 'dev';
var dbPass = 'Dev_123456';
var dbDefault = 'devdb';
var dbNamespace = 'dbo';

// config database
var sqlConfig = {
    user: dbUser,
    password: dbPass,
    server: dbIP,
    port: dbPort,
    database: dbDefault
};

exports.dbConnect = async function (req, res) {
    //console.log("sql connecting......")
    var sql = require('mssql');
    try {
        let dbConn = await sql.connect(sqlConfig);
        let recordSet = await dbConn.request()
            .query(req);

        res.send(recordSet);
        if (sql) {
            try {
                await sql.close();

     //           console.log('Connection closed');
            } catch (err) {
                console.log('Error closing connection', err);
            }
        }
    } catch (err) {
        console.log('Error connecting database', err);
    }
}
