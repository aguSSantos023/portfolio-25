import { Component, inject, input } from '@angular/core';
import { CardExperince } from './card-experience-company-interface';
import { SvgIconC } from "../../../shared/components/svg-icon-c/svg-icon-c";
import { ScreenSizeS } from '../../../shared/services/screen-size-s';
import { HighlightPipe } from '../../../shared/pipes/highlight-pipe';

@Component({
  selector: 'app-card-experience-company',
  imports: [SvgIconC, HighlightPipe],
  templateUrl: './card-experience-company.html',
  styleUrl: './card-experience-company.css',
})
export class CardExperienceCompany {

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
