import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Router }            from '@angular/router';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/observable/of';

import { HeroInterface } from '../hero.interface';
import { HeroService } from '../hero.service';

@Component({
    selector: 'hero-search',
    template: require('./hero-list.tpl.html')
})
export class HeroListComponent {
    heroes: Observable<HeroInterface[]>;
    selectedHero: HeroInterface;

    constructor(private heroService: HeroService, private router: Router) { }

    ngOnInit(): void {
        console.log(this.getList());
        this.heroes = this.getList();
    }

    getList(): Observable<HeroInterface[]> {
        return this.heroService.getList();
    }

    onSelect(hero: HeroInterface) {
        this.selectedHero = hero;
        this.router.navigate(['../hero/item', this.selectedHero.id ]);
    }
}
