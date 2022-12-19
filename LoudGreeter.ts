import { Greeter } from './Greeter';

class LoudGreeter extends Greeter{

    private extra:string = "!";

    constructor (greeting:string){
        super(greeting);
    }

    greet(name:string) : string {
        return `${this.greeting}, ${name}!${this.extra}`;
    }

    addVolume() : void {
        this.extra = this.extra + "!";
    }
}

export {LoudGreeter}