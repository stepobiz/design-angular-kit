import { Component } from '@angular/core';
import { ItMenuConfig } from 'projects/design-angular-kit/src/lib/components/navigation/menu/menu.interface';

@Component({
  selector: 'it-icon-menu-example',
  templateUrl: './icon-menu-example.component.html'
})
export class IconMenuExampleComponent {
  
  iconNavigationExample: ItMenuConfig = {
	type: 'icon-list',
	items: [
		{
			type: 'icon',
			icon: 'github',
			label: 'Github',
			link: 'https://github.com/italia/design-angular-kit/'
		},
		{
			type: 'icon',
			icon: 'facebook',
			label: 'Facebook',
			link: 'https://www.facebook.com/AgIDGovIT'
		}
	]
  };
}
