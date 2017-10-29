import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/lazy">Lazy</a>
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  <a routerLink="/blog/2017/06/13/angular-4-hello-world-with-quickstart">Angular 4 Hello World Quickstart</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
