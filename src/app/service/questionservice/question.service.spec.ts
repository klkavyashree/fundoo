import { TestBed } from '@angular/core/testing';

import { QuestionService } from './question.service';
import { HttpClientModule } from '@angular/common/http';

describe('QuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    expect(service).toBeTruthy();
  });
});
