import { Component, EventEmitter } from '@angular/core';
import { Ball } from 'src/app/models/game.interface';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html'
})
export class BallSelectorComponent {

  ballEvent: EventEmitter<Ball> = new EventEmitter<Ball>();
  balls:Ball[] = [];
  accumulated:number = 0;

  constructor(
    private _gameService:GameService,
    private _userService:UserService
  ) { 
    this.getAllBalls();
    this.getUser();
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

  /**
   * The @Output event is captured for the accumulated value of the user
   * @param {number} event
   */
  accumulatedUser( event:number ){
     this.accumulated = event;
  }

  /**
   * Load the data of the user who currently has a token saved in the storage
   */
  getUser(){
    this._userService.getUser(localStorage.getItem('token')!).subscribe( (user:User[])=>{
      this.accumulated = (user[0]) ? user[0].accumulatedValue : 0;
    });
  }

}
