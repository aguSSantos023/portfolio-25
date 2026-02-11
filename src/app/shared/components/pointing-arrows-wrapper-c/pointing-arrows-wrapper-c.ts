// (Recuerda añadir AfterViewInit, ElementRef, signal)
import { Component, signal, AfterViewInit, ElementRef } from '@angular/core';
import { ArrowPointer } from './pointing-arrows-wrapper-interface';



@Component({
  selector: 'app-pointing-arrows-wrapper-c',
  imports: [],
  templateUrl: './pointing-arrows-wrapper-c.html',
  styleUrl: './pointing-arrows-wrapper-c.css',
})
export class PointingArrowsWrapperC implements AfterViewInit {
  arrows = signal<ArrowPointer[]>([]);

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {

    const contentEl = this.el.nativeElement.querySelector('.content');

    if (contentEl) {
      const resizeObserver = new ResizeObserver(() => {
        this.generateArrows(contentEl);
      });

      resizeObserver.observe(contentEl);
    }
  }

  private generateArrows(contentEl: Element): void {
    const newArrows: ArrowPointer[] = [];
    const rect = contentEl.getBoundingClientRect();


    const remSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const arrowContainerWidth = 0.5 * remSize;



    const slotSize = arrowContainerWidth;

    const getRandomRotation = (base: number) => base + (Math.random() * 45 - 23); // +/- 45 degrees
    const getRandomDelay = () => Math.random() * 1.8; // Random delay

    const hCount = Math.floor(rect.width / slotSize);
    const vCount = Math.floor(rect.height / slotSize);

    const hStepPercent = 100 / hCount;
    const vStepPercent = 100 / vCount;

    // Upper Left Corner
    newArrows.push({
      top: '0',
      left: '0',
      transform: 'translate(-50%, -50%)',
      rotation: getRandomRotation(135),
      delay: getRandomDelay(),
    });

    // Upper Right Corner
    newArrows.push({
      top: '0',
      right: '0',
      transform: 'translate(50%, -50%)',
      rotation: getRandomRotation(225),
      delay: getRandomDelay(),
    });

    // Bottom Right Corner
    newArrows.push({
      bottom: '0',
      right: '0',
      transform: 'translate(50%, 50%)',
      rotation: getRandomRotation(315),
      delay: getRandomDelay(),
    });

    // Bottom Left Corner
    newArrows.push({
      bottom: '0',
      left: '0',
      transform: 'translate(-50%, 50%)',
      rotation: getRandomRotation(45),
      delay: getRandomDelay(),
    });

    // Generate UP arrows
    for (let i = 0; i < hCount; i++) {
      newArrows.push({
        left: `${i * hStepPercent + hStepPercent / 2}%`,
        top: '0',
        transform: 'translateX(-50%) translateY(-50%)',
        rotation: getRandomRotation(180),
        delay: getRandomDelay(),
      });
    }

    // Generate DOWN arrows
    for (let i = 0; i < hCount; i++) {
      newArrows.push({
        left: `${i * hStepPercent + hStepPercent / 2}%`,
        bottom: '0',
        transform: 'translateX(-50%) translateY(50%)',
        rotation: getRandomRotation(0),
        delay: getRandomDelay(),
      });
    }

    // Generate LEFT arrows
    for (let i = 0; i < vCount; i++) {
      newArrows.push({
        top: `${i * vStepPercent + vStepPercent / 2}%`,
        left: '0',
        transform: 'translateY(-50%) translateX(-50%)',
        rotation: getRandomRotation(90),
        delay: getRandomDelay(),
      });
    }

    // Generate RIGHT arrows
    for (let i = 0; i < vCount; i++) {
      newArrows.push({
        top: `${i * vStepPercent + vStepPercent / 2}%`,
        right: '0',
        transform: 'translateY(-50%) translateX(50%)',
        rotation: getRandomRotation(270),
        delay: getRandomDelay(),
      });
    }

    this.arrows.set(newArrows);
  }
}
