var socket = io();
socket.on('connect', function () {
    console.log('conectado al servidor');
});
// Escuchar información.
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor!');
});

// Enviar información.
socket.emit('enviarMensaje', {
    usuario: 'Yair',
    mensaje: 'Hola mundo!'
}/*, function (resp) {
    console.log('Respuesta server: ' + JSON.stringify(resp));
}*/);

// Escuchar Información
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
});