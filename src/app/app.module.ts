import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import AppComponent from "./app.component";

import UserService from "../services/user.service";

import AppRoutingModule from "./app-routing.module";

@NgModule({
  imports: [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { };
