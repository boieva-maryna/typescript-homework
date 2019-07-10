class Fighter{
    constructor(fighterInfo){
        const {name,health,attack,defense,source}=fighterInfo;
        this.name=name;
        this.health=health;
        this.attack=attack;
        this.defense=defense;
        this.source=source;
    }
    chance(){
        return Math.floor(1 + Math.random() * 2);
    }
    getHitPower(){
        return this.attack*this.chance();
    }
    getBlockPower(){
        return this.defense* this.chance();
    }
}
export default Fighter;