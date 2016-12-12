import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

export { HeroInterface } from './hero.interface';
export { HeroService } from './hero.service';

import { HeroInterface } from './hero.interface';
import { HeroService } from './hero.service';

export const HEROES: HeroInterface[] = [
  new HeroInterface(41, 'Bob'),
  new HeroInterface(42, 'Carol'),
  new HeroInterface(43, 'Ted'),
  new HeroInterface(44, 'Alice'),
  new HeroInterface(45, 'Speedy'),
  new HeroInterface(46, 'Stealthy')
];

export class FakeHeroService {

    getList(): Observable<HeroInterface[]> {
        return Observable.of<HeroInterface[]>(HEROES);
    }
}