import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerFourComponent } from './answer-four.component';

describe('AnswerFourComponent', () => {
  let component: AnswerFourComponent;
  let fixture: ComponentFixture<AnswerFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
