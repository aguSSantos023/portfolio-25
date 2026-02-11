import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleArrowsWrapperC } from './title-arrows-wrapper-c';

describe('TitleArrowsWrapperC', () => {
  let component: TitleArrowsWrapperC;
  let fixture: ComponentFixture<TitleArrowsWrapperC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleArrowsWrapperC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleArrowsWrapperC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
