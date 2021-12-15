const novoAparelho = require('./consertos');

// Para testar importação
// console.log(novoAparelho.listaObjetos[1]);

const celularesProntosProAbraco = novoAparelho.listaObjetos.filter (item => item.pronto == true)
const celularesEmBanhoMaria = novoAparelho.listaObjetos.filter (item => item.pronto == false)


console.log(celularesProntosProAbraco);
console.log(celularesEmBanhoMaria);


// reduce