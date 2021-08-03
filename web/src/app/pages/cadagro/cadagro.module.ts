import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadagroPageRoutingModule } from './cadagro-routing.module';

import { CadagroPage } from './cadagro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadagroPageRoutingModule
  ],
  declarations: [CadagroPage]
})
export class CadagroPageModule {}
