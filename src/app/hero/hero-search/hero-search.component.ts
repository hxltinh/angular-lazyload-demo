import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/observable/of';

import { HeroInterface } from '../hero.interface';
 
import { HeroSearchService } from './hero-search.service';

@Component({
    selector: 'hero-search',
    template: require('./hero-search.tpl.html')
})
export class HeroSearchComponent {
    heroes: Observable<HeroInterface[]>;
    private searchTerms = new Subject<string>();

    constructor(private heroSearchService: HeroSearchService) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.heroSearchService.search(term)
                : Observable.of<HeroInterface[]>([])
            )
            .catch(err => {
                console.log(err);
                return Observable.of<HeroInterface[]>([]);
            });
    }
}