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
import { HighlightPipe } from './shared/pipes/highlight-pipe';
import { CardStudy } from './sections/about-me/card-study-c/card-study-interface';
import { CardStudyC } from './sections/about-me/card-study-c/card-study-c';
import { TitleFooterArrowWrapperC } from "./sections/footer/title-footer-arrow-wrapper-c/title-footer-arrow-wrapper-c";


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
    StackCardC,
    HighlightPipe,
    CardStudyC,
    TitleFooterArrowWrapperC
],
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
      dates: 'Mar 2025 - Jun 2025',
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
        'ionic',
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


  aboutMeData = signal<string[][]>([
    [
      `-{Desarrollador Web Full Stack}- con una sólida
      base académica de dos años en Desarrollo de
      Aplicaciones Web y -{tres meses de experiencia}-
      práctica en entorno empresarial. Mi especialización
       principal se centra en el ecosistema -{Angular}-
       (Frontend) y -{Express.js}- (Backend), lo que me
       permite construir soluciones de manera integral-{.}-`,

      `Mi principal fortaleza reside en la -{estabilidad}-
      y -{constancia}-. Poseo una visión estratégica que me
      permite enfocarme en la solución y entender cómo
      encajan todas las piezas del puzle tecnológico
      para maximizar la -{eficiencia}- y el rendimiento
      del código-{.}-`
    ],
    [
      `Cuento con dominio de bases de datos -{MySQL}- y
      experiencia con frameworks como -{Tailwind CSS}-,
      -{Ionic}- y librerías de componentes como -{PrimeNG}-.
      Pongo un gran énfasis en el detalle, buscando
      siempre el -{"pixel perfect"}- para asegurar que
      cada interfaz mantenga su armonía visual y
      funcional-{.}-`,

      `-{Mi objetivo}- es unirme a un equipo donde pueda
      aplicar todo el conocimiento adquirido. -{Me entusiasma}-
      contribuir a la creación de soluciones -{robustas}-
      y -{eficientes}-, aprovechando mi versatilidad
      Full Stack. Busco un entorno -{colaborativo}- y
      -{desafiante}- que me impulse a evolucionar y
      adoptar nuevas prácticas de la industria-{.}-`
    ]
  ])


  studiesData = signal<CardStudy[]>([
    {
      title: 'Desarrollador De Aplicaciones Web',
      level: 'Grado Superior',
      date: '2023 - 2025',
      text: [
        `Realicé el Grado Superior en Desarrollo de Aplicaciones Web (-{DAW}-) en el I.E.S.
        -{Albor Croft}- de Jerez de la Frontera (-{Cádiz}-), cubriendo el periodo de 2023 a 2025.
        Esta formación me ha permitido adquirir un perfil de desarrollador
        -{Full Stack}- con un fuerte enfoque en la aplicación práctica de tecnologías actuales -{.}-`,

        `El programa de estudios se centró en módulos clave, proporcionándome un dominio en
        el desarrollo de aplicaciones web dinámicas y modernas. En la parte -{Front-End}-,
        adquirí experiencia avanzada con -{Angular 19}-, complementada con habilidades sólidas
        en HTML, CSS, JavaScript y la implementación de frameworks de diseño como -{Tailwind}-
        y -{Bootstrap}-. Para el -{Back-End}-, trabajé extensivamente con -{PHP}-, utilizando los
        frameworks de desarrollo -{Laravel}- y -{CodeIgniter}-, con manejo experto de -{MySQL}- para
        la gestión y consulta de bases de datos -{.}-`,

        `Mi logro más destacado fue el Trabajo Fin de Grado (-{TFG}-), un proyecto individual
        de tres meses de duración. En él, integré Angular 19 para la interfaz, PHP con
        Laravel para el lado del servidor y MySQL para la persistencia de datos. Este
        trabajo no solo demostró mi capacidad para desarrollar una -{aplicación completa}-
        y -{robusta}-, sino que fue reconocido por el profesorado con la maxima calificación.
        A nivel metodológico, apliqué -{SCRUM}- para organizarlas tareas individualmente y utilicé -{Git Flow}-
        para el control de versiones, asegurando un desarrollo estructurado y eficiente.`
      ]
    },
    {
      title: 'Técnico En Telecomunicaciones',
      level: 'Grado Medio',
      date: '2021 - 2023',
      text: [
        `Durante el Grado Medio, desarrollé una sólida base en el -{diagnóstico estructurado}- y
        la -{resolución de problemas}- complejos, habilidades fundamentales en el desarrollo de
        software. Los módulos de Sistemas Microinformáticos se enfocaron en la detección y
        corrección de fallos, aplicando una -{metodología lógica}- para aislar la causa raíz,
        como la verificación de señales. Esta experiencia culminó en una capacidad demostrada para gestionar
        un alto volumen de tareas de forma eficaz, lo que evidencia -{eficiencia}- y -{orientación a resultados}- -{.}-`,

        `A nivel de ejecución y planificación, el trabajo en proyectos como las -{instalaciones eléctricas
        y domóticas}- fue crucial para adquirir competencias en la -{gestión de la estructura}- y la -{coordinación de equipos}-.
        La elaboración de planos detallados de una instalación residencial, desde el diseño de
        circuitos hasta la distribución de componentes, requirió una -{planificación}- exhaustiva
        y el -{seguimiento riguroso}- de especificaciones técnicas.`
      ]
    }
  ])





  iconSizeMultiplier = computed(() => {
    const isMobile = this.screenSizeS.isMobile();

    return !isMobile ? 1.4 : 1

  });







}
