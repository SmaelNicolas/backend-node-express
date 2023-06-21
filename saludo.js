function saludar(nombre) {
	return `Hola ${nombre}`;
}

function saluarHolaMundo() {
	return "Hola Mundo";
}

// module.exports.saludar = saludar;
// module.exports.saluarHolaMundo = saluarHolaMundo;

module.exports = {
	saludar: saludar,
	saluarHolaMundo: saluarHolaMundo,
};
