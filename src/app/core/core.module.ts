import { RouterModule } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { Erro404Component } from './component/erro404/erro404.component';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports:[
    RouterModule.forChild([
      {
        // caso não encotre o caminho
        path: '**', component: Erro404Component
      }

    ])
  ],
  exports:[
    NavBarComponent
  ]
})
export class CoreModule { }
