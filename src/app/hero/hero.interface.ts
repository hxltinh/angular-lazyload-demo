export class HeroInterface {
    constructor(public id = 0, public name = '') { }
    clone() { return new HeroInterface(this.id, this.name); }
}