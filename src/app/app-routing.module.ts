import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouletteWheelComponent } from './roulette-wheel/roulette-wheel.component';

const routes: Routes = [
  {
    path:'',
    component: RouletteWheelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
