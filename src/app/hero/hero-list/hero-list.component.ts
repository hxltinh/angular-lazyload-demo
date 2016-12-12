import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
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

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        console.log(this.getList());
        this.heroes = this.getList();
    }

    getList(): Observable<HeroInterface[]> {
        return this.heroService.getList();
    }
}
