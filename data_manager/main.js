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
     * @param {UpdateCallback} callback
     */
    setUpdateCallback(callback) {
        this.#updateCallback = callback;
        this.#updateCallback(this.#array);
    }

    /**
     *
     * @param {Person} person
     */
    add(person) {
        this.#array.push(person);
        this.#updateCallback(this.#array);
    }

    /**
     *
     * @param {string} name
     */
    filterName(name) {
        if(!name){
            this.#updateCallback(this.#array);
            return;
        }

        const result = [];

        this.#array.forEach((person) => {
            if (person.nev.toLowerCase().includes(name)) {
                result.push(person);
            }
        })

        this.#updateCallback(result);
    }

    /**
     *
     * @param {number} age
     */
    filterAge(age) {
        if(!age){
            this.#updateCallback(this.#array);
            return;
        }

        const result = []

        this.#array.forEach((person) => {
            if (person.eletkor == age){
                result.push(person);
            }
        })

        this.#updateCallback(result);
    }
}


class DataTable{;
    #tbody;

    /**
     *
     * @param {DataManager} dataManager
     */
    constructor(dataManager) {
        const table = document.createElement("table");
        this.#tbody = document.createElement("tbody");
        table.appendChild(this.#tbody);
        document.body.appendChild(table);

        dataManager.setUpdateCallback((persons) => {
            this.#renderTable(persons, this.#tbody);         //todo itt ez a jó megoldás???
        });
    }

    /**
     * 
     * @param {Person[]} persons 
     */
    #renderTable(persons, tbody){
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
    }
}



dataManager = new DataManager([{nev: 'Kis Jancsi', eletkor: 22}, {nev: 'Kis Balázs', eletkor: 18}, {nev: 'Nagy Jancsi', eletkor: 11}]);
dataTable = new DataTable(dataManager);

document.getElementById('name').addEventListener('input', (e) => {
    dataManager.filterName(e.currentTarget.value);
})

document.getElementById('age').addEventListener('input', (e) => {
    dataManager.filterAge(e.currentTarget.value);
})

