import { Component, OnInit } from '@angular/core';

import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';

import { CardioKineticDisorderLocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-kinetic-disorder-localizer-ui.model';
import { CardioPerfusionDefectLocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-perfusion-defect-localizer-ui.model';
import { CardioLGELocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-LGE-localizer-ui.model';
import { LeftVentricleUiModel } from '@models/cardioMRT/ui/left-ventricle/left-ventricle-ui.model';

import { ICardioMultiColorEditorConfig } from '@interfaces/cardio-multi-color-localizer-configs.interface';

import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';

import { LeftVentricleHelperService } from '@services/cardioMRT/left-ventricle-helper.service';

import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-cardio-single-circle-edit-dialog',
  templateUrl: './cardio-single-circle-edit-dialog.component.html',
  styleUrls: ['cardio-single-circle-edit-dialog.component.scss']
})
export class CardioSingleCircleEditDialogComponent extends ResizableBaseComponent implements OnInit {
  localizerModel: CardioKineticDisorderLocalizerUiModel | CardioPerfusionDefectLocalizerUiModel | CardioLGELocalizerUiModel;
  localizerConfig: ICardioMultiColorEditorConfig;
  activeSectionType: string;
  selectionData = {};
  callback: () => void;

  constructor(
    public dialogService: DialogService,
    private dialogConfig: DynamicDialogConfig,
    private validationHelperService: ValidationHelperService
  ) {
    super();

    this.localizerModel = dialogConfig.data.localizerModel;
    this.localizerConfig = dialogConfig.data.editorConfig;
    this.callback = dialogConfig.data.callback;
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.prepareSelectionData();
  }

  private prepareSelectionData() {
    const sections = this.localizerConfig.colorPickerConfig.map(section => section.sectionType);

    sections.forEach(key => {
      const sectionTypeConfig = this.localizerConfig.colorPickerConfig.find(item => item.sectionType === key);
      this.selectionData[sectionTypeConfig.color] = this.localizerModel[key];
    });
  }

  onToggleSectionType(sectionType: string) {
    this.activeSectionType = sectionType;
  }

  onToggleSection(sectionNumber: number) {
    this.updateModel(sectionNumber);
    this.callback();
  }

  private updateModel(sectionNumber: number) {
    if (this.isSectionAlreadySelected(sectionNumber)) {
      // tslint:disable-next-line: forin
      for (const key in this.localizerModel) {
        const index = this.localizerModel[key].indexOf(sectionNumber);

        if (this.localizerModel[key].includes(sectionNumber)) {
          this.localizerModel[key].splice(index, 1);
        }
      }
    } else {
      this.localizerModel[this.activeSectionType].push(sectionNumber);
      this.localizerModel[this.activeSectionType].sort((a, b) => a - b);
    }

    if (LeftVentricleHelperService.isLocalizerValid(this.localizerModel)) {
      switch (true) {
        case this.localizerModel instanceof CardioKineticDisorderLocalizerUiModel: {
          this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.kineticDisorderLocalizer));
          break;
        }
        case this.localizerModel instanceof CardioPerfusionDefectLocalizerUiModel: {
          this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.perfusionDefectLocalizer));
          break;
        }
        case this.localizerModel instanceof CardioLGELocalizerUiModel: {
          this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.lgeSegmentalLocalizer));
        }
      }
    }
  }

  private isSectionAlreadySelected(sectionNumber: number) {
    let allSectionTypes = [];

    Object.keys(this.localizerModel).forEach(key => {
      allSectionTypes = allSectionTypes.concat(this.localizerModel[key]);
    });

    return allSectionTypes.find(el => el === sectionNumber);
  }

  close() {
    /**
     * According to the documentation, in order to close the dialog we should call the "close" method of the DynamicDialogRef. However,
     * there is a bug in the library that causes this way of closing the dialog not showing a closing animation.
     * To fix it we can use a hack published here: https://github.com/primefaces/primeng/issues/7728
     *
     * IMPORTANT NOTE: this way lets the dialog to close with the animation
     * but it doesn't let us pass any data back to the parent component that
     * opens the dialog
     */
    this.dialogService.dialogComponentRef.instance.close();
  }
}
