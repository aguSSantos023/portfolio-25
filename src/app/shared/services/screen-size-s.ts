import { Injectable, signal } from '@angular/core';
import { debounceTime, fromEvent, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeS {
  // Define the mobile/desktop breakpoint (Tailwind's is 768px for 'md')
  private readonly MOBILE_BREAKPOINT = 768;


  isMobile = signal<boolean>(false);

  constructor() {
    this.setupResizeListener();
  }


  private setupResizeListener(): void {
    // Observable of the resize event
    fromEvent(window, 'resize')
      .pipe(
        // Delay the broadcast to avoid overloading the screen when moving the window.
        debounceTime(100),
        // Start the flow with the current size upon subscription
        startWith(null),
        // Map the event to the window width
        map(() => window.innerWidth)
      )
      .subscribe(width => {
        const isCurrentlyMobile = width < this.MOBILE_BREAKPOINT;
        this.isMobile.set(isCurrentlyMobile);
      });
  }

  getIsMobile(): boolean {
    return this.isMobile();
  }
}
