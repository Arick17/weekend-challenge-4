var pg = require('pg');

var config = {
    // database: '',
    host: 'localhost',
    port: '5432',
    max: 10,
    idleTimeoutMillis: 1000
};

module.exports = new pg.Pool(config);