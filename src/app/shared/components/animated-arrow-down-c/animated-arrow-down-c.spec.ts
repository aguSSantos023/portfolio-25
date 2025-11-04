import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedArrowDownC } from './animated-arrow-down-c';

describe('AnimatedArrowDownC', () => {
  let component: AnimatedArrowDownC;
  let fixture: ComponentFixture<AnimatedArrowDownC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedArrowDownC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedArrowDownC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
