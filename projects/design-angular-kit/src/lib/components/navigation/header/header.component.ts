import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItButtonDirective } from '../../core/button/button.directive';
import { ItLanguageSwitcherComponent } from '../../utils/language-switcher/language-switcher.component';
import { ItMenuComponent } from '../menu/menu.component';
import { ItMenuConfig } from '../menu/menu.interface';

@Component({
  standalone: true,
  selector: 'it-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule, ItIconComponent, ItLanguageSwitcherComponent, ItMenuComponent, ItButtonDirective]
})
export class ItHeaderComponent extends ItAbstractComponent {

  @Input() light: BooleanInput | undefined;

  @Input() showSlim?: BooleanInput = true;

  @Input() slimTitle: string | undefined;

  @Input() accessoryNavigation: ItMenuConfig | undefined;

  @Input() loginStyle: 'none' | 'default' | 'full' = 'default';

  @Input() smallHeader?: BooleanInput = true;

  @Input() showSearch?: BooleanInput = true;

  @Output() loginClick: EventEmitter<Event>;

  @Output() searchClick: EventEmitter<Event>;

  /**
   * TODO: complete header
   */
  constructor() {
    super();

    this.loginClick = new EventEmitter<Event>();
    this.searchClick = new EventEmitter<Event>();
  }

  get isLight(): boolean {
    return isTrueBooleanInput(this.light);
  }

  get isShowSlim(): boolean {
    return isTrueBooleanInput(this.showSlim);
  }

  get isSmallHeader(): boolean {
    return isTrueBooleanInput(this.smallHeader);
  }

  get isShowSearch(): boolean {
    return isTrueBooleanInput(this.showSearch);
  }

  showAccessoryNavigation(): boolean {
	return (this.accessoryNavigation !== undefined);
  }

}
