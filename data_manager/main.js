/**
 * @typedef {{nev: string, eletkor: number}} Person
 *
 * @callback UpdateCallback
 *  @param {Person[]} persons
 *  @return {void}
 */

class DataManager {
    /**
     * @type {Person[]}
     */
    #array;

    /**
     * @type {UpdateCallback}
     */
    #updateCallback;

    /**
     *
     * @param {Person[]} array
     */
    constructor(array=[]) {
        this.#array = array;
        this.#updateCallback = () =>{}
    }

    /**
     *
     * @param callback {UpdateCallback}
     */
    setUpdateCallback(callback) {
        this.#updateCallback = callback;
        this.#updateCallback(this.#array);
    }

    /**
     *
     * @param person {Person}
     */
    add(person) {
        this.#array.push(person);
        this.#updateCallback(this.#array);
    }

    /**
     *
     * @param name {string}
     */
    filterName(name) {
        const result = [];

        this.#array.forEach((person) => {
            if (person.name.includes(name)) {
                result.push(person);
            }
        })

        this.#updateCallback(result);
    }

    /**
     *
     * @param age {number}
     */
    filterAge(age) {
        const result = []

        this.#array.forEach((person) => {
            if (person.eletkor === age){
                result.push(person);
            }
        })

        this.#updateCallback(result);
    }
}


class DataTable{
    /**
     *
     * @param dataManager {DataManager}
     */
    constructor(dataManager) {
        const table = document.createElement("table");
        const tbody = document.createElement("tbody");

        table.appendChild(tbody);

        document.body.appendChild(table);

        dataManager.setUpdateCallback((persons) =>{
            tbody.innerHTML = "";
            const tr = document.createElement('tr');
            const name = document.createElement('td');
            const age = document.createElement('td');

            for(const person of persons){
                const tr = document.createElement('tr');
                const name = document.createElement('td');
                const age = document.createElement('td');

                tbody.appendChild(tr);
                tr.appendChild(name);
                tr.appendChild(age);

                name.innerText = person.nev;
                age.innerText = person.eletkor
            }
        })
    }
}



dataManager = new DataManager([{nev: 'Kis Jancsi', eletkor: 22}, {nev: 'Kis Balázs', eletkor: 18}, {nev: 'Nagy Jancsi', eletkor: 11}]);
dataTable = new DataTable(dataManager);

