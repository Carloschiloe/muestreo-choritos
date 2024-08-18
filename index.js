const express = require('express');
const app = express();
const port = 3000;
const db = require('./database');

app.use(express.static('public'));
app.use(express.json());

// Endpoint para registrar un muestreo
app.post('/muestreo', (req, res) => {
    const muestreo = req.body;
    const query = `INSERT INTO muestreos (centro, linea, tipoMuestreo, total, rotos, trizados, cholgas, malton, picorocos, otros, observaciones, responsable) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [muestreo.centro, muestreo.linea, muestreo.tipoMuestreo, muestreo.total, muestreo.rotos, muestreo.trizados, muestreo.cholgas, muestreo.malton, muestreo.picorocos, muestreo.otros, muestreo.observaciones, muestreo.responsable];

    db.run(query, params, function(err) {
        if (err) {
            console.error('Error al insertar el muestreo:', err.message);
            return res.status(500).json({ error: 'Error al insertar el muestreo' });
        }
        res.status(201).json({ id: this.lastID, ...muestreo });
    });
});

// Endpoint para obtener todos los muestreos
app.get('/muestreos', (req, res) => {
    const query = 'SELECT * FROM muestreos';

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error al obtener los muestreos:', err.message);
            return res.status(500).json({ error: 'Error al obtener los muestreos' });
        }
        res.status(200).json(rows);
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
