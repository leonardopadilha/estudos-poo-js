import { Person } from "./Person.js";

export class Hero extends Person {
    #patrimony;
    #senha;

    constructor(secret_name, power, code_name, team, patrimony) {
        super(secret_name, power, code_name, team)

        this.#patrimony = patrimony;
    }

    get patrimony() {
        return this.#patrimony;
    }

    autenticar(senha) {
        return senha == this.#senha;
    }

    cadastrarSenha(senha) {
        this.#senha = senha;
    }
}


