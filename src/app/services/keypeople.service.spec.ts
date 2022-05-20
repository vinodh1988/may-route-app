import { TestBed } from '@angular/core/testing';

import { KeypeopleService } from './keypeople.service';

describe('KeypeopleService', () => {
  let service: KeypeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeypeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
