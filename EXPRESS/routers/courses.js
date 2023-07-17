const express = require("express");
const { infoCursos } = require("../data/cursos.js");

const routerCursos = express.Router();

routerCursos.use(express.json());

routerCursos.get("/", (req, res) => {
	res.send(JSON.stringify(infoCursos));
});

//Routing Dinamico

routerCursos.get("/:type/:subject", (req, res) => {
	const typeToSearch = req.params.type;
	const subjectToSearch = req.params.subject;

	const coursesFiltered = infoCursos[typeToSearch].filter(
		(course) => course.languaje === subjectToSearch
	);

	if (coursesFiltered.length === 0) {
		return res.status(404).send("No se encontraron cursos");
	}

	if (req.query.ordenar === "view") {
		return res.send(
			JSON.stringify(coursesFiltered.sort((a, b) => b.views - a.views))
		);
	}

	res.send(JSON.stringify(coursesFiltered));
});

routerCursos.get("/api/cursos/:type/:subject/:level", (req, res) => {
	const typeToSearch = req.params.type;
	const subjectToSearch = req.params.subject;
	const levelToSearch = req.params.level;

	const coursesFiltered = infoCursos[typeToSearch].filter(
		(course) =>
			course.languaje === subjectToSearch && course.level == levelToSearch
	);

	if (coursesFiltered.length === 0) {
		return res.status(404).send("No se encontraron cursos");
	}

	res.send(JSON.stringify(coursesFiltered));
});

module.exports = routerCursos;
