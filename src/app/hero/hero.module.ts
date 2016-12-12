import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroItemComponent } from './hero-item/hero-item.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { HeroSearchService } from './hero-search/hero-search.service';

import { HeroService } from './hero.service';

import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
    imports: [ HeroRoutingModule, CommonModule, HttpModule ],
    declarations: [ HeroListComponent, HeroItemComponent, HeroSearchComponent],
    providers: [ HeroSearchService, HeroService ]
})
export class HeroModule { }