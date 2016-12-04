import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HightLightDirective } from "./directives/highlight.directive";

@NgModule({
    imports: [ CommonModule],
    declarations: [ HightLightDirective ],
    exports: [ CommonModule, HightLightDirective ]
})
export class SharedModule { }