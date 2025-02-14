class Area{
    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * @returns {HTMLDivElement} visszater az aktualis terulettel,
     * ami az elemeket tartalmazza
     */
    get div(){
        return this.#div;
    }

    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager
     */
    constructor(cssClass, manager){
        const container = this.#getContainer();
        this.#div = document.createElement('div');
        this.#div.className = cssClass;
        container.appendChild(this.#div);
        manager.setFinishCallback(resultText =>{
            container.innerHTML = '';
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result';
            resultDiv.innerText = resultText;
            container.appendChild(resultDiv);
        })
    }

    /**
     * Létrehozza a container classal rendelkezo elemet amelyen belul
     * a div lesz megtalálhato 
     * Ha mar letezik , akkor mar a letezot adja vissza
     */
    #getContainer(){
        let container = document.querySelector('.container');
        if(!container){
            container = document.createElement('div');
            container.className = 'container';
            document.body.appendChild(container);
        }

        return container;
    }
}


/**
 * Ez a terület fogja tartalmazni a kerdest
 */
class QuestionArea extends Area{
    constructor(cssClass, manager){
        super(cssClass, manager) //super = ős super() -> ős.constructor()
        manager.setNextQuestionCallback((kerdesSzoveg) => {
            this.div.innerHTML = '';
            const quCard = document.createElement('div');
            quCard.textContent = kerdesSzoveg;
            this.div.appendChild(quCard);
        })
    }
}


/**
 * Ez a terület fogja tartalmazni a valaszt
 */
class AnswereArea extends Area{
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager){
        super(cssClass, manager);
        manager.setNextAnswersCallback((valaszok) => {
            this.div.innerHTML = '';
            
            for(const valasz of valaszok){
                const answereCard = document.createElement('div');
                answereCard.className = 'item';
                answereCard.textContent = valasz;
                answereCard.addEventListener('click', () => {
                    manager.nextQuestion(valasz);
                });
                this.div.appendChild(answereCard);
            }
        });
    }
}