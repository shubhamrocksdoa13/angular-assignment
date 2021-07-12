import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTwoComponent } from './answer-two.component';

describe('AnswerTwoComponent', () => {
  let component: AnswerTwoComponent;
  let fixture: ComponentFixture<AnswerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
