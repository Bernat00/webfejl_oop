/**
 * Ezzel fog dolgozni a managger
 * (a managger tombje ezeket fogja tartamazni)
 */
class Question{
    /**
     * @type {string}
     */
    #questionText;

    /**
     * @type {string[]}
     */
    #answers;

    /**
     * @type {string}
     */
    #rightAnswer;

    /**
     * @returns {string[]}  a valaszokat tartalmazza
     */
    get answers(){
        return this.#answers;
    }

    /**
     * @returns {string} a kerdes szoveget tartalmazza
     */
    get questionText(){
        return this.#questionText;
    }

    /**
     * @returns {string} jo valasz sovege
     */
    get rightAnswer(){
        return this.#rightAnswer;
    }

    /**
     * 
     * @param {string} questionText 
     * @param {string[]} answers 
     * @param {string} rightAnswer 
     */
    constructor(questionText, answers, rightAnswer){
        this.#questionText = questionText;
        this.#answers = answers;
        this.#rightAnswer = rightAnswer;
    }
}