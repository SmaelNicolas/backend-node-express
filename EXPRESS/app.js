const express = require("express");
const app = express();
const { infoCursos } = require("./cursos");
const PORT = process.env.PORT || 3001;

//ROUTERS
const routerCursos = express.Router();
app.use("/api/cursos", routerCursos);

//Routing
app.get("/", (req, res) => {
	res.send("SERVER EXPRESS . CURSOS");
});

routerCursos.get("/", (req, res) => {
	res.send(JSON.stringify(infoCursos));
});
routerCursos.get("/programacion", (req, res) => {
	res.send(JSON.stringify(infoCursos.programacion));
});
routerCursos.get("/matematicas", (req, res) => {
	res.send(JSON.stringify(infoCursos.matematicas));
});
// app.get("/api/cursos", (req, res) => {
// 	res.send(JSON.stringify(infoCursos));
// });
// app.get("/api/cursos/programacion", (req, res) => {
// 	res.send(JSON.stringify(infoCursos.programacion));
// });
// app.get("/api/cursos/matematicas", (req, res) => {
// 	res.send(JSON.stringify(infoCursos.matematicas));
// });

//Routing Dinamico
// app.get("/api/cursos/programacion/:languaje", (req, res) => {
// 	const languajeToSearch = req.params.languaje;

// 	const coursesFiltered = infoCursos.programacion.filter(
// 		(course) => course.languaje === languajeToSearch
// 	);

// 	if (coursesFiltered.length === 0) {
// 		res.statusCode = 404;
// 		return res.send("No se encontraron cursos de ese lenguaje");
// 	}

// 	res.send(JSON.stringify(coursesFiltered));
// });

// app.get("/api/cursos/matematicas/:tema", (req, res) => {
// 	const temaToSearch = req.params.tema;
// 	console.log({ temaToSearch });
// 	console.log(infoCursos.matematicas);

// 	const coursesFiltered = infoCursos.matematicas.filter(
// 		(curso) => curso.languaje === temaToSearch
// 	);

// 	if (coursesFiltered.length === 0) {
// 		return res.status(404).send("No se encontraron cursos de ese tema");
// 	}

// 	res.send(JSON.stringify(coursesFiltered));
// });

app.get("/api/cursos/:type/:subject", (req, res) => {
	const typeToSearch = req.params.type;
	const subjectToSearch = req.params.subject;

	const coursesFiltered = infoCursos[typeToSearch].filter(
		(course) => course.languaje === subjectToSearch
	);

	if (coursesFiltered.length === 0) {
		return res.status(404).send("No se encontraron cursos");
	}

	if (req.query.ordenar === "view") {
		//ASCENDENTE
		// return res.send(
		// 	JSON.stringify(coursesFiltered.sort((a, b) => a.views - b.views))
		// );
		//DESCENDENTE
		return res.send(
			JSON.stringify(coursesFiltered.sort((a, b) => b.views - a.views))
		);
	}

	res.send(JSON.stringify(coursesFiltered));
});
app.get("/api/cursos/:type/:subject/:level", (req, res) => {
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

//iniciar servidor
app.listen(PORT, () => {
	console.log(`Running on port ${PORT} ... - localhost:${PORT}`);
});
