import { Component, OnInit, signal } from '@angular/core';
import { NavbarC } from "./components/navbar-c/navbar-c";
import { DownloadCvC } from "./shared/components/download-cv-c/download-cv-c";
import { ExternalLinkC } from "./sections/welcome/components/external-link-c/external-link-c";
import { SvgIconC } from "./shared/components/svg-icon-c/svg-icon-c";
import { IconLink } from './shared/interface/icons';
import { AnimatedArrowDownC } from "./shared/components/animated-arrow-down-c/animated-arrow-down-c";
import { CardExperienceCompany } from "./sections/experience/card-experience-company/card-experience-company";
import { CardExperince } from './sections/experience/card-experience-company/card-experience-company-interface';
import { TitleArrowsWrapperC } from "./shared/components/title-arrows-wrapper-c/title-arrows-wrapper-c";


@Component({
  selector: 'app-root',
  imports: [NavbarC, DownloadCvC, ExternalLinkC, SvgIconC, AnimatedArrowDownC, CardExperienceCompany, TitleArrowsWrapperC],
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

  experienceCompanyData = signal<CardExperince[]>([
    {
      title: 'Desarrollador Full Stack + Nytelweb',
      dates: 'Mar 2025 - Jul 2025',
      data: [
        'Habilidades validadas en el stack (-{Laravel 12}-, -{Angular 19}-, -{MySQL}-) mediante proyectos iniciales para superar la evaluación técnica -{.}-',
        'Implementación de nuevas funcionalidades en productos existentes, trabajando en -{backend}- (PHP/Laravel) y -{frontend}- (Angular) -{.}-',
        'Desarrollo de componentes de interfaz con Angular, Tailwind CSS y PrimeNG -{.}-',
        'Liderazgo de un -{proyecto estratégico completo}-, gestionando desde la concepción hasta la implementación final -{.}-',
        'Gestión de -{requisitos del cliente}- para asegurar una implementación exitosa y alineada con objetivos -{.}-',
        'Colaboración con el equipo usando -{ClickUp}- (planificación) y -{Git}- (control de versiones y Code Reviews) -{.}-'
      ],
      stack: [
        'html',
        'css',
        'angular',
        'tailwind',
        'primeng',
        'php',
        'laravel',
        'mysql',
        'git',
        'github',
        'clickup',
        'xampp'
      ]
    },{
      title: 'Técnico Informático + Hilfsdienst Viena',
      dates: 'Mar 2023 -Jun 2023',
      data: [
        'Diagnóstico y resolución eficaz de incidencias complejas de -{hardware}- y -{software}- -{.}-',
        'Optimización del -{rendimiento}- y aseguramiento de la continuidad operativa de los sistemas -{.}-',
        'Gestión de la comunicación directa con clientes para -{entender problemas}- y traducir requisitos técnicos -{.}-',
        'Capacidad para garantizar la completa satisfacción del cliente con el servicio ofrecido -{.}-',
        'Realización de -{mantenimientos preventivos}- en equipos para minimizar averías y asegurar un rendimiento óptimo a largo plazo -{.}-'
      ],
      stack: [
        'laptop',
        'wrench',
        'cpu',
        'gears',
        'memory'
      ]
    }
  ])

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
