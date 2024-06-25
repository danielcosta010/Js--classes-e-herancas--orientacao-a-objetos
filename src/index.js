import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
const personagemJose = new Personagem('José', 3, 'Arqueiro');
const personagemClara = new Personagem('Clara', 4, 'ArqueiroMago');

console.log(`${personagemPedrinho.nome} é um ${personagemPedrinho.obterInsignia()}`);
console.log(`${personagemJose.nome} é um ${personagemJose.obterInsignia()}`);
console.log(`${personagemClara.nome} é um ${personagemClara.obterInsignia()}`);

const personagens = [personagemPedrinho, personagemJose, personagemClara]

new PersonagemView(personagens).render()

console.log(personagemClara.vida);
