import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExperienceCompany } from './card-experience-company';

describe('CardExperienceCompany', () => {
  let component: CardExperienceCompany;
  let fixture: ComponentFixture<CardExperienceCompany>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardExperienceCompany]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExperienceCompany);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
