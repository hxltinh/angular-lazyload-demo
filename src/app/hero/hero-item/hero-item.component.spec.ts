import {
  async, ComponentFixture, fakeAsync, inject, TestBed, tick
} from '@angular/core/testing';

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
    click, newEvent
} from '../../testing';

import { HeroItemComponent } from './hero-item.component';
import { HeroInterface } from '../hero.interface';
import { HeroService } from '../hero.service';
import { HeroModule } from '../hero.module';

////// Testing Vars //////
let comp: HeroItemComponent;
let fixture: ComponentFixture<HeroItemComponent>;
let page: Page;

////// Tests //////
describe('HeroItemComponent', () => {
//   beforeEach(() => {
//     activatedRoute = new ActivatedRouteStub();
//   });
//   describe('with HeroModule setup', heroModuleSetup);
  describe('when override its provided HeroService', overrideSetup);
//   describe('with FormsModule setup', formsModuleSetup);
//   describe('with SharedModule setup', sharedModuleSetup);
});

////////////////////
function overrideSetup() {

  class HeroServiceSpy {
    testHero = new HeroInterface(42, 'Test Hero');

    getOne = jasmine.createSpy('getOne').and.callFake(
      () => Promise
        .resolve(true)
        .then(() => Object.assign({}, this.testHero))
    );
  }

//   // the `id` value is irrelevant because ignored by service stub
//   beforeEach(() => activatedRoute.testParams = { id: 99999 } );

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports:   [ HeroModule ],
      providers: [
        // HeroService at this level is IRRELEVANT!
        { provide: HeroService, useValue: {} }
      ]
    })

    // Override component's own provider
    .overrideComponent(HeroItemComponent, {
      set: {
        providers: [
          { provide: HeroService, useClass: HeroServiceSpy }
        ]
      }
    })

    .compileComponents();
  }));

  let hdsSpy: HeroServiceSpy;

  beforeEach( async(() => {
    createComponent();
    // get the component's injected HeroServiceSpy
    hdsSpy = fixture.debugElement.injector.get(HeroService);
  }));

  it('should have called `getOne`', () => {
    expect(hdsSpy.getOne.calls.count()).toBe(1, 'getOne called once');
  });

  it('should display stub hero\'s name', () => {
    expect(page.nameDisplay.textContent).toBe(hdsSpy.testHero.name);
  });

  it('fixture injected service is not the component injected service',
    inject([HeroService], (service: HeroService) => {

    expect(service).toEqual({}, 'service injected from fixture');
    expect(hdsSpy).toBeTruthy('service injected into component');
  }));
}

/////////// Helpers /////

/** Create the HeroItemComponent, initialize it, set test variables  */
function createComponent() {
  fixture = TestBed.createComponent(HeroItemComponent);

  comp    = fixture.componentInstance;
  page    = new Page();

  // 1st change detection triggers ngOnInit which gets a hero
  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    // 2nd change detection displays the async-fetched hero
    fixture.detectChanges();
    page.addPageElements();
  });
}

class Page {
  gotoSpy:      jasmine.Spy;
  navSpy:       jasmine.Spy;

  saveBtn:      DebugElement;
  cancelBtn:    DebugElement;
  nameDisplay:  HTMLElement;

  /** Add page elements after hero arrives */
  addPageElements() {
    if (comp.hero) {
      // have a hero so these elements are now in the DOM
      const buttons    = fixture.debugElement.queryAll(By.css('button'));
      this.saveBtn     = buttons[0];
      this.cancelBtn   = buttons[1];
      this.nameDisplay = fixture.debugElement.query(By.css('span')).nativeElement;
    }
  }
}
