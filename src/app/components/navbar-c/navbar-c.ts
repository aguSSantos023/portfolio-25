import { Component, signal } from '@angular/core';
import { Routes } from './routes-interface';

@Component({
  selector: 'app-navbar-c',
  imports: [],
  templateUrl: './navbar-c.html',
  styleUrl: './navbar-c.css',
})
export class NavbarC {

  routes = signal<Routes[]>([
    {
      code: 'experience',
      name: 'EXPERIENCIA'
    },
    {
      code: 'stack',
      name: 'TECNOLOGÍAS'
    },
    {
      code: 'aboutMy',
      name: 'SOBRE MÍ'
    },
  ])

}
