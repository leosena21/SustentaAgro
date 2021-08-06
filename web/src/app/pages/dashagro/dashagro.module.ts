import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashagroPageRoutingModule } from './dashagro-routing.module';

import { DashagroPage } from './dashagro.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashagroPageRoutingModule,
    ComponentsModule,
    NgxDatatableModule
  ],
  declarations: [DashagroPage]
})
export class DashagroPageModule {}
