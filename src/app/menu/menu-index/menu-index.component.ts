import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-menu-index',
  templateUrl: './menu-index.component.html'
})
export class MenuIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItAbstractMenuComponent');
  }
}
