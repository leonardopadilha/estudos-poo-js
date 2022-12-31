export class Team {
    #team_name;
    #equipment;

    constructor(team_name, equipment) {
        this.#team_name = team_name;
        this.equipment = equipment;
    }

    get team_name() {
        return this.#team_name;
    }

    get() {
        return this.#equipment;
    }
}