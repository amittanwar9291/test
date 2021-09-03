import { Component } from '@angular/core';

import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';

import { ColorsEnum } from '@enums/cardioMRT/left-ventricle/colors.enum';
import { LocalizerPositionEnum } from '@enums/cardioMRT/left-ventricle/localizer-position.enum';

import { LeftVentricleUiModel } from '@models/cardioMRT/ui/left-ventricle/left-ventricle-ui.model';

import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';

@Component({
  selector: 'rr-cardio-morphology-edit-modal',
  templateUrl: './cardio-morphology-edit-dialog.component.html',
  styleUrls: ['cardio-morphology-edit-dialog.component.scss']
})
export class CardioMorphologyEditDialogComponent extends ResizableBaseComponent {
  colors = {
    purple: ColorsEnum.Purple,
    turquoise: ColorsEnum.Turquoise,
    blue: ColorsEnum.Blue,
    yellow: ColorsEnum.Yellow
  };
  model: LeftVentricleUiModel;
  callback: () => void;

  localizerPosition: typeof LocalizerPositionEnum;

  constructor(public dialogService: DialogService, config: DynamicDialogConfig) {
    super();
    this.model = config.data.model;
    this.callback = config.data.callback;

    this.localizerPosition = LocalizerPositionEnum;
  }

  onDataUpdate() {
    this.callback();
  }

  close() {
    /**
     * According to the documentation, in order to close the dialog we should call the "close" method of the DynamicDialogRef. However,
     * there is a bug in the library that causes this way of closing the dialog not showing a closing animation.
     * To fix it we can use a hack published here: https://github.com/primefaces/primeng/issues/7728
     *
     * IMPORTANT NOTE: this way lets the dialog to close with the animation but it
     * doesn't let us pass any data back to the parent component that
     * opens the dialog
     */
    this.dialogService.dialogComponentRef.instance.close();
  }
}
