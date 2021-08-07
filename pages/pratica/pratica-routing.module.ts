import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PraticaPage } from './pratica.page';

const routes: Routes = [
  {
    path: '',
    component: PraticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PraticaPageRoutingModule {}
