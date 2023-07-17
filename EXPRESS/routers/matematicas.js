const express = require("express");
const { matematicas } = require("../data/cursos.js").infoCursos;

const routerMatematicas = express.Router();

routerMatematicas.use(express.json());

routerMatematicas.get("/", (req, res) => {
	res.send(JSON.stringify(matematicas));
});

module.exports = routerMatematicas;
