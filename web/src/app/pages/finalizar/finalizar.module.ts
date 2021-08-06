import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarPageRoutingModule } from './finalizar-routing.module';

import { FinalizarPage } from './finalizar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizarPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [FinalizarPage]
})
export class FinalizarPageModule {}
