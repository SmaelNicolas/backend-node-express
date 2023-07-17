const http = require("http");
const PORT = 3001;

// const servidor = http.createServer((request, response) => {
// 	console.log("Log desde el back");
// 	response.end("Hola desde el back");
// });
// servidor.listen(PORT, () => {
// 	console.log(`Server listening on port http://localhost:${PORT}`);
// });

const server = http.createServer((req, res) => {
	// console.log("REQUEST");
	// console.log(req.url);
	// console.log(req.method);
	// console.log(req.headers);

	console.log("RESPONSE");
	// console.log(res.statusCode);
	// res.statusCode = 404;
	// console.log(res.statusCode);
	res.setHeader("content-type", "application/json");
	console.log(res.getHeaders());

	res.end("Hola desde el back");
});
server.listen(PORT, () => {
	console.log(`Server listening on port http://localhost:${PORT}`);
});
