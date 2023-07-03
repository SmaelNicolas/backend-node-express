// const curso = require("./curso.json");

// console.log(typeof curso);
// console.log(curso);

let infoCurso = {
	titulo: "NodeJs",
	numVistas: 159159,
	numLikes: 17823,
	temas: ["JavaScript", "NodeJs"],
	esPublico: true,
};

//Objetos a strings
let infoCursoJson = JSON.stringify(infoCurso);
console.log(infoCursoJson);
console.log(typeof infoCursoJson);

//String a objetos
let infoCursoObject = JSON.parse(infoCursoJson);
console.log(infoCursoObject);
console.log(typeof infoCursoObject);
