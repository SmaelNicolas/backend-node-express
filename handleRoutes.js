const http = require("http");
const cursos = require("./cursos");

const servidor = http.createServer((req, res) => {
	const { method } = req;

	switch (method) {
		case "GET":
			return handleGet(req, res);
		case "POST":
			return handlePost(req, res);
		default:
			console.log(
				`El metodo usado no se puede manejar. Metodo ${method}`
			);
	}
});

const handleGet = (req, res) => {
	const path = req.url;

	if (path === "/") {
		res.statusCode = 200;
		return res.end("First server and api");
	} else {
		if (path === "/cursos") {
			res.statusCode = 200;
			return res.end(JSON.stringify(cursos.infoCursos));
		} else {
			if (path === "/cursos/programacion") {
				res.statusCode = 200;
				return res.end(JSON.stringify(cursos.infoCursos.programacion));
			}
			if (path === "/cursos/matematicas") {
				res.statusCode = 200;
				return res.end(JSON.stringify(cursos.infoCursos.matematicas));
			}
		}
	}

	res.statusCode = 404;
	res.end("Not found");
};

const handlePost = (req, res) => {
	const path = req.url;
	if (path === "/cursos/programacion") {
		res.statusCode = 200;
		res.end("Se creo el curso de programacion");
	}
};

const PORT = 3000;
servidor.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
