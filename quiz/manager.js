/**
 * @callback NextQuestionCallback
 * @param {string} kerdes a kerdes szovege
 * 
 * @callback NextAnswersCallback
 * @param {string[]} valaszokat
 * 
 * @callback FinishCallback
 * @param {string} result
 */

class Manager{
    /**
     * @type {Question[]}
     */
    #array;

    /**
     * @type {number} aktualis kerdes szama
     */
    #currentQuestionNumber;

    /**
     * @type {object} a kerdesszamonkent eltarolt valaszokat tartalmazza
     */
    #seletedAnswer;

    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback;

    /**
     * @type {NextAnswersCallback}
     */
    #nextAnswerCallback;

    /**
     * @type {FinishCallback}
     */
    #finishCallback;


    /**
     * 
     * @param {Question[]} array kerdes tomb
     */
    constructor(array=[]){
        this.#array = array;
        this.#currentQuestionNumber = 0;
        this.#seletedAnswer = {};
    }

    /**
     * 
     * @param {NextQuestionCallback} callback kövi lepes callback (akk fut e amikor jon a kovi lepes) 
     */
    setNextQuestionCallback(callback){
        this.#nextQuestionCallback = callback;
    }


    /**
     * 
     * @param {NextAnswersCallback} callback 
     */
    setNextAnswersCallback(callback){
        this.#nextAnswerCallback = callback;
    }


    /**
     * 
     * @param {FinishCallback} callback 
     */
    setFinishCallback(callback){
        this.#finishCallback = callback;
    }


    nextQuestion(answer){
        this.#seletedAnswer[this.#currentQuestionNumber] = answer;
        this.#currentQuestionNumber++;

        if(this.#currentQuestionNumber < this.#array.length){
            const nextQuestion = this.#array[this.#currentQuestionNumber];
            this.#nextQuestionCallback(nextQuestion.questionText);
            this.#nextAnswerCallback(nextQuestion.answers);
        }
        else{
            let counter = 0;
            for(const i in this.#array){
                if(this.#array[i].rightAnswer === this.#seletedAnswer[i]){
                    counter++;
                }
            }
            const result = `A kerdessor veget ert: ${this.#array.length}/${counter}}`
            this.#finishCallback(result);
        }
    }


    /**
     * megjeleniti az elso kerdest, valaszokat
     */
    start(){
        this.#nextQuestionCallback(this.#array[0].questionText);
        this.#nextAnswerCallback(this.#array[0].answers);
    }
}