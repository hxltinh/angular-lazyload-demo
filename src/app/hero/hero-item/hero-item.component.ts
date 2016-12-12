import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroInterface } from '../hero.interface';
import { HeroService } from '../hero.service';

@Component({
    selector: 'hero-item',
    template: require('./hero-item.tpl.html')
})
export class HeroItemComponent {
    hero: Observable<HeroInterface>;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        console.log('OnInit');
        this.getHero().subscribe(res => console.debug('res:', res));
    }

    getHero(): Observable<HeroInterface> {
        return this.heroService.getOne();
    }
}