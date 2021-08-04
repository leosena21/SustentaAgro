import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadprofPageRoutingModule } from './cadprof-routing.module';

import { CadprofPage } from './cadprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadprofPageRoutingModule
  ],
  declarations: [CadprofPage]
})
export class CadprofPageModule {}
