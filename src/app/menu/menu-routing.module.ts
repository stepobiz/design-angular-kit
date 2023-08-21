import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuIndexComponent } from './menu-index/menu-index.component';

const routes: Routes = [
  { path: '', component: MenuIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {
}
