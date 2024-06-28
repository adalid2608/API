const mysql = require('mysql');
const config = require('../config');

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conection;

//Configuración de conexión a la base de datos
function MySQL(){
    conection = mysql.createConnection(dbConfig);

    conection.connect((err) => {
        if(err){
            console.log('[Error en la conexión a la base de datos]',err);
            setTimeout(MySQL, 200);
        }else{
            console.log('Conexión exitosa');
        }
    });
    conection.on('error', err => {
        console.log('[Error en la conexión a la base de datos]',err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            MySQL()
        }else{
            throw err;
        }
    })
}
MySQL();

//Función para devolver todos los registros de la tabla clients por medio de una Promesa

function allData(table){
    return new Promise((resolve, reject) => {
        conection.query(`SELECT * FROM ${table}`, (error, result)=>{
            return error ? reject(error): resolve(result);
        })
    })
}

function oneData(table, id){
    return new Promise((resolve, reject) => {
        conection.query(`SELECT * FROM ${table} WHERE id=${id}`, (error, result)=>{
            return error ? reject(error): resolve(result);
        })
    })
}


function insert(table, data){
    return new Promise((resolve, reject) => {
        conection.query(`INSERT INTO ${table} SET ?`, data,(error, result)=>{
            return error ? reject(error): resolve(result);
        })
    })
}
function update(table, data){
    return new Promise((resolve, reject) => {
        conection.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, data.id],(error, result)=>{
            return error ? reject(error): resolve(result);
        })
    })
}



function addData(table, data){
    if(data && data.id == 0){
        return insert(table, data);
    }else{
        return update(table, data); 
    }
}

function deleteData(table, data){
    return new Promise((resolve, reject) => {
        conection.query(`DELETE FROM ${table} WHERE id = ?`, data.id,(error, result)=>{
            return error ? reject(error): resolve(result);
        })
    })
}

module.exports = {
    allData,
    oneData,
    addData,
    deleteData
}