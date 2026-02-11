import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hover-arrow-wrapper-link-c',
  standalone: true,
  templateUrl: './hover-arrow-wrapper-link-c.html',
  styleUrls: ['./hover-arrow-wrapper-link-c.css'],
})
export class HoverArrowWrapperLinkC {
  distance = input<number>(60);
  duration = input<number>(1.5);
  delay = input<number>(0);


  get styles() {
    const shaftOriginalLength =50;
    const stretchFactor = 1 + this.distance() / shaftOriginalLength;

    return {
      '--arrow-distance': `${this.distance()}px`,
      '--arrow-duration': `${this.duration()}s`,
      '--arrow-delay': `${this.delay()}s`,
      '--arrow-stretch': stretchFactor.toString(),
    };
  }



}
