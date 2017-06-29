/**
 * Created by Коля on 29.06.2017.
 */

const testRoutes = require('./test_routes');
module.exports = function (app, db) {
    testRoutes(app, db);
};
