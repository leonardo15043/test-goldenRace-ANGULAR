export interface Ball{
    id:number,
    value:number,
    color:string,
}

export interface ConfigurationGame{
    id:number,
    speedBall:number,
    minimumAmount:number,
    gainBet:number
}

export interface ControlGame{
    idUser?:number | undefined,
    startCountBet:boolean,
    endBet:boolean,
    isSubmit:boolean,
    state:boolean | undefined,
    selectBall?:Ball,
    ballBet?:Ball,
    ballResult?:Ball,
    count:number,
    gainBet:number,
    interval?:any,
}

const defaultControls:ControlGame = {
    startCountBet: false,
    endBet:false,
    isSubmit:false,
    state:undefined,
    gainBet:0,
    count:1
}

export class Game {

    public control: ControlGame;

    constructor( controlGame?:ControlGame ){
        this.control =  { ...defaultControls, ...controlGame };
    }
    
}