const express = require("express");
const { programacion } = require("../data/cursos.js").infoCursos;

const routerProgramacion = express.Router();

//transforma a json para poder trabajarlo, sirve para cualquier metodo
//es un middleware
routerProgramacion.use(express.json());

routerProgramacion.get("/", (req, res) => {
	res.send(JSON.stringify(programacion));
});

routerProgramacion.post("/", (req, res) => {
	const reqBody = req.body;
	programacion.push(reqBody);
	res.send(programacion);
});

routerProgramacion.put("/:id", (req, res) => {
	const bodyUpdate = req.body;
	const id = req.params.id;
	const index = programacion.findIndex((curso) => curso.id === +id);

	if (index >= 0) {
		programacion[index] = bodyUpdate;
	}

	res.send(JSON.stringify(programacion));
});

routerProgramacion.patch("/:id", (req, res) => {
	const infoUpdate = req.body;
	const id = req.params.id;
	const index = programacion.findIndex((curso) => curso.id === +id);

	if (index >= 0) {
		const courseToUpdate = programacion[index];
		Object.assign(courseToUpdate, infoUpdate);
	}

	res.send(JSON.stringify(programacion));
});

routerProgramacion.delete("/:id", (req, res) => {
	const id = req.params.id;
	const index = programacion.findIndex((curso) => curso.id === +id);

	if (index >= 0) {
		const courseToUpdate = programacion[index];
		programacion.splice(index, 1);
	}

	res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion;
