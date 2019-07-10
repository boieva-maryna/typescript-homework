import View from './view';
class ModalView extends View {
    constructor(fighterInfo) {
      super();

      this.createModal(fighterInfo);
    }
createModal(fighterInfo){
    this.element=this.createElement({ tagName: 'div', className: 'modal-wrap' });
    const modal=this.createElement({ tagName: 'div', className: 'modal' });
    const close=this.createElement({ tagName: 'span', className: 'modal-button'});
    close.innerText="X";
    close.addEventListener("click", function () {
      this.parentNode.parentNode.style.display="none";
    });
    this.element.addEventListener("dblclick", function () {
      this.style.display="none";
    });
    modal.append(close);
    const list=this.createList(fighterInfo);
    modal.append(...list);
    this.element.appendChild(modal);
}
createList(fighterInfo){
    let i=0;
    let list=[];
    Object.defineProperty(fighterInfo, "_id", {enumerable: false});
    Object.defineProperty(fighterInfo, "source", {enumerable: false});
    for(let key in fighterInfo){
      const p=this.createElement({ tagName: 'p', className: 'modal-text'});
      p.innerText=key+":"+fighterInfo[key];
      list.push(p);
      i++;
    }
       return list;
  }
}
export default ModalView;