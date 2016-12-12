import { NgModule } from "@angular/core";

import { SimpleComponent } from "./simple.component";
import { SimpleRoutingModule } from "./simple-routing.module";


@NgModule({
    imports: [ SimpleRoutingModule ],
    declarations: [SimpleComponent]
})
export class SimpleModule { }