import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { DisplayComponentComponent } from '../display-component/display-component.component';
import { MatIconModule, MatTooltipModule, MatMenuModule, MatDividerModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatListModule, MatDatepickerModule, MatCheckboxModule } from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import { SearchPipe } from '../../pipe/search.pipe';
import { IconListComponent } from '../icon-list/icon-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BarRatingModule } from 'ngx-bar-rating';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LabelsearchPipe } from '../../pipe/label/labelsearch.pipe';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent,DisplayComponentComponent,SearchPipe,IconListComponent,LabelsearchPipe ],
      imports:[
        MatIconModule,
        MatChipsModule,MatMenuModule,MatTooltipModule,MatCardModule,MatDividerModule,
        FlexLayoutModule,
        FormsModule,
        BrowserAnimationsModule ,
        HttpClientModule,
        FroalaEditorModule, FroalaViewModule,BarRatingModule,
        BrowserModule,ReactiveFormsModule, MatFormFieldModule,MatInputModule,RouterModule
        ,MatSnackBarModule,RouterTestingModule,MatListModule,MatCheckboxModule,MatDatepickerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
