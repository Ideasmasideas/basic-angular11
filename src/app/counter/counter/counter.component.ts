import { Component } from '@angular/core';


@Component({
    selector: 'app-counter',
    
    template: `
        <h1>{{title}}</h1>
        <span>La base es: {{ base }}</span> <br>
        <span>{{ numero }}</span> 
        <hr/>
        <button (click)="acumular(base)">{{ base }}</button>
        <button (click)="acumular(- base)" >-{{ base }}</button>`
})

export class CounterComponent{
    title : string = 'Contador de Angular';
    numero: number = 10;
    base  :number = 10
  
    acumular(operacion:number){
      this.numero += operacion;
    }
  
}