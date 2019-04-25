import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailsDialogComponent } from './cart-details-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterTestingModule } from '@angular/router/testing';

describe('CartDetailsDialogComponent', () => {
  let component: CartDetailsDialogComponent;
  let fixture: ComponentFixture<CartDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartDetailsDialogComponent],
      imports: [HttpClientModule, MatDividerModule, MatInputModule,MatSnackBarModule,MatDialogModule,MatToolbarModule,MatTabsModule,
        RouterTestingModule
      ], 
      providers: [{ provide: MatDialogRef, useValue: {} }
        , { provide: MAT_DIALOG_DATA, useValue: [] }]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CartDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
