import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStudyC } from './card-study-c';

describe('CardStudyC', () => {
  let component: CardStudyC;
  let fixture: ComponentFixture<CardStudyC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardStudyC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStudyC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
