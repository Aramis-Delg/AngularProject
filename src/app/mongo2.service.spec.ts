import { TestBed, inject } from '@angular/core/testing';

import { Mongo2Service } from './mongo2.service';

describe('Mongo2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Mongo2Service]
    });
  });

  it('should be created', inject([Mongo2Service], (service: Mongo2Service) => {
    expect(service).toBeTruthy();
  }));
});
