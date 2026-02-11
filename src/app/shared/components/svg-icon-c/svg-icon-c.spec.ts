import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconC } from './svg-icon-c';

describe('SvgIconC', () => {
  let component: SvgIconC;
  let fixture: ComponentFixture<SvgIconC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgIconC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgIconC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
