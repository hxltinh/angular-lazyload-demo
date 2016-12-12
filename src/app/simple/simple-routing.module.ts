import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SimpleComponent } from "./simple.component";
@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SimpleComponent }
    ])],
    exports: [ RouterModule ]
})
export class SimpleRoutingModule { }