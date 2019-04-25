import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuestionComponent } from './ask-question.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BarRatingModule } from 'ngx-bar-rating';
import { MatDividerModule } from '@angular/material';
import { RatingComponent } from '../rating/rating.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('AskQuestionComponent', () => {
  let component: AskQuestionComponent;
  let fixture: ComponentFixture<AskQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AskQuestionComponent, RatingComponent],
      imports: [
        FroalaEditorModule, FroalaViewModule,
        BarRatingModule, MatDividerModule,
        MatInputModule, FormsModule, HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
