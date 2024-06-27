import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
  ladoMago
  ladoArqueiro
  static tipo = 'ArqueiroMago'
  static descricao = 'Com um arco e bastão mágico, estou em um patamar superior'

  constructor(nome, destreza, elementoMagico, levelMagico, inteligencia){
    super(nome)
    this.ladoArqueiro = new Arqueiro(nome, destreza)
    this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia)
  }
  obterInsignia(){
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
  }
  
}
  