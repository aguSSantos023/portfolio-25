import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointingArrowsWrapperC } from './pointing-arrows-wrapper-c';

describe('PointingArrowsWrapperC', () => {
  let component: PointingArrowsWrapperC;
  let fixture: ComponentFixture<PointingArrowsWrapperC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointingArrowsWrapperC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointingArrowsWrapperC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
