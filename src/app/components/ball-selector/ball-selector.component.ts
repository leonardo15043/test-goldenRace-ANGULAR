import { Component, EventEmitter, OnInit } from '@angular/core';
import { Ball } from 'src/app/models/game.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css']
})
export class BallSelectorComponent implements OnInit {

  ballEvent: EventEmitter<Ball> = new EventEmitter<Ball>();
  balls:Ball[] = [];

  constructor(
    private _gameService:GameService
  ) { 
    this.getAllBalls();
  }

  ngOnInit(): void {
  }

  /**
   * Bring the list of balls to show them in the view
   */
  getAllBalls(){
    this._gameService.getBalls().subscribe( (balls:Ball[]) =>{
      this.balls = balls;
    })
  }

  /**
   * Send the selected ball object to the child component
   * @param {Ball} ball
   */
  selectBall( ball:Ball ){
    this.ballEvent.emit(ball);
  }

}
