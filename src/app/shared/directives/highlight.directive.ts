import {Directive, ElementRef, Renderer} from "@angular/core";

@Directive({selector: "[highlight], input"})
export class HightLightDirective {
    constructor(renderer: Renderer, el: ElementRef) {
          renderer.setElementStyle(el.nativeElement, "backgroundColor", "powderblue");
    }
}