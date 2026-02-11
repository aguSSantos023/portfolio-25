import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardExperienceCompanyC } from './card-experience-company-c';


describe('CardExperienceCompany', () => {
  let component: CardExperienceCompanyC;
  let fixture: ComponentFixture<CardExperienceCompanyC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardExperienceCompanyC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExperienceCompanyC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
