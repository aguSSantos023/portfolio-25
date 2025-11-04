import { TestBed } from '@angular/core/testing';

import { ScreenSizeS } from './screen-size-s';

describe('ScreenSizeS', () => {
  let service: ScreenSizeS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenSizeS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
