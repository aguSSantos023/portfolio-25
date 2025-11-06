import { Component, inject, input } from '@angular/core';
import { CardExperince } from './card-experience-company-interface';
import { SvgIconC } from '../../../../shared/components/svg-icon-c/svg-icon-c';
import { HighlightPipe } from '../../../../shared/pipes/highlight-pipe';
import { ScreenSizeS } from '../../../../shared/services/screen-size-s';


@Component({
  selector: 'app-card-experience-company-c',
  imports: [SvgIconC, HighlightPipe],
  templateUrl: './card-experience-company-c.html',
  styleUrl: './card-experience-company-c.css',
})
export class CardExperienceCompanyC {

  companyData = input.required<CardExperince>()

  screenSizeS = inject(ScreenSizeS);

  get hasTwoColumns(): boolean {
    if (!this.screenSizeS.isMobile()) {

      return this.companyData().stack.length > 8;

    }else{

      return false

    }
  }
}
