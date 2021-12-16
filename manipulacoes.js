const novoAparelho = require('./consertos');

// Para testar importação
// console.log(novoAparelho.listaObjetos[1]);

const celularesProntosProAbraco = novoAparelho.listaObjetos.filter (item => item.pronto == true)
const celularesEmBanhoMaria = novoAparelho.listaObjetos.filter (item => item.pronto == false)

// // para ver a lista de celulares prontos
// console.log('\n Abaixo a lista de todos os aparelhos prontos para retirada \n')

// console.log(celularesProntosProAbraco);

// para ver a lista de celulares ainda em conserto
// console.log(celularesEmBanhoMaria);



function somaProdutos(valores)
{
    const total = valores.reduce((total, valor) => total + valor);
    return console.log(`Valor total do conserto ${total}`)
};

// console.log(somaProdutos()); acho que não vai servir

celularesProntosProAbraco.forEach(item => {
    console.log(`Aparelho: ${item.aparelho}`);

    console.log(`Itens consertados: `);
    console.log(`* ${item.itensConsertados}`);

    somaProdutos(item.valores);

    console.log('\n');
});








