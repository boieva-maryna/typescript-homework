import View from "./view";
import Fighter from './fighter';
class FightView extends View{
    constructor(fightersView){
        super();
        this.createControls(fightersView);
        this.isFinished=false;
        this.player1;
        this.player2;
        this.winner;
    }
    async getChoice(fightersView,id1,id2){
        this.player1=new Fighter(await fightersView.getInfo(id1));
        this.player2=new Fighter(await fightersView.getInfo(id2));
    }
    createControls(fightersView){
      this.element=this.createElement({tagName:'div',className:'controls'});
      this.element.appendChild(this.createElement({tagName:'div',className:'controls--wrap'}))
      const ch1=this.createCheckBox(1,"Ryu");
      const ch2=this.createCheckBox(2,"Dhalsim");
      const ch3=this.createCheckBox(3,"Gulie");
      const ch4=this.createCheckBox(4,"Zangief");
      const ch5=this.createCheckBox(5,"Ken");
      const ch6=this.createCheckBox(6,"Bison");
      const submit=this.createElement({tagName:'a',className:'controls--button'});
      submit.innerText="Choose";
      this.element.firstChild.append(ch1,ch2,ch3,ch4,ch5,ch6,submit);
      submit.addEventListener("click",()=>{this.handleStartClick(fightersView)});
      const start=this.createElement({ tagName: 'a', className: 'controls' });
      start.innerText="Start";
      start.id="start-fight";  
      start.addEventListener("click",()=>{
          if(!this.isFinished) this.handlePress();
      });
      start.style.display="none";
      document.body.append(start);
      const stage=this.createElement({tagName:'div',className:'stage'});
      const gamer1=this.createPlayerFrame(1);
      const gamer2=this.createPlayerFrame(2);
      stage.append(gamer1,gamer2);
      stage.style.display="none";
      document.getElementById("root").append(stage);
      const congrad=this.createElement({tagName:'h1',className:'congrad'});
      congrad.style.display="none";
      const back=this.createElement({tagName:'a',className:'back'});
      back.onclick=()=>{ this.startAgain()};
      back.style.display="none";
      const hp1=this.createProgressBar();

      const hp2=this.createProgressBar();
      document.body.append(congrad,back);
      const container=this.createElement({tagName:"div",className:"controls--wrap"});
      container.append(hp1,hp2);
      container.id="progress-bars";
      container.style.display="none";
      document.body.insertBefore(container,document.getElementById("root"));
    }
    createProgressBar(){
      const progress=this.createElement({tagName:'div',className:"progress"});
      const bar=this.createElement({tagName:'div',className:"bar"});
      bar.style.width="100%";
      progress.append(bar);
      return progress;
    }
    createCheckBox(id,text){
      const label=this.createElement({tagName:'label',className:'label'});
      const checkbox=this.createElement({tagName:'input',className:'checkbox'});
      checkbox.type="checkbox";
      checkbox.id=id;
      label.appendChild(checkbox);
      label.append(document.createTextNode(text));
      label.append(this.createElement({tagName:'div',className:'icon'}));
      return label;
    }
    createPlayerFrame(id){
      const frame=this.createElement({tagName:'div',className:'player'});
      frame.id="player"+id;
      return frame;
    }
    async handleStartClick(fightersView){
        let id1=0;
        let id2=0;
        let checkboxes=[...document.getElementsByClassName("checkbox")];
        const checked=checkboxes.filter(elem=>elem.checked==true);
        switch(checked.length){
          case 0:id1=id2=1;
          document.getElementById("player1").className="player Ryu";
          document.getElementById("player2").className="player right Ryu";
          break;
          case 1:id1=id2=checked[0].id;
          document.getElementById("player1").className="player "+checked[0].parentNode.innerText;
          document.getElementById("player2").className="player right "+checked[0].parentNode.innerText;
          break;
          default: id1=checked[0].id;
          id2=checked[1].id;
          document.getElementById("player1").className="player "+checked[0].parentNode.innerText;
          document.getElementById("player2").className="player right "+checked[1].parentNode.innerText;
          break;
        }
        this.getChoice(fightersView,id1,id2);
        document.getElementsByClassName("stage")[0].style.display="block";
        document.getElementById("start-fight").style.display="block";
        document.getElementById("progress-bars").style.display="flex";
        this.element.style.display="none";
        document.getElementsByClassName("fighters")[0].style.display="none"; 
    }
    handlePress(){
        //кривовато
        const player1_elem=document.getElementById("player1");
        const player2_elem=document.getElementById("player2");
        const hp1=document.getElementsByClassName("bar")[0];
        const hp2=document.getElementsByClassName("bar")[1]; 
        const width1=this.player1.health;
        const width2=this.player2.health;//нужно для формулы
        let map = {};
        const handler= event=>{
          map[event.keyCode] = event.type == "keydown";
          if(map[40]&&map[87]) {
            player1_elem.classList.add(this.player1.name+"--punch");
            setTimeout(() =>{  player1_elem.classList.remove(this.player1.name+"--punch"); },200);
            player2_elem.classList.add(this.player2.name+"--dodge");
            setTimeout(() =>{  player2_elem.classList.remove(this.player2.name+"--dodge"); }, 300);
            map={};
          }
          else if(map[38]&&map[83]){
            player2_elem.classList.add(this.player2.name+"--punch");
            setTimeout(() =>{  player2_elem.classList.remove(this.player2.name+"--punch"); }, 200);
            player1_elem.classList.add(this.player1.name+"--dodge");
            setTimeout(() =>{  player1_elem.classList.remove(this.player1.name+"--dodge"); }, 300);
            map={};
          }
          else if(map[87]) {
            this.fight(this.player1,this.player2,hp2,width2);
            player1_elem.classList.add(this.player1.name+"--punch");
            setTimeout(() =>{  player1_elem.classList.remove(this.player1.name+"--punch"); }, 200);
            map={};
          }
          else if(map[38]) {
            this.fight(this.player2,this.player1,hp1,width1);
            player2_elem.classList.add(this.player2.name+"--punch");
            setTimeout(() =>{  player2_elem.classList.remove(this.player2.name+"--punch"); }, 200);
            map={};
          }
          if(this.checkWin(player1_elem,player2_elem)) document.body.removeEventListener("keydown",f);
        }
        const f=this.throttle(handler,200);//вызываем обработчик с задержкой
        document.getElementById("start-fight").style.display="none";
        document.body.addEventListener("keydown",f);
        document.body.addEventListener("keyup",f);
      }
      fight(player1,player2,hp,width){
          let damage=player2.getBlockPower()-player1.getHitPower();
          if(damage<=0){
            player2.health+=damage;
            hp.innerText=player2.health;
            hp.style.width= Number.parseInt(hp.style.width)+100*damage/width+"%";
          }
      }
      checkWin(player1_elem,player2_elem){
        if(this.player1.health<=0||this.player2.health<=0) {
          if(this.player1.health>this.player2.health) {
            this.winner="Player 1"
            player1_elem.classList.add(this.player1.name+"--victory");// ОБЯЗАТЕЛЬНО СДЕЛАТЬ АНИМАЦИЮ ПРОИГРЫША
            player2_elem.classList.add(this.player2.name+"--death");
          }
          else {
            this.winner="Player 2";
            player2_elem.classList.add(this.player2.name+"--victory");
            player1_elem.classList.add(this.player1.name+"--death");
          }
           this.isFinished=true;
           const congrad=document.getElementsByClassName("congrad")[0];
           congrad.style.display="inline-block";
           congrad.innerText=this.winner+ " won!";
           document.getElementsByClassName("back")[0].style.display="inline-block";
          return true;
        }
      }
      startAgain(){
        this.player1={};
        this.player2={};
        this.isFinished=false;
        this.element.style.display="flex";
        document.getElementsByClassName("fighters")[0].style.display="flex";
        document.getElementsByClassName("stage")[0].style.display="none";
        document.getElementsByClassName("congrad")[0].style.display="none";
        document.getElementsByClassName("back")[0].style.display="none";
        document.getElementsByClassName("bar")[0].style.width="100%";
        document.getElementsByClassName("bar")[1].style.width="100%";
        document.getElementById("progress-bars").style.display="none";
      }
      throttle = (func, limit) => {
        let inThrottle
        return (...args) => {
          if (!inThrottle) {
            func(...args)
            inThrottle = setTimeout(() => inThrottle = false, limit)
          }
        }
      }
}
export default FightView;