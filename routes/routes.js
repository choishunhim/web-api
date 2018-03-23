'use strict';
module.exports = function (app) {
    var Item = require('../controllers/itemController.js');

    app.route('/items')
        .get(Item.list_all_items);

    app.route('/items/:itemId')
        .get(Item.get_item_by_id);
};
