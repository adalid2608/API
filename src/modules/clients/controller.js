const db = require('../../db/mysql');

const TABLE = 'clients'

function allData(){
    return db.allData(TABLE);
}

module.exports = {
    allData
}