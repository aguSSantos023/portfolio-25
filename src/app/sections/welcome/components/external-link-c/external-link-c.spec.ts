import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLinkC } from './external-link-c';

describe('ExternalLinkC', () => {
  let component: ExternalLinkC;
  let fixture: ComponentFixture<ExternalLinkC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalLinkC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalLinkC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
