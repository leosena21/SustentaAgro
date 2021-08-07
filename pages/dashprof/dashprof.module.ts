import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashprofPageRoutingModule } from './dashprof-routing.module';

import { DashprofPage } from './dashprof.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashprofPageRoutingModule,
    ComponentsModule,
    NgxDatatableModule
  ],
  declarations: [DashprofPage]
})
export class DashprofPageModule {}
