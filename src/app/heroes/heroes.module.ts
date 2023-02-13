import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { listadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        listadoComponent
    ],
    exports:[
        listadoComponent
    ],
    imports:[
        CommonModule
    ]

})
export class HeroesModule{
    


}