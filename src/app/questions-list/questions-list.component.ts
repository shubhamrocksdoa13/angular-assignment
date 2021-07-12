import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  allQuestions = [
    {
      id: 1,
      title: 'Q1.',
      content: "Create a table N*N cells , each cell in the table sizes of 30px*30px. Now, I'll randomly hover the mouse across the table. The hoverd cells should be colored RED (i.e it becomes active), and after 500ms the color should be replaced back to white (i.e cell becomes inactive). Throughout the process, when the table reaches X UNIQUE active cells on screen at that moment. You should give an alert(’END’). Inputs : N = 10, X = 50. Read these inputs from the User Interface and dynamically generate the table. Give a reset button to restart the game, which should again ask both of the inputs."
    },
    {
      id: 2,
      title: 'Q2.',
      content: "Create a canvas, the script should draw a rectangle box itself into the canvas in an animated way. Inside a black canvas, draw a rectangle."
    },
    {
      id: 3,
      title: 'Q3.',
      content: "[1,2,4,5,7,1,3,4,1,2,8,1,4] move all the ‘1’ to the right end of the array in js. Write an optimized solution. o/p: [2,4, 5,7,3,4,2,8, 4, 1, 1, 1, 1] other elements order should not change. Solve it without using an extra array. Write your algorithm. Don't use built-in functions."
    },
    {
      id: 4,
      title: 'Q4.',
      content: "Write a html code to create this pair of eyes with a minimal number of elements. Good if you solve it with only 2 elements (max 1 element per eye only). Note: Don’t use <svg>, <canvas> or javascript."
    }
  ]
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  answerClicked(eachQuestion: any){
    console.log(eachQuestion)
    this.router.navigate([`/answers/${eachQuestion.id}`]);
  }
}
