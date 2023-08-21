import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuIndexComponent } from './menu-index/menu-index.component';
import { MenuExamplesComponent } from './menu-examples/menu-examples.component';
import { MainMenuExampleComponent } from './examples/main-menu-example/main-menu-example.component';
import { IconMenuExampleComponent } from './examples/icon-menu-example/icon-menu-example.component';
import { SecondaryMenuExampleComponent } from './examples/secondary-menu-example/secondary-menu-example.component';

@NgModule({
  declarations: [
	MenuIndexComponent,
	MenuExamplesComponent,
	MainMenuExampleComponent,
	IconMenuExampleComponent,
	SecondaryMenuExampleComponent,
	
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuRoutingModule
  ]
})
export class MenuModule {
}
