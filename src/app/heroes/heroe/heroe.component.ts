import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent{
    name: string = 'Iroman';
    age : number = 38

getName():string{
    return `${this.name } - ${ this.age}`;
}

get nameCapitaliced() : string{
return this.name.toUpperCase();
}

changeName():string {
    return this.name='Spidemar'
}

changeAge():number {
    return this.age = 30;
}

}