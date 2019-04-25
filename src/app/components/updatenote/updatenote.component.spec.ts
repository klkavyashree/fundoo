import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenoteComponent } from './updatenote.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BarRatingModule } from "ngx-bar-rating";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { RouterTestingModule } from '@angular/router/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { IconListComponent } from '../icon-list/icon-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LabelsearchPipe } from '../../pipe/label/labelsearch.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';


describe('UpdatenoteComponent', () => {
  let component: UpdatenoteComponent;
  let fixture: ComponentFixture<UpdatenoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatenoteComponent, IconListComponent, LabelsearchPipe],
      imports: [
        FlexLayoutModule, FormsModule, BrowserAnimationsModule, HttpClientModule, FroalaEditorModule, FroalaViewModule, BarRatingModule,
        BrowserModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, RouterModule,
        MatMenuModule, MatSnackBarModule, RouterTestingModule, MatDividerModule, MatChipsModule, MatTooltipModule,
        MatListModule, MatCheckboxModule, MatDialogModule, MatDatepickerModule, CommonModule
      ],
      providers: [{ provide: MatDialogRef, useValue: {} }
        , { provide: MAT_DIALOG_DATA, useValue: [] }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
