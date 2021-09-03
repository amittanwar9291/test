import { Component } from '@angular/core';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'rr-delete-logo-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent extends ResizableBaseComponent {
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    super();
  }

  dialogCancel() {
    this.ref.close();
  }

  dialogConfirm() {
    this.ref.close(true);
  }
}
