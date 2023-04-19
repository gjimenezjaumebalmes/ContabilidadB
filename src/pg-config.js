const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ubereats',
    password: 'somePassword',
    port: 5432,
});

module.exports = pool;

