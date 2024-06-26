import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago('Antônio', 4, 'Água', 4, 8)
const magaClara = new Mago('Clara', 9, 'Fogo', 6, 8)

const aqueiroBruno = new Arqueiro('Bruno', 4, 8)

const aqueiroMagoAdão = new ArqueiroMago('Adão', 5, 7, 'Flecha e Fogo', 4, 8)

const guerrerioLeandro = new Guerreiro('Leandro', 8, 5)

const personagens = [magoAntonio, magaClara, aqueiroBruno, aqueiroMagoAdão, guerrerioLeandro]

//aqueiroBruno.#level = 15

new PersonagemView(personagens).render()

//console.log(Personagem.verificarVencedor(aqueiroBruno, magaClara));

console.log(aqueiroBruno);
console.log(magaClara);
console.log(Personagem.verificarVencedor(guerrerioLeandro, aqueiroBruno));

