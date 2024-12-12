//import { createRow } from "./functions.js";

class Factory{
 constructor(){
    this.companions = [];
 }


 /**
  * 
  * @param {Companion} mano 
  */
 addCompanion(mano){
    this.companions.push(mano);
    createRow(mano);
 }

 // en nem ertem h mi van ezzel a designel mi az h itt adjak a gomboknak eventlistenert amikor itt van a companion a tablazat sorkeszitesnel


 /**
  * 
  * @param {Companion} mano 
  */
addCompanionAutoIndexer(mano){
    mano.id = this.getNextId();
    this.addCompanion(mano);
}


 getNextId(){
    return this.companions.length;
 }

 viewCompanion(id){
    refreshProductList(this.companions[id]);
}



}

class Companion{
    constructor(id, firstName, lastName, area){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.area = area;
        this.producedStuff = [];
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }

    addProducedStuff(stuff){
        for(const asd of stuff){
            this.producedStuff.push(asd);
        }
    }
}