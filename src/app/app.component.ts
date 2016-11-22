import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `    
    <nav>
      <a routerLink="contact" routerLinkActive="active">Contact (lazy load)</a> &&
      <a routerLink="crisis"  routerLinkActive="active">Crisis Center (lazy load)</a>      
    </nav>
    <router-outlet></router-outlet>
  `
})
export default class AppComponent {
  subtitle = "(Final)";
}
