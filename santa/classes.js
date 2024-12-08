

export class Factory{
 constructor(){
    this.Companions = [];
 }

 addCompanion(mano){
    this.Companions+=mano;
 }

}

export class Companion{
    constructor(id, firstName, lastName, area){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.area = area;
        this.producedStuff = [];
    }

    getFullName(){
        return this.keresztnev + ' ' + this.vezeteknev;
    }

    addProducedStuff(stuff){
        this.producedStuff+=stuff;
    }
}