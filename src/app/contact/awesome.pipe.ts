import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'awesome'})
export default class AwesomePipe implements PipeTransform {
    transform(phrase: string) {
        return phrase ? 'Awesome' + phrase : '';
    }
}