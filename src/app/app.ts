import { Component, signal } from '@angular/core';
import { NavbarC } from "./components/navbar-c/navbar-c";
import { DownloadCvC } from "./shared/components/download-cv-c/download-cv-c";
import { ExternalLinkC } from "./sections/welcome/components/external-link-c/external-link-c";
import { SvgIconC } from "./shared/components/svg-icon-c/svg-icon-c";
import { IconLink, IconName } from './shared/interface/icons';


@Component({
  selector: 'app-root',
  imports: [NavbarC, DownloadCvC, ExternalLinkC, SvgIconC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

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

}
