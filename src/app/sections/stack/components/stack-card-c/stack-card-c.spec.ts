import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackCardC } from './stack-card-c';

describe('StackCardC', () => {
  let component: StackCardC;
  let fixture: ComponentFixture<StackCardC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackCardC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackCardC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
