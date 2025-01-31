class ArrayList {
    /**
     * @type {number}
     */
    #count;
    #items;
    #arrayTable;


    get Count() {
        return  this.#count;
    }

    /**
     *
     * @param arrayTable {TableHTMLArray}
     */
    constructor(arrayTable=undefined){
        this.Clear();
        this.#arrayTable = arrayTable;
    }



    AddItem(item){
        this.#items[this.#count] = item;
        const i = this.#count;
        Object.defineProperty(this, i, {
            get: () => {
                return this.#items[i];
            },
            set: (v) => {
                this.#items[i] = v;
            },
            configurable: true,
            enumerable: true
        } )

        this.#count++;
        if(this.#arrayTable)
            this.#arrayTable.addPersonRow(item);
    }

    Clear(){
        this.#count = 0;
        this.#items = {};
        this.#arrayTable = undefined;
        for (const property in this) {
          delete this[property];
        }
    }

    Contains(item){
        for (const i in this.#items) {
            if(this.#items[i] === item){
                return true;
            }
        }

        return false;
    }
}

const alma = {};
Object.defineProperty(alma, "nev", {value:'ferenc', writable: true});
alma.nev = 'asd';

console.log(alma);

let arr = new ArrayList();
arr.AddItem('asd');
arr.AddItem('basd');
arr.AddItem('casd');
console.log(arr);


class TableHTMLArray extends HTMLElement{
    #thead;
    #tbody;

    constructor() {
        super();
    }

    connectedCallback(){
        const table = document.createElement('table');
        this.#thead = document.createElement('thead');
        this.#tbody = document.createElement('tbody');
        this.appendChild(table);
        table.appendChild(this.#thead);
        table.appendChild(this.#tbody);
    }

    /**
     *  @param  {{nev: String, eletkor:Number}} person
     *
     */
    addPersonRow(person){
        const tr = document.createElement('tr');
        const nev = document.createElement('td');
        const eletkor  = document.createElement('td');

        nev.innerText = person.nev;
        eletkor.innerText = person.eletkor.toString();

        this.#tbody.appendChild(tr);
        tr.appendChild(nev);
        tr.appendChild(eletkor)
    }
}

customElements.define('array-table', TableHTMLArray);

const arrayTable = new TableHTMLArray();
document.body.appendChild(arrayTable);

arrayTable.addPersonRow({nev: 'Kuki Neki Nuku', eletkor:22})
arrayTable.addPersonRow({nev: 'Kúr Tamás', eletkor:19})
arrayTable.addPersonRow({nev: 'Leo Kádia', eletkor:40})
arrayTable.addPersonRow({nev: 'Hiszt Erika', eletkor:35})

const  button = document.createElement('button');
button.innerText = 'nagyon button'
button.addEventListener('click', ()=>{
    arrayTable.addPersonRow({nev: 'Leo Kádia', eletkor:40})
})

document.body.appendChild(button);
