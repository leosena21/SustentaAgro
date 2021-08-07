import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashagroPage } from './dashagro.page';

const routes: Routes = [
  {
    path: '',
    component: DashagroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashagroPageRoutingModule {}
