import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNoteComponent } from './main-note.component';
import { DisplayComponentComponent } from '../display-component/display-component.component';
import { NoteComponent } from '../note/note.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchPipe } from '../../pipe/search.pipe';
import { MatChipsModule, MatTooltipModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatDatepickerModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { IconListComponent } from '../icon-list/icon-list.component';
import { MatListModule } from '@angular/material/list';
import { LabelsearchPipe } from '../../pipe/label/labelsearch.pipe';
import { MatInputModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NoteService } from '../../service/noteservice/note.service';
import { of } from 'rxjs';

describe('MainNoteComponent', () => {
  let component: MainNoteComponent;
  let service: NoteService
  let fixture: ComponentFixture<MainNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainNoteComponent, NoteComponent, DisplayComponentComponent, SearchPipe, IconListComponent, LabelsearchPipe],
      imports: [MatIconModule,
        MatChipsModule,
        MatTooltipModule, ReactiveFormsModule,
        MatMenuModule,
        MatDividerModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        RouterTestingModule],
      providers: [NoteService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get note with the note details', () => {
    const response = [
      {
        collaberator: [],
        collaborators: [],
        color: "#ffffff",
        createdDate: '2019-04-26T10:44:30.064Z',
        description: 'hgfvghd',
        id: '67676767678678678678',
        imageUrl: 'client/images/1555567665085img',
        isArchived: false,
        isDeleted: false,
        isPined: false,
        label: [],
        labelIdList: [],
        linkUrl: "",
        modifiedDate: "2019-04-26T10:44:30.064Z",
        noteCheckLists: [],
        noteLabels: [],
        questionAndAnswerNotes: [],
        reminder: [],
        title: "ghghghgh",
        user: {
          addresses: [],
          createdDate: '2019-03-28T11:58:50.184Z',
          email: 'manushree@gmail.com',
          emailVerified: true,
          firstName: "manu",
          id: "5c9cb6faea53620040e865ed",
          imageUrl: "images/1555399203112blob",
          lastName: "shree",
          modifiedDate: "2019-03-28T11:58:50.184Z",
          role: "user",
          service: "advance",
          username: "manushree@gmail.com"
        },
        userId: "5c9cb6faea53620040e865ed"
      },
      {
        collaberator: [],
        collaborators: [],
        color: "#F48FB1",
        createdDate: '2019-04-25T07:48:08.296Z',
        description: 'dgd',
        id: '5cc1663814791a0040863527',
        imageUrl: 'images/1555567665085img',
        isArchived: false,
        isDeleted: false,
        isPined: false,
        label: [],
        labelIdList: [],
        linkUrl: "",
        modifiedDate: "2019-04-25T07:48:08.296Z",
        noteCheckLists: [],
        noteLabels: [],
        questionAndAnswerNotes: [],
        reminder: [],
        title: "dfgdfg",
        user: {
          addresses: [],
          createdDate: '2019-03-28T11:58:50.184Z',
          email: 'manushree@gmail.com',
          emailVerified: true,
          firstName: "manu",
          id: "5c9cb6faea53620040e865ed",
          imageUrl: "images/1555399203112blob",
          lastName: "shree",
          modifiedDate: "2019-03-28T11:58:50.184Z",
          role: "user",
          service: "advance",
          username: "manushree@gmail.com"
        },
        userId: "5c9cb6faea53620040e865ed"
      }



    ];
    let data
    spyOn(service, 'getNote').and.returnValue(of(response))

    service.getNote().subscribe(res => {
      data = res['data']['data'];
    });
    expect(data).toEqual(response);
  });
});
