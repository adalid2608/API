const db = require('../../db/mysql');

const TABLE = 'clients'

function allData(){
    return db.allData(TABLE);
}

function oneData( id ){
    return db.oneData(TABLE, id);
}

function addData( body ){
    return db.addData(TABLE, body);
}

function deleteData( body ){
    return db.deleteData(TABLE, body);
}

module.exports = {
    allData,
    oneData,
    addData,
    deleteData,
}