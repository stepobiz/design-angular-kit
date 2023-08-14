import { NgModule } from '@angular/core';
import { ItHeaderComponent } from './header.component';

const header = [ItHeaderComponent];

@NgModule({
  imports: header,
  exports: header
})
export class ItHeadersModule {
}
