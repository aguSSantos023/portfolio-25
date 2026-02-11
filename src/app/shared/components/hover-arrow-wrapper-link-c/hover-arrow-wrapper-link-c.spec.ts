import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverArrowWrapperLinkC } from './hover-arrow-wrapper-link-c';

describe('HoverArrowWrapperLinkC', () => {
  let component: HoverArrowWrapperLinkC;
  let fixture: ComponentFixture<HoverArrowWrapperLinkC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverArrowWrapperLinkC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverArrowWrapperLinkC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
