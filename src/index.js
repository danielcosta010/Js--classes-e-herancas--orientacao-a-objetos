import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";

const magoAntonio = new Mago('Antônio', 4, 'Água', 4, 8)
const magaClara = new Mago('Clara', 9, 'Fogo', 6, 8)

const aqueiroBruno = new Arqueiro('Bruno', 7, 9)

const aqueiroMagoAdão = new ArqueiroMago('Adão', 5, 4, 'Flecha e Fogo', 4, 8)

const personagens = [magoAntonio, magaClara, aqueiroBruno, aqueiroMagoAdão]

new PersonagemView(personagens).render()
