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
			res.statusCode = 501;
			console.log(
				`El metodo usado no se puede manejar. Metodo ${method}`
			);
	}
});

const handleGet = (req, res) => {
	const path = req.url;

	// CODE 200 DEFAULT

	if (path === "/") {
		res.writeHead(200, { "Content-Type": "application/json" });
		return res.end("First server and api");
	} else {
		if (path === "/cursos") {
			return res.end(JSON.stringify(cursos.infoCursos));
		} else {
			if (path === "/cursos/programacion") {
				return res.end(JSON.stringify(cursos.infoCursos.programacion));
			}
			if (path === "/cursos/matematicas") {
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

		let body = "";
		req.on("data", (content) => (body += content.toString()));
		req.on("end", () => {
			console.log(body);
			console.log(typeof body);
			// body = JSON.parse(body);
			console.log(typeof body);

			// console.log(body.titulo);
			return res.end("Se creo el curso de programacion");
		});

		// return res.end("Se creo el curso de programacion");
	}

	// res.statusCode = 404;
	// return res.end("No se creo el curso");
};

const PORT = 3000;
servidor.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
