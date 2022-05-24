import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {

  @Input() refBallEvent!: EventEmitter<Object>;
  public selectBall:any = {};
  public count:number = 1;
  private interval:any;
  public startCountBet = false;
  public endBet = false;
  public stateBet:any = {};

  constructor() {
   }

  ngOnInit(): void {
    this.refBallEvent.subscribe(ball => {
      this.selectBall = ball;
      this.startCountBet = false;
      this.endBet = false;
    });
  }

  startBet(){
    this.startCountBet = true;
    this.interval = setInterval( () =>{
        if(this.count == 10) this.count = 1;
        this.count++;
       }, 100);
  }

  stopBet(){

    clearInterval(this.interval);

    if(this.startCountBet) {
      this.endBet = true;
      this.stateBet.state = 0;
    }

    if(this.selectBall.value == this.count){
      this.stateBet.state = 1;
    } 

  }

  resetbet(){
    this.count = 1;
    this.startCountBet = false;
    this.endBet = false;
  }

}
