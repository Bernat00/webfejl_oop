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

const gomSzab = new ClasosPlayer("GomSzab");
console.log(gomSzab);

