import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PraticaPageRoutingModule } from './pratica-routing.module';

import { PraticaPage } from './pratica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PraticaPageRoutingModule
  ],
  declarations: [PraticaPage]
})
export class PraticaPageModule {}
