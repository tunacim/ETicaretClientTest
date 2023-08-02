import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketsComponent } from './basket.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BasketsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:BasketsComponent}
    ])
  ]
})
export class BasketModule { }
