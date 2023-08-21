import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItButtonDirective } from '../../core/button/button.directive';

@Component({
  standalone: true,
  selector: 'it-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule, ItIconComponent, ItButtonDirective]
})
export class ItFooterComponent extends ItAbstractComponent {

  @Input() light: BooleanInput | undefined;

  /**
   * TODO: complete footer
   */
  constructor() {
    super();
  }

  get isLight(): boolean {
    return isTrueBooleanInput(this.light);
  }

}
