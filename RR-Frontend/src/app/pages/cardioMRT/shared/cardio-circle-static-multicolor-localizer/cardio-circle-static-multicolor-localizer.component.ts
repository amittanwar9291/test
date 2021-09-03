import { Component, Input, OnChanges } from '@angular/core';

import { CardioKineticDisorderLocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-kinetic-disorder-localizer-ui.model';
import { CardioPerfusionDefectLocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-perfusion-defect-localizer-ui.model';
import { CardioLGELocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-LGE-localizer-ui.model';

import { ICardioMultiColorEditorConfig } from '@interfaces/cardio-multi-color-localizer-configs.interface';

@Component({
  selector: 'rr-cardio-circle-static-multicolor-localizer',
  templateUrl: './cardio-circle-static-multicolor-localizer.component.html',
  styleUrls: ['./cardio-circle-static-multicolor-localizer.component.scss']
})
export class CardioCircleStaticMulticolorLocalizerComponent implements OnChanges {
  @Input() localizerModel: CardioKineticDisorderLocalizerUiModel | CardioPerfusionDefectLocalizerUiModel | CardioLGELocalizerUiModel;
  @Input() localizerConfig: ICardioMultiColorEditorConfig;
  selectionData = {};

  ngOnChanges(): void {
    this.prepareSelectionData();
  }

  private prepareSelectionData() {
    const sections = this.localizerConfig.colorPickerConfig.map(section => section.sectionType);

    sections.forEach(key => {
      const sectionTypeConfig = this.localizerConfig.colorPickerConfig.find(item => {
        return item.sectionType === key;
      });
      this.selectionData[sectionTypeConfig.color] = this.localizerModel[key];
    });
  }

  getColor(sectionNumber: number) {
    const colors = Object.keys(this.selectionData);
    return colors.find(key => {
      return this.selectionData[key].includes(sectionNumber);
    });
  }
}
