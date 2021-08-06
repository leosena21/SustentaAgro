import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizarPage } from './finalizar.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizarPageRoutingModule {}
