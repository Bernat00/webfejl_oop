class ArrayList {
    /**
     * @type {number}
     */
    #count;
    #items;


    get Count() {
        return  this.#count;
    }

    constructor(){
        this.Clear();
    }

    AddItem(item){
        this.#items[this.#count] = item;
        const i = this.#count;
        Object.defineProperty(this, i, {
            get: function () {
                return this.#items[i];
            },
            set: function (v) {
                this.#items[i] = v;
            }
        } )

        this.#count++;
    }

    Clear(){
        this.#count = 0;
        this.#items = {};
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

arr[2] = 'alma';

arr.Count
console.log(arr);

