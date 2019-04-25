import { TestBed } from '@angular/core/testing';

import { NoteService } from './note.service';
import { HttpClientModule } from '@angular/common/http';

describe('NoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: NoteService = TestBed.get(NoteService);
    expect(service).toBeTruthy();
  });
});
