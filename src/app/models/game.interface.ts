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
    startCountBet:boolean,
    endBet:boolean,
    isSubmit:boolean,
    state:boolean | undefined,
    selectBall?:Ball,
    ballBet?:Ball,
    ballResult?:Ball,
    count:number,
    interval?:any,
}

const defaultControls:ControlGame = {
    startCountBet: false,
    endBet:false,
    isSubmit:false,
    state:undefined,
    count:1
}

export class Game {

    public control: ControlGame;

    constructor( controlGame?:ControlGame ){
        this.control =  { ...defaultControls, ...controlGame };
    }
    
}