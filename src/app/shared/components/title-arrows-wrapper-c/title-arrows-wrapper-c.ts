import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-title-arrows-wrapper-c',
  imports: [],
  templateUrl: './title-arrows-wrapper-c.html',
  styleUrl: './title-arrows-wrapper-c.css',
})
export class TitleArrowsWrapperC {

  arrowCount = input< 2 | 3 >(2);
  duration = input<number>(1.5);

  distance = signal<number>(20);

  get arrowIndexes(): number[] {
    return Array(this.arrowCount()).fill(0).map((_, i) => i);
  }


  getArrowStyles(index: number): { [key: string]: string | number } {
    const totalArrows = this.arrowCount();
    let leftPosition: number;
    let topPosition: number = 0;
    let rotation: number = 0;

    const shaftOriginalLength:number = 30;
    let stretchFactor:number = 1 + (this.distance() / shaftOriginalLength);

    if (totalArrows === 2) {

      leftPosition = index === 0 ? 40 : 60;
      topPosition = 40;
      rotation = index === 0 ? 45 : -45;

    } else {

      if (index === 0) {
        leftPosition = 35;
        topPosition = 40;
        rotation = 45;

      } else if (index === 1) {
        leftPosition = 50;
        topPosition = 45;
        rotation = 0;

      } else {
        leftPosition = 65;
        topPosition = 40;
        rotation = -45;
      }

    }

    return {
      '--arrow-distance': `${this.distance()}px`,
      '--arrow-duration': `${this.duration()}s`,
      '--arrow-stretch': stretchFactor,
      'left': `${leftPosition}%`,
      'top': `${topPosition}px`,
      'transform': `translate(-50%, -50%) rotate(${rotation}deg)`
      ,
    };
  }
}
