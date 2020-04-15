import { TestBed } from '@angular/core/testing';

import { CardListStateService } from './card-list-state.service';

describe('CardListStateService', () => {
  let service: CardListStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardListStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
