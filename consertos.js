class Remanufaturados {
    // Declarando tipo de conteúdo das variáveis.
    listaObjetos = [];
    aparelho = "";
    itensConsertados = [];
    valores = [];
    pronto = true;
  
    // Criação do construtor para garantir que poderão ser utilizados em mais de um método (pensando em escalabilidade do código).
    constructor(aparelho, itensConsertados, valores, pronto) {
      this.aparelho = aparelho;
      this.itensConsertados = itensConsertados;
      this.valores = valores;
      this.pronto = pronto;
    }
  
    // Método para adicionar aparelhos consertados na lista de objetos.
    adicionarAparelho(aparelho, itensConsertados, valores, pronto) {
      this.listaObjetos.push({
        aparelho: aparelho, 
        itensConsertados: itensConsertados, 
        valores: valores,
        pronto: pronto,        
      });
    }
}

    // Instanciando aparelhos para facilitar o uso de métodos.
  const novoAparelho = new Remanufaturados();
  
  //   LISTA COM APARELHOS
    novoAparelho.adicionarAparelho("Xen Money o.O", ["tela", "bateria"], [190,200], true);
    novoAparelho.adicionarAparelho("Um rim -_-", ["tela"], [350], true);
    novoAparelho.adicionarAparelho("+ouBenos 00a", ["placa mãe"], [800], false);
    novoAparelho.adicionarAparelho("SóLiga a1212", ["placa de áudio"], [178], true);
    novoAparelho.adicionarAparelho("Xen Money PRO <0-0>", ["carregador", "fone"], [75,97], true);
    novoAparelho.adicionarAparelho("Tijolão", ["bateria"], [500], false); //esperando bateria chegar (em falta com fornecedor)
    novoAparelho.adicionarAparelho("Celulator", ["tela", "bateria"], [300,97], false);
    novoAparelho.adicionarAparelho("AloU", ["tela"], [173], false);
    novoAparelho.adicionarAparelho("Xen Money -.O", ["bateria"], [200], true);
    novoAparelho.adicionarAparelho("Parece bom ■■", ["tela"], [250],true);
    novoAparelho.adicionarAparelho("+ouBenos 0B3", ["placa mãe"], [900], true);
    novoAparelho.adicionarAparelho("NemLiga", ["tela"], [230], true);
    novoAparelho.adicionarAparelho("Xen Money PRO+ 0-0", ["carregador", "fone"], [130,50], false);
    novoAparelho.adicionarAparelho("Tijolinho", ["bateria"], [320], true); 
    novoAparelho.adicionarAparelho("NumDuraUmAno", ["placa mãe"], [400], true);
    novoAparelho.adicionarAparelho("PareceQueVai", ["tela"], [190], true);

    
  
    // comando para testar a visualização de um aparelho da lista
    // console.log(novoAparelho.listaObjetos[1]);



    module.exports = novoAparelho;
