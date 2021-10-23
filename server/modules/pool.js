const pg = require('pg');

const config = {
    database: 'react_gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeOutMillis: 3000
};

const pool = new pg.pool(config);

pool.on("connect", () => {
    console.log('connected to postgres');    
});

pool.on("error", (err) => {
    console.log('error connected to postgres', err);    
});

module.exports = pool;