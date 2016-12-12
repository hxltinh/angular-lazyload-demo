import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleComponent } from './simple.component';

describe('Simple component', () => {
    let comp: SimpleComponent;
    let fixture: ComponentFixture<SimpleComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ SimpleComponent ]
            /* Note: open below comments to enable auto detect changes */

            // providers: [
            //     { provide: ComponentFixtureAutoDetect, useValue: true }
            // ]
        });

        fixture = TestBed.createComponent(SimpleComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual('');
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a text changing', () => {
        const textString = 'changing the title';
        comp.title = textString;
        fixture.detectChanges();
        expect(el.textContent).toContain(textString);
    })
});
