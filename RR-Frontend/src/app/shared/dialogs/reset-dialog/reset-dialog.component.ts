import { Component, OnInit } from '@angular/core';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

import { TranslateService } from '@ngx-translate/core';

import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';

import { ModuleTypesEnum } from '@enums/centerspecific-preferences/module-types.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

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
  selector: 'rr-reset-dialog',
  templateUrl: './reset-dialog.component.html',
  styleUrls: ['./reset-dialog.component.scss']
})
export class ResetDialogComponent extends ResizableBaseComponent implements OnInit {
  moduleType: ModuleTypesEnum;
  moduleTypesEnum = ModuleTypesEnum;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, public translate: TranslateService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.moduleType = this.config.data?.moduleType;
  }

  confirm() {
    this.ref.close(SimpleAnswerEnum.Yes);
  }

  cancel() {
    this.ref.close(SimpleAnswerEnum.No);
  }
}
