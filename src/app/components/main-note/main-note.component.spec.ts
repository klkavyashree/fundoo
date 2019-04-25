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

describe('MainNoteComponent', () => {
  let component: MainNoteComponent;
  let fixture: ComponentFixture<MainNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainNoteComponent, NoteComponent, DisplayComponentComponent, SearchPipe, IconListComponent, LabelsearchPipe],
      imports: [MatIconModule,
        MatChipsModule,
        MatTooltipModule,ReactiveFormsModule,
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
        RouterTestingModule]
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
});
