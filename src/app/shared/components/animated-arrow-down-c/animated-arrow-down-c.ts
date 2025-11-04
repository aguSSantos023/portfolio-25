import { Component, HostListener, inject, input, signal } from '@angular/core';
import { ScreenSizeS } from '../../services/screen-size-s';

@Component({
  selector: 'app-animated-arrow-down-c',
  imports: [],
  templateUrl: './animated-arrow-down-c.html',
  styleUrl: './animated-arrow-down-c.css',
})
export class AnimatedArrowDownC {

  distance = input<number>(60);
  duration = input<number>(1.5);
  delay = input<number>(0);
  isAnimated = signal<boolean>(true);

  screenSizeS = inject(ScreenSizeS)

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (this.screenSizeS.isMobile()) {
      if (window.scrollY > 625) {
        this.isAnimated.set(false)
      } else {
        this.isAnimated.set(true);
      }
    } else {
      if (window.scrollY > 875) {
        this.isAnimated.set(false)
      } else {
        this.isAnimated.set(true);
      }
    }

  }


  get styles() {
    const shaftOriginalLength = 30;
    const stretchFactor = 1 + (this.distance() / shaftOriginalLength);

    return {
      '--arrow-distance': `${this.distance()}px`,
      '--arrow-duration': `${this.duration()}s`,
      '--arrow-delay': `${this.delay()}s`,
      '--arrow-stretch': stretchFactor.toString(),
    };
  }
}
