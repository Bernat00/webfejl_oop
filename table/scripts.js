const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    #tbody
    constructor(data){
        this.firstname1 = data.firstname1;
        this.firstname2 = data.firstname2 || '';
        this.lastname = data.lastname;
    }

    render(tbody){
        const cells = [];
        
        cells.push(createCell(this.lastname));
        cells.push(createCell(this.firstname1, this.firstname2?null:2));

        
        if(this.firstname2){
            cells.push(createCell(this.firstname2));
        }

        tbody.appendChild(createRow(cells));
    }

}



class FormController{
    /**
     * @type {HTMLFormElement}
     */
    #form;
    #tbody;

    get lastname(){
        return this.#getInputById('lastname').value;
    }

    get firstname1(){
        return this.#getInputById('firstname1').value;
    }

    get firstname2(){
        
        return this.#getInputById('firstname2').value;
    }

    constructor(form, tbody){
        this.#form = form;
        this.#tbody = tbody;
    }

    /**
     * 
     * @param {SubmitEvent} e 
     */
    #submit(e){
        e.preventDefault();
        const obj = {
            firstname1: this.firstname1,
            firstname2: this.firstname2,
            lastname: this.lastname
        }

        const person = new Person(obj);
        person.render(this.#tbody);
    }

    initListener(tbody){
        this.#form.addEventListener('submit', (e) => this.#submit(e) );
    }

    /**
     * 
     * @param {string} id
     * @returns {HTMLInputElement} 
     */
    #getInputById(id){
        return this.#form.querySelector('#'+id);
    }

}


function init(){
    const tbody = document.getElementById('tbodyId');
    const formElement = document.getElementById('form');

    for(const person of array){
        const asd = new Person(person);
        asd.render(tbody);
    }
    
    const controller = new FormController(formElement, tbody);
    controller.initListener();
    
}


init();

