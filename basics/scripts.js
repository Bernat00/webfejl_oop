function Player(nickname){
    this.name = nickname;
    this.playedMatch = 0;
}



Player.prototype.play = function (){
    this.playedMatch++;
    console.log(this.name + " has played!");
}

Player.prototype.getTierLevel = function (){
    if(this.playedMatch<=3)
        return "A";
    else if(this.playedMatch > 3 && this.playedMatch <= 6)
        return "B";
    else
    return "C";
}


class ClasosPlayer {
    constructor(nickname) {
        this.name = nickname;
        this.playedMatch = 0;
    }
    
    play(){
        this.playedMatch++;
        console.log(this.name + " has played!");
    }
    
    
    
    getTierLevel(){
        if(this.playedMatch<=3)
            return "A";
        else if(this.playedMatch > 3 && this.playedMatch <= 6)
            return "B";
        else
        return "C";
}
}

function Person(name){
    this.name = name;
}

Person.prototype.getName = function (){
    return this.name
}

function Student(name, school){
    Person.call(this, name);
    this.school = school;
}

Object.setPrototypeOf(Student.prototype, Person.prototype);


class CPerson {
    constructor(name) {
        this.name = name;
    }

    getName(){
        return this.name
    }
}

class CStudent extends CPerson{
    constructor(name, school){
        super(name)
        this.school = school;
    }

    getSchool(){
        return this.school;
    }
        
}


class Animal{
    /**
     * 
     * @param {string} name 
     */
    constructor(name='noName'){
        this.name = name;
        this.sound = undefined;
    }
       
    makeSound(){
        if(this.sound === undefined)
            console.log("sound is undifined");

        console.log('the ' + this.name + ' says ' + this.sound);
    }
    
}

class Bird extends Animal{
    constructor(name='noName'){
        super(name);
        this.sound = 'idk csirpel';
    }

    fly(){
            console.log('the ' + this.name + 'flys');
    }
}

class Mammal extends Animal{

    constructor(name='noName'){
        super(name);
        this.sound = undefined;
    }

    walk(){
        console.log('the ' + this.name + ' walks');
    }
    
}
