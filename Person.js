export class Person {
    #secret_name;
    #power;
    #code_name;
    #team;

    constructor(secret_name, power, code_name, team) {
        if (this.constructor == Person) {
            throw new Error('Você não deveria instanciar uma classe abstrata');
        }
        this.#secret_name = secret_name;
        this.#power = power;
        this.#code_name = code_name;
        this.#team = team;
    }

    get secret_name() {
        return this.#secret_name;
    }

    get power() {
        return this.#power;
    }

    get code_name() {
        return this.#code_name;
    }

    get team() {
        return this.#team;
    }

    team_name() {
        if (!this.#team) {
            return 'This person does not participate in the team';
        } else {
            return `The ${this.code_name} participates in the ${this.#team.team_name}`;
        }
    }

}