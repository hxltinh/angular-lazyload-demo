import { async, ComponentFixture, fakeAsync, TestBed, tick
} from '@angular/core/testing';

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroModule } from '../hero.module';
import { HeroListComponent }  from './hero-list.component';
import { HEROES, FakeHeroService, HeroService } from '../hero.service.fake';

let comp: HeroListComponent;
let fixture: ComponentFixture<HeroListComponent>;
let page: Page;

describe('HeroListComponent', () => {

    beforeEach( async(() => {

        TestBed.configureTestingModule({
            imports: [ HeroModule ],
        providers: [
            { provide: HeroService, useClass: FakeHeroService }
        ]
        })
        .compileComponents()
        .then(createComponent);
    }));

    it('should display heroes', () => {
        expect(page.heroRows.length).toBeGreaterThan(0);
    });
});

/** Create the component and set the `page` test variables */
function createComponent() {
  fixture = TestBed.createComponent(HeroListComponent);
  comp = fixture.componentInstance;

  // change detection triggers ngOnInit which gets a hero
  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    // got the heroes and updated component
    // change detection updates the view
    fixture.detectChanges();
    page = new Page();
  });
}

class Page {
  /** Hero line elements */
  heroRows: HTMLLIElement[];

  /** Highlighted element */
  highlightDe: DebugElement;

  /** Spy on router navigate method */
  navSpy: jasmine.Spy;

  constructor() {
    this.heroRows    = fixture.debugElement.queryAll(By.css('li')).map(de => de.nativeElement);
  };
}