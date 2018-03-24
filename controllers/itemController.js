'use strict';
var db = require('./dbConnect.js');
var sql = require('seriate');
sql.setDefaultConfig(db.getConfig());
const DEBUG = true;

exports.list_all_items = async function (req, res) {
    const statement = "SELECT * FROM HTX_Item;";
    exports.query(statement, res);
};

exports.get_item_by_id = async function (req, res) {
    const statement = "SELECT * FROM HTX_Item WHERE ID = " + req.params.itemId + ";";
    exports.query(statement, res);
};

exports.get_item_by_title = async function (req, res) {
    const statement = "SELECT * FROM HTX_Item WHERE c_title LIKE '%" + req.params.title + "%';";
    exports.query(statement, res);
};

exports.query = async function (req, res) {
    if (DEBUG) { console.log(req); }
    sql.execute({
        query: req
    }).then(function (results) {
        res.json(results);
    }, function (err) {
        console.log("Err:", err);
    });
};