import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const PAGES_COMPONENTS = [
  HeaderComponent
];

@NgModule({
  declarations: [PAGES_COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [
    PAGES_COMPONENTS
  ],
  entryComponents: [],
})
export class ComponentsModule { }
