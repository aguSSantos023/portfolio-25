import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCvC } from './download-cv-c';

describe('DownloadCvC', () => {
  let component: DownloadCvC;
  let fixture: ComponentFixture<DownloadCvC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadCvC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadCvC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
