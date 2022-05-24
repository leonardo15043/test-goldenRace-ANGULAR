import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css']
})
export class BallSelectorComponent implements OnInit {

  ballEvent: EventEmitter<Object> = new EventEmitter<Object>();

  balls:any = [
    { id:1,value:1,color:'#ff4318'},
    { id:2,value:2,color:'#ffe4ab'},
    { id:3,value:3,color:'#4c955d'},
    { id:4,value:4,color:'#e1c0dd'},
    { id:5,value:5,color:'#f3c465'},
    { id:6,value:6,color:'#9ce3c4'},
    { id:7,value:7,color:'#9cb7e3'},
    { id:8,value:8,color:'#e91e63'},
    { id:9,value:9,color:'#9fe91e'},
    { id:10,value:10,color:'#898f80'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectBall( ball:Object ){
    this.ballEvent.emit(ball);
  }

}
