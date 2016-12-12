import { Component } from "@angular/core";

@Component({
    selector: 'app-simple',
    template: "<h1>{{title}}</h1>"
})
export class SimpleComponent {
    title = "test title";
}