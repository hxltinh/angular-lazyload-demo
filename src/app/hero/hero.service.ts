import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { HeroInterface } from './hero.interface';

@Injectable()
export class HeroService {
    constructor(private http: Http) { }

    getList(): Observable<HeroInterface[]> {
        return this.http
            .get('http://localhost:4000/heroes')
            .map((res: Response) => {
                return res.json() as HeroInterface[];
            });
    }

    getOne(): Observable<HeroInterface> {
        return this.http
            .get('http://localhost:4000/heroes/1')
            .map((res: Response) => {
                return res.json() as HeroInterface;
            });
    }
}