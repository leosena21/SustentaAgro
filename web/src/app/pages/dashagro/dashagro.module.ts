import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashagroPageRoutingModule } from './dashagro-routing.module';

import { DashagroPage } from './dashagro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashagroPageRoutingModule
  ],
  declarations: [DashagroPage]
})
export class DashagroPageModule {}
