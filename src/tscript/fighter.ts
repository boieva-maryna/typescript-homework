import { PassThrough } from "stream";

export default class Fighter{
    public name:string;
    public health:number;
    public attack:number;
    public defense:number;
    public source:string;
    constructor(fighterInfo:
        {_id:string,name:string,health:number,attack:number,defense:number,source:string}){
        const {name,health,attack,defense,source}=fighterInfo;
        this.name=name;
        this.health=health;
        this.attack=attack;
        this.defense=defense;
        this.source=source;
    }
    chance():number{
        return Math.floor(1 + Math.random() * 2);
    }
    getHitPower():number{
        return this.attack*this.chance();
    }
    getBlockPower():number{
        return this.defense* this.chance();
    }
    reset():void{
        this.name="";
        this.health=0;
        this.attack=0;
        this.defense=0;
        this.source="";
    }
}