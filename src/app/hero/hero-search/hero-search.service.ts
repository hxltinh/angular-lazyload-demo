import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { HeroInterface } from '../hero.interface';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class HeroSearchService {
    constructor(private http: Http) { }

    search(term: string): Observable<HeroInterface[]> {
        const headers = new Headers({
            'Content-Type': 'application/json; charset=utf-8'
        });
        return this.http
            .get(`http://localhost:4000/heroes?q=${term}`, { headers })
            .map((res: Response) => {
                return res.json() as HeroInterface[];
            });
    }
}
