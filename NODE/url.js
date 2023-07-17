const miUrl = new URL(
	"https://example.org/cursos/programacion?order=vistas&nivel=1"
);

console.log(miUrl.hostname);
console.log(miUrl.pathname);
console.log(miUrl.searchParams.get("order"));
console.log(miUrl.searchParams.get("nivel"));
console.log(miUrl.protocol);
