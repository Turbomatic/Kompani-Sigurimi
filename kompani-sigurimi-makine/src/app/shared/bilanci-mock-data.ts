
import { BilanciInterface } from "./bilanci-interface";

let calculateWinLoss = (shumaPrejKlientit:number,shumaNdajKlientit:number):number =>{
    return shumaPrejKlientit-shumaNdajKlientit;
};


export const  BilanciMockData : BilanciInterface[] = [
    
        {
            makina:"Audi",
            targa:"dsdads",
            sigurimi:"4tt",
            shumaNdajKlientit:200,
            shumaPrejKlientit:150,
            winLoss: calculateWinLoss(200,100)
        }
    
]

