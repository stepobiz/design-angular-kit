import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItAbstractComponent } from 'projects/design-angular-kit/src/lib/abstracts/abstract.component';
import { ItMenuConfig, ItMenuItem } from '../../menu.interface';

@Component({
  selector: 'it-menu',
  templateUrl: './abstract-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItAbstractMenuComponent extends ItAbstractComponent {

  /**
   * Configuration of menu to display
   */
  @Input({ required: true }) menuConfig: ItMenuConfig;

  /**
   * DEPRECATION - passare valori statici: nome regione (con link), nome comune (con link), slogan comune
   */
  @Input() slimTitle: string | undefined;

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

  isIcon(menuItem: ItMenuItem) {
	if(menuItem.type == 'icon')
		return true;
	return false;
  }

  isText(menuItem: ItMenuItem) {
	if(menuItem.type == 'text')
		return true;
	return false;
  }
}
