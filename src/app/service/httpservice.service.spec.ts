import { TestBed } from '@angular/core/testing';

import { HttpserviceService } from './httpservice.service';
import { HttpClientModule } from '@angular/common/http';

describe('HttpserviceService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: HttpserviceService = TestBed.get(HttpserviceService);
    expect(service).toBeTruthy();
  });
});
