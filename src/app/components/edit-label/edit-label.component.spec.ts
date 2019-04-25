import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabelComponent } from './edit-label.component';
import { DisplayComponentComponent } from '../display-component/display-component.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { IconListComponent } from '../icon-list/icon-list.component';
import { MatDividerModule, MatCardModule, MatTooltipModule, MatListModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { SearchPipe } from '../../pipe/search.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { LabelsearchPipe } from '../../pipe/label/labelsearch.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditLabelComponent', () => {
  let component: EditLabelComponent;
  let fixture: ComponentFixture<EditLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLabelComponent,DisplayComponentComponent,IconListComponent,SearchPipe,LabelsearchPipe ],
      imports:[ MatMenuModule,MatIconModule,MatChipsModule,MatDividerModule,MatCardModule,MatTooltipModule,MatListModule,
        MatFormFieldModule,MatDatepickerModule,FormsModule,MatCheckboxModule,HttpClientModule,RouterModule,RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
