import { createRow } from "./functions";

export class Factory{
 constructor(){
    this.companions = [];
 }

 addCompanion(mano){
    this.companions.push(mano);
    createRow(mano);
 }


//      todo megkerdezni h a 8as feladat megis mi a jo edes lónemiszervet akar jelenteni,
//          ez itt nem akar mukodni mint c#ban de nem szol erte az intelisense
// addCompanion(form, asd){         
//    this.companions.push(form);
// }


 getNewIndex(){
    return this.companions.length-1;
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