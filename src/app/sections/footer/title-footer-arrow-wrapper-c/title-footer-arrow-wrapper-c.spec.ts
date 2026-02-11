import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFooterArrowWrapperC } from './title-footer-arrow-wrapper-c';

describe('TitleFooterArrowWrapperC', () => {
  let component: TitleFooterArrowWrapperC;
  let fixture: ComponentFixture<TitleFooterArrowWrapperC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleFooterArrowWrapperC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleFooterArrowWrapperC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
