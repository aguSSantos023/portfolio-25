import { UpperCasePipe } from '@angular/common';
import { Component, input, OnInit, signal } from '@angular/core';
import { SvgElement } from './svg-element-interface';


type ExternalLinkType = 'linkedin' | 'github'


@Component({
  selector: 'app-external-link-c',
  imports: [UpperCasePipe],
  templateUrl: './external-link-c.html',
  styleUrl: './external-link-c.css',
})
export class ExternalLinkC implements OnInit {
  type = input.required<ExternalLinkType>()

  private readonly SVG_SIZE: number = 24;
  private readonly MIN_DISTANCE: number = this.SVG_SIZE * 0.6;  // Minimum distance for 55% overlap
  private readonly BUTTON_WIDTH: number = 150;
  private readonly BUTTON_HEIGHT: number = 40;

  svgs = signal<SvgElement[]>([]);



  ngOnInit(): void {

    this.generateSvgs()

  }



  /**
   * Calculates the distance between two points (centers of the SVGs)
   */
  private calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  /**
   * Checks if a new position (x, y) overlaps any existing SVG
   */
  private isOverlapping(x: number, y: number): boolean {

    for (const svg of this.svgs()) {

      const distance = this.calculateDistance(x, y, svg.x, svg.y);

      // Compare the distance between the centers. If less than MIN_DISTANCE, flap.
      if (distance < this.MIN_DISTANCE) return true;

    }

    return false;
  }

  /**
   * Generate random positions of the SVGs
   */
  private generateSvgs(): void {

    const maxAttempts = 100; // Limit to avoid infinite loops

    let attempts = 0;
    let svgCount = 0;

    // Valid range of positions (from the edge of the SVG to the end of the button minus the edge)
    const maxX = this.BUTTON_WIDTH;
    const maxY = this.BUTTON_HEIGHT;

    // As long as there are attempts
    while (attempts < maxAttempts) {

      // Generate random coordinates. The center of the SVG can go from 0 to WIDTH/HEIGHT.
      // This allows the edges to remain outside the button.
      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      if (!this.isOverlapping(x, y)) {

        // Generate random rotation between -90 and +90 degrees
        const rotation = Math.floor(Math.random() * 181) - 90;

        this.svgs.update( svgs => [...svgs, {
          id: svgCount++,
          x: x,
          y: y,
          rotation: rotation,
        }])


        attempts = 0; // Reset attempts when finding a place
      } else {

        attempts++; // Increase attempts

      }
    }
  }
}
