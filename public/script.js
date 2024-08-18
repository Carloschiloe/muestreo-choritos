document.getElementById('muestreoForm').addEventListener('input', function() {
    const total = parseFloat(document.getElementById('total').value) || 0;
    const rotos = parseFloat(document.getElementById('rotos').value) || 0;
    const trizados = parseFloat(document.getElementById('trizados').value) || 0;
    const cholgas = parseFloat(document.getElementById('cholgas').value) || 0;
    const malton = parseFloat(document.getElementById('malton').value) || 0;
    const picorocos = parseFloat(document.getElementById('picorocos').value) || 0;
    const otros = parseFloat(document.getElementById('otros').value) || 0;

    const resultadoRotos = (rotos / total) * 100 || 0;
    const resultadoTrizados = (trizados / total) * 100 || 0;
    const resultadoCholgas = (cholgas / total) * 100 || 0;
    const resultadoMalton = (malton / total) * 100 || 0;
    const resultadoPicorocos = (picorocos / total) * 100 || 0;
    const resultadoOtros = (otros / total) * 100 || 0;

    document.getElementById('resultadoRotos').textContent = resultadoRotos.toFixed(2);
    document.getElementById('resultadoTrizados').textContent = resultadoTrizados.toFixed(2);
    document.getElementById('resultadoCholgas').textContent = resultadoCholgas.toFixed(2);
    document.getElementById('resultadoMalton').textContent = resultadoMalton.toFixed(2);
    document.getElementById('resultadoPicorocos').textContent = resultadoPicorocos.toFixed(2);
    document.getElementById('resultadoOtros').textContent = resultadoOtros.toFixed(2);
});

document.getElementById('muestreoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const muestreo = {
        centro: document.getElementById('centro').value,
        linea: document.getElementById('linea').value,
        tipoMuestreo: document.getElementById('tipoMuestreo').value,
        total: document.getElementById('total').value,
        rotos: document.getElementById('rotos').value,
        trizados: document.getElementById('trizados').value,
        cholgas: document.getElementById('cholgas').value,
        malton: document.getElementById('malton').value,
        picorocos: document.getElementById('picorocos').value,
        otros: document.getElementById('otros').value,
        observaciones: document.getElementById('observaciones').value,
        responsable: document.getElementById('responsable').value
    };

    fetch('/muestreo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(muestreo)
    })
    .then(response => response.json())
    .then(data => {
        alert('Muestreo registrado: ' + JSON.stringify(data));
        document.getElementById('muestreoForm').reset();
    })
    .catch(error => console.error('Error:', error));
});
