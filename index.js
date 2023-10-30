import { Hero } from "./Hero.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Team } from "./Team.js";

const hero_team = new Team("Avengers", ["Weapons", "Planes"]);
const ironMan = new Hero("Tony Stark", "Tecnology", "Iron Man", hero_team, "billionaire");
ironMan.cadastrarSenha("12345");
const heroLogged = SistemaAutenticacao.login(ironMan, "1234");

console.log(ironMan.team_name());
console.log(hero_team.equipment)
console.log(heroLogged);


// Estudar sobre métricas pq a apresentação será na próxima semana

/*
Personagem
    Herói
    Inimigo

Times (Ligas)

Lutas
*/