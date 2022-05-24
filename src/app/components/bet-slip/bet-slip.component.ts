import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Ball } from 'src/app/models/game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {

  @Input() refBallEvent!: EventEmitter<Ball>;
  public selectBall!:Ball;
  public ballBet!: Ball;
  public ballResult!: Ball;
  public count:number = 1;
  private interval:any;
  public startCountBet = false;
  public endBet = false;
  public stateBet:any = {};
  
  constructor(
    private _gameService:GameService
  ) {
  }

  ngOnInit(): void {
    this.refBallEvent.subscribe((ball:Ball) => {
      this.selectBall = ball;
      this.startCountBet = false;
      this.endBet = false;
    });
  }

  /*
   * The counting of the balls begins the method "mousedown"
   */
  startBet(){
    this.startCountBet = true;
    this._gameService.getBalls().subscribe( ( balls:Ball[] ) =>{
      this.interval = setInterval( () =>{
        if(this.count == balls.length) this.count = 1;
        this.count++;
        const ball = balls.filter( ball => ball.id == this.count);
        this.ballBet = ball[0];
       }, 100);
    }); 
  }

  /*
   * Stop the time interval to stop counting the balls with the events "mouseup,mouseout"
   */
  stopBet(){
    clearInterval(this.interval);
    if(this.startCountBet) {
      this.endBet = true;
      this.stateBet.state = 0;
    }
    if(this.selectBall.value == this.count){
      this.stateBet.state = 1;
    } 
    this._gameService.getBall( this.count ).subscribe( ( ball:Ball ) =>{
      this.ballResult = ball;
    })
  }

  /*
   * Reset the game values to start over
   */
  resetbet(){
    this.count = 1;
    this.startCountBet = false;
    this.endBet = false;
  }

}
