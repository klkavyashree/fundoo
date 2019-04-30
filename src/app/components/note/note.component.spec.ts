import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteComponent } from './note.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BarRatingModule } from "ngx-bar-rating";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDatepickerModule, MatCheckboxModule } from '@angular/material';
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
import { SearchPipe } from '../../pipe/search.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { LabelsearchPipe } from '../../pipe/label/labelsearch.pipe';
import { NoteService } from '../../service/noteservice/note.service';
describe('NoteComponent', () => {
  let component: NoteComponent;
  let service : NoteService;
  let fixture: ComponentFixture<NoteComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteComponent,IconListComponent, SearchPipe, LabelsearchPipe ],
      imports:[ FlexLayoutModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FroalaEditorModule, FroalaViewModule, BarRatingModule,
        BrowserModule, ReactiveFormsModule, MatFormFieldModule, MatCardModule, MatInputModule, MatIconModule, RouterModule,
        MatMenuModule, MatSnackBarModule, RouterTestingModule, MatDividerModule,
        MatIconModule, FlexLayoutModule, MatMenuModule, FormsModule, BrowserModule, HttpClientModule, MatDatepickerModule,
        MatChipsModule, MatTooltipModule, MatListModule, MatCheckboxModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should get note with the note details',()=>{
  const response=[
    {
      collaberator:[],
      collaborators:[],
      color:"#ffffff",
      createdDate:'2019-04-26T10:44:30.064Z',
      description:'hgfvghd',
      id:'67676767678678678678',
      imageUrl:'client/images/1555567665085img',
      isArchived:false,
      isDeleted:false,
      isPined:false,
      label:[],
      labelIdList:[],
      linkUrl:"",
      modifiedDate:"2019-04-26T10:44:30.064Z",
      noteCheckLists:[],
      noteLabels:[],
      questionAndAnswerNotes:[],
      reminder:[],
      title:"ghghghgh",
      user:{}
    }
  ]
})

});
