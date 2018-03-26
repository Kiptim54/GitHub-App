import { TestBed, inject } from '@angular/core/testing';

import { UsernameRequestService } from './username-request.service';

describe('UsernameRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsernameRequestService]
    });
  });

  it('should be created', inject([UsernameRequestService], (service: UsernameRequestService) => {
    expect(service).toBeTruthy();
  }));
});
