import { Component, OnInit } from "@angular/core";
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HeroInterface } from "./hero.interface"; 
import { HeroService } from "./hero.service";

@Component({
    selector: 'hero-search',
    template: require('./hero.tpl.html')
})
export class HeroComponent {
    heroes: Observable<HeroInterface[]>;
    private searchTerms = new Subject<string>();

    constructor(private heroService: HeroService) { }

    search(term: string): void {
        console.log('search');
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        console.log('on init');
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.heroService.search(term)
                : Observable.of<HeroInterface[]>()
            )
            .catch(err => {
                console.log(err);
                return Observable.of<HeroInterface[]>([]);
            });
    }
}