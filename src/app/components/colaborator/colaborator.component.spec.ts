import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboratorComponent } from './colaborator.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar'

describe('ColaboratorComponent', () => {
  let component: ColaboratorComponent;
  let fixture: ComponentFixture<ColaboratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboratorComponent ],
      imports:[MatDividerModule,MatMenuModule,MatInputModule,
        HttpClientModule,MatDialogModule,FormsModule,MatSnackBarModule
      ],
      providers: [{ provide: MatDialogRef, useValue: {} }
        , { provide: MAT_DIALOG_DATA, useValue: [] }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
