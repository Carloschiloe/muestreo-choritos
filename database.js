const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run(`CREATE TABLE muestreos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        centro TEXT,
        linea INTEGER,
        tipoMuestreo TEXT,
        total INTEGER,
        rotos INTEGER,
        trizados INTEGER,
        cholgas INTEGER,
        malton INTEGER,
        picorocos INTEGER,
        otros INTEGER,
        observaciones TEXT,
        responsable TEXT
    )`);
});

module.exports = db;
