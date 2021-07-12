import { Component, OnInit } from '@angular/core';
import { table } from 'console';

@Component({
  selector: 'app-answer-one',
  templateUrl: './answer-one.component.html',
  styleUrls: ['./answer-one.component.scss']
})
export class AnswerOneComponent implements OnInit {
  tableGrid: any;
  inputLimit: any;
  allTableBlocks:any = []
  checkDoubleArray:any = []
  removeElement: any;

  constructor() { }

  ngOnInit(): void {
  }

  submitInput(){
    console.log(this.tableGrid)
    console.log(this.inputLimit)
    this.allTableBlocks = []
    let data = []
    for(let i=0; i<this.tableGrid; i++){
      for(let j=0; j<this.tableGrid; j++){
        data.push(j)
      }
      this.allTableBlocks.push(data)
      data = []
      console.log(this.allTableBlocks)
    }
    console.log(this.allTableBlocks[3][8])
  }

  mouseEnterColumn(i: any, j: any){
    let found = false;
    this.checkDoubleArray.forEach((el:any) => {
      if(el.x === i && el.y === j){
        found = true
      }
    });
    console.log(found)
    if(!found){
      this.checkDoubleArray.push(
        {
          x: i,
          y: j,
        }
      )
    }
    if(this.checkDoubleArray.length === 1){
      this.callIntervalFn()
    }
    if(this.checkDoubleArray.length >= this.inputLimit){
      alert('END')
    }
  }

  callIntervalFn(){
    this.removeElement = setInterval(() => {
      this.checkDoubleArray.shift()
      console.log(this.checkDoubleArray)
      console.log('Working')
      if(this.checkDoubleArray.length === 0){
        clearInterval(this.removeElement)
      }
    }, 500)
  }

  check(x:any, y:any){
    return this.checkDoubleArray.some((item:any) => {
      return item.x === x && item.y === y
    })
  }

}
