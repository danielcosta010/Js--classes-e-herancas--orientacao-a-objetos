import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
  
  destreza
  static tipo = 'Arqueiro'
  static descricao = 'Porta um arco ágil e imprecionante precisão'

  constructor(nome, destreza){
    super(nome)
    this.destreza = destreza
  }

  obterInsignia() {
    if(this.destreza >= 5 && this.level >= 6) {
      return 'Dominador de flechas'
    }
    return super.obterInsignia()
  }
}


