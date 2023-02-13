import { Component } from '@angular/core';

@Component({
    selector:'app-listado',
    templateUrl:'listado.component.html'

})
export class listadoComponent{
    heroes: string[] = ['Sipederman','Ironman', 'Batman', 'Homero']
    heroeBorrado : string  = '';
    
    deleteHeroe(){
        this.heroeBorrado = this.heroes.shift() || '';
        
    }
}