import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { IndicationFindingUiModel } from '@models/angiographyCT/ui/anamnesis/indication-finding-ui.model';
import { AnamnesisUiModel } from '@models/angiographyCT/ui/anamnesis/anamnesis-ui.model';
import { IndicationFindingTypeEnum } from '@enums/angiographyCT/anamnesis/indication-finding-type.enum';

@Component({
  selector: 'rr-anamnesis-tab',
  templateUrl: './anamnesis-tab.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnamnesisTabComponent {
  @Input() model: AnamnesisUiModel;
  @Input() indicationFindingHandler: DynamicComponentHandler<IndicationFindingUiModel>;
  @Input() indicationFindingDropdownConfig: FindingColumnConfig;

  indicationFindingType = IndicationFindingTypeEnum;

  isAorticVaskulitisVisible(): boolean {
    return [IndicationFindingTypeEnum.Vasculitis, IndicationFindingTypeEnum.AorticCoarctationCoA].includes(
      this.indicationFindingHandler.currentItem.indicationFindingType
    );
  }

  isPenetratingIntramuralDissectionVisible(): boolean {
    return [
      IndicationFindingTypeEnum.AorticDissection,
      IndicationFindingTypeEnum.IntramuralHematoma,
      IndicationFindingTypeEnum.PenetratingAorticUlcer
    ].includes(this.indicationFindingHandler.currentItem.indicationFindingType);
  }
}
