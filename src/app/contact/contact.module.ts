import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms"

import { SharedModule } from "../shared/shared.module";

import AwesomePipe from "./awesome.pipe";

import ContactComponent from "./contact.component";
import {ContactService} from "./contact.service";

import ContactRoutingModule from './contact-routing.module';

@NgModule({
    imports: [SharedModule, FormsModule, ContactRoutingModule],
    declarations: [ContactComponent, AwesomePipe],
    exports: [ContactComponent],
    providers: [ContactService]
})
export class ContactModule { }
