import { TestBed } from '@angular/core/testing';

import { CardsApiMockService } from './cards-api-mock.service';

describe('CardsApiMockService', () => {
  let service: CardsApiMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsApiMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
