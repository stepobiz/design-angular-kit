import { NgModule } from '@angular/core';
import { ItMenuComponent } from './menu.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItMenuDropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  imports: [
	CommonModule,
	TranslateModule,
	ItIconComponent,
	
  ],
  declarations: [
	ItMenuComponent,
	ItMenuDropdownComponent,

  ],
  exports: [
	ItMenuComponent
  ]
})
export class ItMenusModule {
}
