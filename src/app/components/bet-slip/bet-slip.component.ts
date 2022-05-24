import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tokenGenerator } from 'src/app/core/helpers/utilities';
import { Ball, ConfigurationGame, Game } from 'src/app/models/game.interface';
import { GameService } from 'src/app/services/game.service';
import { ControlGame } from '../../models/game.interface';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {

  @Input() refBallEvent!: EventEmitter<Ball>;
 
  private formBuilder: FormBuilder = new FormBuilder;
  public betForm!: FormGroup;

  public configGame!: ConfigurationGame;
  public controlGame = new Game();
  
  constructor(
    private _gameService:GameService,
    private _userService:UserService
  ) {
    this.configurationGame();
  }

  ngOnInit(): void {
    this.refBallEvent.subscribe(( ball:Ball ) => {
      this.controlGame.control.selectBall = ball;
      this.controlGame.control.startCountBet = false;
      this.controlGame.control.endBet = false;
      this.controlGame.control.isSubmit = false;
      this.setupForm();
      this.saveUser();
    });
  }

  private setupForm(){
    this.betForm = this.formBuilder.group({
      valueBet:['',[ Validators.required, Validators.min(this.configGame.minimumAmount), Validators.pattern(/^([0-9-.,])+$/)]]
    });
  }

  private configurationGame(){
    this._gameService.configurationGame().subscribe( ( game:ConfigurationGame )=>{
      this.configGame = game;
    });
  }

  /*
   * The counting of the balls begins the method "mousedown"
   */
  startBet(){
    this.controlGame.control.isSubmit = true;
    if(this.betForm.valid){
      this.controlGame.control.startCountBet = true;
      this._gameService.getBalls().subscribe( ( balls:Ball[] ) =>{
        this.controlGame.control.interval = setInterval( () =>{
          if(this.controlGame.control.count == balls.length) this.controlGame.control.count = 1;
          this.controlGame.control.count++;
          const ball = balls.filter( ball => ball.id == this.controlGame.control.count);
          this.controlGame.control.ballBet = ball[0];
         }, this.configGame.speedBall);
      }); 
    }
  }

  /*
   * Stop the time interval to stop counting the balls with the events "mouseup,mouseout"
   */
  stopBet(){
    clearInterval(this.controlGame.control.interval);
    if(this.controlGame.control.startCountBet) {
      this.controlGame.control.endBet = true;
      this.controlGame.control.state = false;
      this.saveBet();
    }
    if(this.controlGame.control.selectBall?.value == this.controlGame.control.count){
      this.controlGame.control.state = true;
    } 
    this._gameService.getBall( this.controlGame.control.count ).subscribe( ( ball:Ball ) =>{
      this.controlGame.control.ballResult = ball;
    })
  }

  /*
   * Reset the game values to start over
   */
  resetBet(){
    this.controlGame = new Game();
  }

  saveBet(){
    if(!this.controlGame.control.endBet) return;
    this._gameService.saveGame( this.controlGame.control ).subscribe(( game:ControlGame ) =>{
      console.log(game);
    });
  }

  saveUser(){
    const user = {
      creationDate: new Date(),
      token:tokenGenerator(30),
      accumulatedValue:0
    }
    if(!localStorage.getItem('token')){
      this._userService.saveUser(user).subscribe( (user:User)=>{
        localStorage.setItem('token',user.token);
      });
    }
  }

}
