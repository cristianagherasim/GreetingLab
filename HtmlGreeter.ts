import { Greeter } from './Greeter';

class HtmlGreeter extends Greeter{

    tagName:string;

    constructor (greeting:string,tagName:string = "h1"){
        super(greeting);

        this.tagName= tagName;
    }

    greet(name:string) : string {
        return `<h1>${this.greeting}, ${name}!</h1>`;
    }
}

export {HtmlGreeter}