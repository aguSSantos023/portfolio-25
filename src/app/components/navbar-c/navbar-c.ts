import { Component, HostListener, signal } from '@angular/core';
import { Routes } from './routes-interface';
import { HoverArrowWrapperLinkC } from "../../shared/components/hover-arrow-wrapper-link-c/hover-arrow-wrapper-link-c";

@Component({
  selector: 'app-navbar-c',
  imports: [HoverArrowWrapperLinkC],
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

  scrolled = signal<boolean>(false)


  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (window.scrollY > 0) {
      this.scrolled.set(true)
    } else {
      this.scrolled.set(false);
    }
  }

}
