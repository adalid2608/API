const TABLE = 'users';

module.exports = function(dbInject){
    let db = dbInject;

    if(!db){
        db = require('../../db/mysql')
    }

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
    return {
        allData,
        oneData,
        addData,
        deleteData,
    }
}