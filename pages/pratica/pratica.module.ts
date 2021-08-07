import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PraticaPageRoutingModule } from './pratica-routing.module';

import { PraticaPage } from './pratica.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PraticaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PraticaPage]
})
export class PraticaPageModule {}
