import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailsDialogComponent } from './cart-details-dialog.component';

describe('CartDetailsDialogComponent', () => {
  let component: CartDetailsDialogComponent;
  let fixture: ComponentFixture<CartDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDetailsDialogComponent ]
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
