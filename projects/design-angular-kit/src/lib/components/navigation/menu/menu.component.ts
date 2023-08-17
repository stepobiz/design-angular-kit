import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { ItMenuConfig, ItMenuItem } from './menu.interface';

@Component({
  selector: 'it-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItMenuComponent extends ItAbstractComponent {

  @Input({ required: true }) menuConfig: ItMenuConfig;

  @Input() slimTitle: string | undefined;

  /**
   * TODO: complete menu
   */
  constructor() {
    super();
  }
  
  isMegamenu(menuItem: ItMenuItem) {
	if(menuItem.type == 'megamenu')
		return true;
	return false;
  }

  isDropdown(menuItem: ItMenuItem) {
	if(menuItem.type == 'dropdown')
		return true;
	return false;
  }

  isLink(menuItem: ItMenuItem) {
	if(menuItem.type == 'link')
		return true;
	return false;
  }

  isDivider(menuItem: ItMenuItem) {
	if(menuItem.type == 'divider')
		return true;
	return false;
  }
}
