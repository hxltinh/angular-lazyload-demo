import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule }    from '@angular/http';

import { HeroComponent } from "./hero.component";

import { HeroRoutingModule } from "./hero-routing.module";

import { HeroService } from "./hero.service";

@NgModule({
    imports: [ HeroRoutingModule, CommonModule, HttpModule ],
    declarations: [ HeroComponent ],
    providers: [ HeroService ]
})
export class HeroModule { }