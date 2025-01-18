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
            },
            configurable: true,
            enumerable: true
        } )

        this.#count++;
    }

    Clear(){
        this.#count = 0;
        this.#items = {};
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


