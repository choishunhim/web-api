'use strict';
var db = require('./dbConnect.js');
var sql = require('seriate');
sql.setDefaultConfig(db.getConfig());

exports.list_all_items = function (req, res) {
    sql.execute({
        query: sql.fromFile('./sql/get_all_items.sql')
      }).then(function (results) {
        res.json(results);
    }, function (err) {
        console.log("Err:", err);
    });
};

exports.get_item_by_id = async function (req, res) {
    sql.execute({
        query: sql.fromFile('./sql/get_item_by_id.sql'),
        params: {
            ID: {
                type: sql.NVARCHAR,
                val: req.params.itemId
            }
        }
    }).then(function (results) {
        res.json(results);
    }, function (err) {
        console.log("Err:", err);
    });

};