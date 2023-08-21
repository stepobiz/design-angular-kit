import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderIndexComponent } from './header-index/header-index.component';
import { HeaderExamplesComponent } from './header-examples/header-examples.component';
import { HeaderExampleComponent } from './header-example/header-example.component';

@NgModule({
  declarations: [
	HeaderIndexComponent,
	HeaderExamplesComponent,
	HeaderExampleComponent,
	
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule {
}
