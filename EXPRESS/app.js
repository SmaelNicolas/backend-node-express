const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

//ROUTERS
const routerCursos = require("./routers/courses.js");
const routerProgramacion = require("./routers/programacion.js");
const routerMatematicas = require("./routers/matematicas.js");

app.use("/api/cursos/programacion", routerProgramacion);
app.use("/api/cursos", routerCursos);
app.use("/api/cursos/matematica", routerMatematicas);

//Routing
app.get("/", (req, res) => {
	res.send("SERVER EXPRESS . CURSOS");
});

//iniciar servidor
app.listen(PORT, () => {
	console.log(`Running on port ${PORT} ... - localhost:${PORT}`);
});
