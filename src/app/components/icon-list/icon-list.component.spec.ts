import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconListComponent } from './icon-list.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LabelsearchPipe } from '../../pipe/label/labelsearch.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { FroalaViewModule, FroalaEditorModule } from 'angular-froala-wysiwyg';
import { RatingComponent } from '../rating/rating.component';
import { BarRatingModule } from 'ngx-bar-rating';

describe('IconListComponent', () => {
  let component: IconListComponent;
  let fixture: ComponentFixture<IconListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconListComponent, LabelsearchPipe, AskQuestionComponent,RatingComponent],
      imports: [
        MatIconModule, FlexLayoutModule, MatMenuModule, FormsModule, BrowserModule, HttpClientModule, MatDatepickerModule,
        MatTooltipModule, MatCheckboxModule, MatFormFieldModule, MatListModule,
        MatInputModule, RouterModule, RouterTestingModule, MatSnackBarModule,
        MatNativeDateModule, FroalaEditorModule, FroalaViewModule,BarRatingModule

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
