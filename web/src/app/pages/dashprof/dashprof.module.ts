import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashprofPageRoutingModule } from './dashprof-routing.module';

import { DashprofPage } from './dashprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashprofPageRoutingModule
  ],
  declarations: [DashprofPage]
})
export class DashprofPageModule {}
