import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-three',
  templateUrl: './answer-three.component.html',
  styleUrls: ['./answer-three.component.scss']
})
export class AnswerThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.shiftOneFn()
  }

  shiftOneFn(){
    let givenArr = [1,2,4,5,7,1,3,4,1,2,8,1,4]
    for(let i=0; i<givenArr.length; i++){
      if(givenArr[i] === 1){
        givenArr.splice(i, 1)
        givenArr.push(1)
        console.log(givenArr)
      }
    }
    console.log("Final Answer", givenArr)
  }



}
