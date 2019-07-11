import { callApi } from '../helpers/apiHelper';
interface IFighterService{
  getFighters:()=>Promise<Array<{
    _id:string,
    name:string,
    health:number,
    attack:number,
    defense:number,
    source:string
  }>>
}
class FighterService implements IFighterService{
   public async getFighters():Promise<Array<{
    _id:string,
    name:string,
    health:number,
    attack:number,
    defense:number,
    source:string
    }>> {
    try {
      const endpoint:string = 'fighters.json';
      const apiResult = await callApi(endpoint, 'GET');

      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(_id:string):Promise<{
    _id:string,
    name:string,
    health:number,
    attack:number,
    defense:number,
    source:string
    }>{
    // implement this method
    // endpoint - `details/fighter/${_id}.json`;
    try {
      const endpoint = `details/fighter/${_id}.json`;
      const apiResult = await callApi(endpoint, 'GET');
      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }
}
const fighterService =new FighterService();
export {fighterService}