import { Component } from '@angular/core';

import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-centerspecific-preferences-sequence-reset-confirm-dialog',
  templateUrl: './centerspecific-preferences-sequence-reset-confirm-dialog.component.html',
  styleUrls: ['./centerspecific-preferences-sequence-reset-confirm-dialog.component.scss']
})
export class CenterspecificPreferencesSequenceResetConfirmDialogComponent extends ResizableBaseComponent {
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
