import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuIndexComponent } from './menu-index/menu-index.component';
import { MenuExampleComponent } from './menu-example/menu-example.component';
import { MenuExamplesComponent } from './menu-examples/menu-examples.component';

@NgModule({
  declarations: [
	MenuIndexComponent,
	MenuExampleComponent,
	MenuExamplesComponent,
	
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuRoutingModule
  ]
})
export class MenuModule {
}
