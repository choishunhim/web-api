'use strict';
var db = require('./dbConnect.js');

exports.list_all_items = function (req, res) {
    //console.log('select * from HTX_Item FOR JSON AUTO');
    db.dbConnect('select * from HTX_Item FOR JSON AUTO', res);
}

exports.get_item_by_id = function (req, res) {
    //console.log('select * from HTX_Item where ID=\'' + req.params.itemId + '\' FOR JSON AUTO');
    db.dbConnect('select * from HTX_Item where ID=\'' + req.params.itemId + '\' FOR JSON AUTO', res);
}