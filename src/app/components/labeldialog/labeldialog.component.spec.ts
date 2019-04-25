import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeldialogComponent } from './labeldialog.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


describe('LabeldialogComponent', () => {
  let component: LabeldialogComponent;
  let fixture: ComponentFixture<LabeldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeldialogComponent ],
      imports:[MatDialogModule, HttpClientModule,FormsModule,MatFormFieldModule],
      providers: [{ provide: MatDialogRef, useValue: {} }
        , { provide: MAT_DIALOG_DATA, useValue: [] }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
