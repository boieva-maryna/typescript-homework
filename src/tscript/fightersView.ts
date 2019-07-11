import View from './view';
import FighterView from './fighterView';
import ModalView from './modalView';
import { fighterService } from './services/fightersService';
import {ijsonfighter} from './jsonfighter'
class FightersView extends View {
  public handleClick:(event:Event,fighter:ijsonfighter)=>Promise<void>;
  constructor(fighters:Array<{
    _id:string,
    name:string,
    health:number,
    attack:number,
    defense:number,
    source:string,
    [key:string]:string|number
    }>) {
    super();
    this.handleClick = this.handleFighterClick.bind(this);
    this.createFighters(fighters);
  }
  fightersDetailsMap = new Map();
  createFighters(fighters:Array<ijsonfighter>) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new FighterView(fighter, this.handleClick);
      return fighterView.element;
    });

    this.element = this.createElement({ tagName: 'div', className: 'fighters' });
    this.element.append(...fighterElements);
  }
   async handleFighterClick(event:Event,fighter:ijsonfighter) {
      const { _id } = fighter;
      let myelem=document.getElementsByClassName("modal-wrap");
      const fighterInfo=await this.getInfo(_id);
      if(myelem.length==0){
        const myelem2=new ModalView(fighterInfo);
        document.body.append(myelem2.element);
      }
      else{
        (myelem[0] as HTMLElement).style.display="block";
        const list=myelem[0].getElementsByClassName("modal-text");
        let i=0;
        Object.defineProperty(fighterInfo, "_id", {enumerable: false});
        Object.defineProperty(fighterInfo, "source", {enumerable: false});
        for(let key in fighterInfo){
          if(i<list.length){
            (list[i] as HTMLElement).innerText=key+":"+fighterInfo[key];
          }
          i++;
        }
      }
  }
  async getInfo(_id:string):Promise<ijsonfighter>{
    if(! this.fightersDetailsMap.has(_id)) {
      // send request here
        const res=await fighterService.getFighterDetails(_id);
        this.fightersDetailsMap.set(_id, res);
    }
    return this.fightersDetailsMap.get(_id);
  }
}

export default FightersView;