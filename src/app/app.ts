import { Component, computed, inject, signal } from '@angular/core';
import { NavbarC } from "./components/navbar-c/navbar-c";
import { DownloadCvC } from "./shared/components/download-cv-c/download-cv-c";
import { ExternalLinkC } from "./sections/welcome/components/external-link-c/external-link-c";
import { SvgIconC } from "./shared/components/svg-icon-c/svg-icon-c";
import { IconLink } from './shared/interface/icons';
import { AnimatedArrowDownC } from "./shared/components/animated-arrow-down-c/animated-arrow-down-c";

import { TitleArrowsWrapperC } from "./shared/components/title-arrows-wrapper-c/title-arrows-wrapper-c";
import { ScreenSizeS } from './shared/services/screen-size-s';
import { CardExperienceCompanyC } from './sections/experience/components/card-experience-company-c/card-experience-company-c';
import { CardExperince } from './sections/experience/components/card-experience-company-c/card-experience-company-interface';
import { StackCardC } from "./sections/stack/components/stack-card-c/stack-card-c";
import { StackCard } from './sections/stack/components/stack-card-c/stack-card-interface';


@Component({
  selector: 'app-root',
  imports: [
    NavbarC,
    DownloadCvC,
    ExternalLinkC,
    SvgIconC,
    AnimatedArrowDownC,
    CardExperienceCompanyC,
    TitleArrowsWrapperC,
    StackCardC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  private screenSizeS = inject(ScreenSizeS);

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
      title: 'Técnico Informático + Hilfsdienst',
      dates: 'Mar 2023 -Jun 2023',
      data: [
        'Diagnóstico y resolución eficaz de incidencias complejas de -{hardware}- y -{software}- -{.}-',
        'Optimización del -{rendimiento}- y aseguramiento de la continuidad operativa de los sistemas -{.}-',
        'Gestión de la comunicación directa con clientes para -{entender problemas}- y traducir requisitos técnicos -{.}-',
        'Capacidad para garantizar la completa satisfacción del cliente con el servicio ofrecido -{.}-',
        'Realización de -{mantenimientos preventivos}- en equipos para minimizar averías y asegurar un rendimiento óptimo a largo plazo -{.}-'
      ],
      stack: [

        'cpu',
        'gears',
        'memory',
        'virtualbox',
        'debian',
        'linux'
      ]
    }
  ])


  stackData = signal<StackCard[]>([
    {
      title: 'frontend',
      nameIcons: [
        'html',
        'css',
        'js',
        'ts',
        'angular',
        'tailwind',
        'primeng',
        'jquery',
        'bootstrap',
        'ionic',
      ]
    },
    {
      title: 'backend',
      nameIcons: [
        'node',
        'express',
        'mysql',
        'php',
        'laravel',
        'codeigniter',
        'jwt',
        'json'

      ]
    },
    {
      title: 'aprendiendo',
      nameIcons: [
        'docker',
        'jest',
        'mongodb',
        'electron'
      ]
    },
    {
      title: 'herramientas',
      nameIcons: [
        'vscode',
        'git',
        'github',
        'xampp',
        'laragon',
        'postman',
        'clickup',
        'trello',
        'penpot',
      ]
    }
  ])




  iconSizeMultiplier = computed(() => {
    const isMobile = this.screenSizeS.isMobile();

    return !isMobile ? 1.4 : 1

  });







}
