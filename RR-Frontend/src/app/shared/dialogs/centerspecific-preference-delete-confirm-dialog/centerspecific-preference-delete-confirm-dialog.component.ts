import { Component } from '@angular/core';

import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';
import { ModuleTypesEnum } from '@enums/centerspecific-preferences/module-types.enum';

@Component({
  selector: 'rr-centerspecific-preference-delete-confirm-dialog',
  templateUrl: './centerspecific-preference-delete-confirm-dialog.component.html',
  styleUrls: ['./centerspecific-preference-delete-confirm-dialog.component.scss']
})
export class CenterspecificPreferenceDeleteConfirmDialogComponent extends ResizableBaseComponent {
  moduleTypesEnum = ModuleTypesEnum;
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, public translate: TranslateService) {
    super();
  }

  confirm() {
    this.ref.close(true);
  }

  cancel() {
    this.ref.close();
  }
}
