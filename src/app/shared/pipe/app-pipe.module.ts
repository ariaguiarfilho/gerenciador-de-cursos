import { ReplacePipe } from './replace.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ReplacePipe
  ],
  exports:[
    ReplacePipe
  ]
})
export class AppPipeModule { }
