import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadagroPage } from './cadagro.page';

const routes: Routes = [
  {
    path: '',
    component: CadagroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadagroPageRoutingModule {}
