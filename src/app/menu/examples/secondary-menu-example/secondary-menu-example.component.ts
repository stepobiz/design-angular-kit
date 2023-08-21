import { Component } from '@angular/core';
import { ItMenuConfig } from 'projects/design-angular-kit/src/lib/components/navigation/menu/menu.interface';

@Component({
  selector: 'it-secondary-menu-example',
  templateUrl: './secondary-menu-example.component.html'
})
export class SecondaryMenuExampleComponent {
  
  secondaryNavigationExample: ItMenuConfig = {
  type: 'link-list',
  items: [
    {
      type: "link",
      label: "Link 1",
      link: "#"
    },
    {
      type: "link",
      label: "Link 2",
      link: "#"
    }
  ]
  };
}
