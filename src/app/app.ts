import { Component, signal } from '@angular/core';
import { NavbarC } from "./components/navbar-c/navbar-c";
import { DownloadCvC } from "./shared/components/download-cv-c/download-cv-c";
import { ExternalLinkC } from "./sections/welcome/components/external-link-c/external-link-c";

@Component({
  selector: 'app-root',
  imports: [NavbarC, DownloadCvC, ExternalLinkC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
