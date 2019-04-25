import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecropComponent } from './imagecrop.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

describe('ImagecropComponent', () => {
  let component: ImagecropComponent;
  let fixture: ComponentFixture<ImagecropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagecropComponent ],
      imports:[ImageCropperModule,MatDialogModule,HttpClientModule
      ],
      providers: [{ provide: MatDialogRef, useValue: {} }
        , { provide: MAT_DIALOG_DATA, useValue: [] }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagecropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
