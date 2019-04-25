import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageServiceComponent } from './package-service.component';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

describe('PackageServiceComponent', () => {
  let component: PackageServiceComponent;
  let fixture: ComponentFixture<PackageServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageServiceComponent ],
      imports:[ MatDividerModule, FormsModule, MatToolbarModule, MatTabsModule, HttpClientModule, MatInputModule,MatSnackBarModule, RouterTestingModule,
        RouterModule,MatDialogModule],
        providers: [{ provide: MatDialogRef, useValue: {} }
          , { provide: MAT_DIALOG_DATA, useValue: [] }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
