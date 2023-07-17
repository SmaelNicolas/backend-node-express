const express = require("express");
const { programacion } = require("../data/cursos.js").infoCursos;

const routerProgramacion = express.Router();

//transforma a json para poder trabajarlo, sirve para cualquier metodo
//es un middleware
routerProgramacion.use(express.json());

routerProgramacion.get("/", (req, res) => {
	res.json(programacion);
});

routerProgramacion.post("/", (req, res) => {
	const reqBody = req.body;
	programacion.push(reqBody);
	res.json(programacion);
});

routerProgramacion.put("/:id", (req, res) => {
	const bodyUpdate = req.body;
	const id = req.params.id;
	const index = programacion.findIndex((curso) => curso.id === +id);

	if (index >= 0) {
		programacion[index] = bodyUpdate;
	} else {
		res.status(204);
	}

	res.json(programacion);
});

routerProgramacion.patch("/:id", (req, res) => {
	const infoUpdate = req.body;
	const id = req.params.id;
	const index = programacion.findIndex((curso) => curso.id === +id);

	if (index >= 0) {
		const courseToUpdate = programacion[index];
		Object.assign(courseToUpdate, infoUpdate);
	} else {
		res.status(204);
	}

	res.json(programacion);
});

routerProgramacion.delete("/:id", (req, res) => {
	const id = req.params.id;
	const index = programacion.findIndex((curso) => curso.id === +id);

	if (index >= 0) {
		programacion.splice(index, 1);
	} else {
		res.status(204);
	}

	res.json(programacion);
});

module.exports = routerProgramacion;
