import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumoPage } from './resumo.page';

const routes: Routes = [
  {
    path: '',
    component: ResumoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumoPageRoutingModule {}
