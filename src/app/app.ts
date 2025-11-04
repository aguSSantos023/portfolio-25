import { Component, OnInit, signal } from '@angular/core';
import { NavbarC } from "./components/navbar-c/navbar-c";
import { DownloadCvC } from "./shared/components/download-cv-c/download-cv-c";
import { ExternalLinkC } from "./sections/welcome/components/external-link-c/external-link-c";
import { SvgIconC } from "./shared/components/svg-icon-c/svg-icon-c";
import { IconLink } from './shared/interface/icons';
import { AnimatedArrowDownC } from "./shared/components/animated-arrow-down-c/animated-arrow-down-c";


@Component({
  selector: 'app-root',
  imports: [NavbarC, DownloadCvC, ExternalLinkC, SvgIconC, AnimatedArrowDownC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  preferredStack = signal<IconLink[]>([
    {
      name: 'html',
      link: 'https://developer.mozilla.org/es/docs/Web/HTML'
    },
    {
      name: 'css',
      link: 'https://developer.mozilla.org/es/docs/Web/CSS'
    },
    {
      name: 'tailwind',
      link: 'https://tailwindcss.com/'
    },
    {
      name: 'angular',
      link: 'https://angular.dev/'
    },
    {
      name: 'node',
      link: 'https://nodejs.org/es'
    },
    {
      name: 'express',
      link: 'https://expressjs.com/es/'
    },
    {
      name: 'mysql',
      link: 'https://www.mysql.com/'
    }
  ])

  iconSizeMultiplier = signal<number>(1)

  ngOnInit(): void {
    this.updateIconsDimensions()
    window.addEventListener('resize', () => this.handleResize());
  }


  private updateIconsDimensions(): void {
    const isMdOrLarger = window.innerWidth >= 768; // md breakpoint of Tailwind

    if (isMdOrLarger) {

      this.iconSizeMultiplier.update(value => value = 1.4)

    } else {

      this.iconSizeMultiplier.update(value => value = 1)

    }

  }



  private handleResize(): void {
    this.updateIconsDimensions();

  }


}
