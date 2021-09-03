import { Component } from '@angular/core';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

import { TranslateService } from '@ngx-translate/core';

import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';

/**
 * Usage:
 * (in parent class)
 * const ref = this.dialogService.open(ResetDialogComponent, {
 *    width: '33%',
 *      showHeader: false
 *   });
 *
 *   this.resetDialogSub = ref.onClose.subscribe((out: string) => {
 *    ...
 *  });
 */
@Component({
  selector: 'rr-file-delete-confirm-dialog',
  templateUrl: './file-delete-confirm-dialog.component.html',
  styleUrls: ['./file-delete-confirm-dialog.component.scss']
})
export class FileDeleteConfirmDialogComponent extends ResizableBaseComponent {
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
