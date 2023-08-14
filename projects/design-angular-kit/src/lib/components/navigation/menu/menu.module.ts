import { NgModule } from '@angular/core';
import { ItMenuComponent } from './menu.component';

const menu = [ItMenuComponent];

@NgModule({
  imports: menu,
  exports: menu
})
export class ItMenusModule {
}
