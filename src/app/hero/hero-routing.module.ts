import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroItemComponent } from './hero-item/hero-item.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: HeroListComponent },
    { path: 'item/:id', component: HeroItemComponent },
    { path: 'search', component: HeroSearchComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroRoutingModule { }