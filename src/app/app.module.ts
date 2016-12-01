import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import AppComponent from "./app.component";
import HightLightDirective from "./hightlight.directive";

import UserService from "../services/user.service";

import AppRoutingModule from "./app-routing.module";

@NgModule({
  imports: [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, HightLightDirective ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { };
