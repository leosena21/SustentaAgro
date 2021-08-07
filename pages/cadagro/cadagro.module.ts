import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadagroPageRoutingModule } from './cadagro-routing.module';

import { CadagroPage } from './cadagro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadagroPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [CadagroPage]
})
export class CadagroPageModule {}
