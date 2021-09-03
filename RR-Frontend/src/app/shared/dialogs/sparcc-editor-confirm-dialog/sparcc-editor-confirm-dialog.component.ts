import { Component, OnInit } from '@angular/core';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-sparcc-editor-confirm-dialog',
  templateUrl: './sparcc-editor-confirm-dialog.component.html',
  styleUrls: ['./sparcc-editor-confirm-dialog.component.scss']
})
export class SparccEditorConfirmDialogComponent extends ResizableBaseComponent {
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
