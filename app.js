// export sin desestructuracion
// const saludo = require("./saludo.js");
// console.log(saludo.saludar("Nico"));
// console.log(saludo.saluarHolaMundo());

//export con desestructuracion
// const { saludar, saluarHolaMundo } = require("./saludo.js");
// console.log(saludar("Nico"));
// console.log(saluarHolaMundo());

// env sistema operativo
// const os = require("os");
// console.log(os.type());
// console.log(os.homedir());
// console.log(os.userInfo());
// console.log(os.uptime());

//timers
// function mostrarTema(tema) {
// 	console.log(`Estoy viendo ${tema}`);
// }
// function sumar(a, b) {
// 	console.log(a + b);
// }
// setTimeout(() => {
// 	mostrarTema("NodeJs");
// }, 5000);
// setTimeout(mostrarTema, 5000, "NICO");
// setTimeout(sumar, 3000, 1, 3);

// console.log("Antes de setImmediate");
// setImmediate(mostrarTema, "Node");
// console.log("Despues de setImmediate");

// setInterval(mostrarTema, 1500, "Node");
// setInterval(sumar, 3000, 1, 3);

//files (todos son asyncronos)
// const fs = require("fs");
// fs.readFile("./index.html", "utf-8", (err, content) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(content);
// 	}
// });

// fs.rename("./index.html", "main.html", (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log("Nombre cambio correctamente");
// });

// fs.appendFile("./index.html", "<p>Added from js</p>", (err) => {
// 	if (err) throw err;
// 	console.log("Archivo Actualizado");
// });

// fs.writeFile("./index.html", "<p>Added from js</p>", (err) => {
// 	if (err) throw err;
// 	console.log("Contenido Reemplazado");
// });

// fs.unlink("./index2.html", (err) => {
// 	if (err) throw err;
// 	console.log("Eliminado correctamente");
// });

//files (todos son sync)
// const archivoContent = fs.readFileSync("./index.html", "utf-8");
// console.log(archivoContent);

// fs.renameSync("./index.html", "main.html", (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log("Nombre cambio correctamente");
// });

// fs.appendFileSync("./index.html", "<p>Added from js</p>", (err) => {
// 	if (err) throw err;
// 	console.log("Archivo Actualizado");
// });

// fs.writeFileSync("./index.html", "<p>Added from js</p>", (err) => {
// 	if (err) throw err;
// 	console.log("Contenido Reemplazado");
// });

// fs.unlinkSync("./index2.html", (err) => {
// 	if (err) throw err;
// 	console.log("Eliminado correctamente");
// });

//EVENTS

// const EventEmitter = require("events");
// // console.log(EventEmitter);

// const emisorProductos = new EventEmitter();
// emisorProductos.on("compra", () => {
// 	console.log("Se realizo una compra");
// });
// emisorProductos.emit("compra");

// PROMISES
const promiseValue = true;
// const promiseValue = false;
const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (promiseValue) {
			resolve("Promesa fulfilled");
		} else {
			reject("Promesa rejected");
		}
	}, 1500);
});

const myPromiseFunction = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (promiseValue) {
				resolve("Promesa fulfilled");
			} else {
				reject("Promesa rejected");
			}
		}, 1500);
	});
};

// myPromise.then(
// 	(res) => console.log(res),
// 	(resError) => console.log(resError)
// );

const handleFulfilled = (value) => {
	console.log(value);
};
const handleRejected = (value) => {
	console.log(value);
};
// myPromise.then(handleFulfilled, handleRejected);
// myPromise.then(handleFulfilled).catch(handleRejected);

const handlePromise = async () => {
	const data = await myPromise;
	console.log(data);

	const dataFunction = await myPromiseFunction();
	console.log(dataFunction);
};
const handlePromiseTryCatch = async () => {
	try {
		const data = await myPromise;
		console.log(data);

		const dataFunction = await myPromiseFunction();
		console.log(dataFunction);
	} catch (error) {
		console.log(error);
	}
};
handlePromise();
handlePromiseTryCatch();
