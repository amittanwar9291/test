import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { LymphNodeStationsFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymph-node-stations-finding-ui.model';
import { LymphaticSystemFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-finding-ui.model';
import { LocalizationTypeEnum, LymphNodeStationsTypeEnum } from '@enums/abdomenMRT/lymphatic-system/lymph-nodes';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent {
  @Input() model: LymphaticSystemFindingUiModel;
  @Input() findingDropdownConfig: FindingColumnConfig;
  @Input() findingLymphNodeStationsHandler: DynamicComponentHandler<LymphNodeStationsFindingUiModel>;

  localizationType = LocalizationTypeEnum;
  findingType = LymphNodeStationsTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {}

  get isRest() {
    return !(this.isSideFinding || this.isSideDetailsFinding || this.isCurvatureFinding || this.isPancreaticDetailsFinding);
  }

  get isSideFinding() {
    return [
      LymphNodeStationsTypeEnum.InternalMammary,
      LymphNodeStationsTypeEnum.RenalHilum,
      LymphNodeStationsTypeEnum.ExternalIliac,
      LymphNodeStationsTypeEnum.InternalIliac,
      LymphNodeStationsTypeEnum.CommonIliac,
      LymphNodeStationsTypeEnum.Paracolic,
      LymphNodeStationsTypeEnum.Inguinal,
      LymphNodeStationsTypeEnum.Obturator,
      LymphNodeStationsTypeEnum.Femoral
    ].includes(this.findingLymphNodeStationsHandler.currentItem.findingType);
  }

  get isSideDetailsFinding() {
    return [LymphNodeStationsTypeEnum.Diaphragmatic].includes(this.findingLymphNodeStationsHandler.currentItem.findingType);
  }

  get isCurvatureFinding() {
    return [LymphNodeStationsTypeEnum.Gastric].includes(this.findingLymphNodeStationsHandler.currentItem.findingType);
  }

  get isPancreaticDetailsFinding() {
    return [LymphNodeStationsTypeEnum.Pancreatic].includes(this.findingLymphNodeStationsHandler.currentItem.findingType);
  }

  resetSubfindings() {
    this.findingLymphNodeStationsHandler.deleteAllElements();
  }

  removeErrors() {
    this.validationHelperService.removeError(nameof<LymphaticSystemFindingUiModel>(m => m.lymphNodeStations));
    // because of removing element from the dom, we need to go through all findings and clear of them validation
    this.findingLymphNodeStationsHandler.collection.forEach(item => {
      this.validationHelperService.removeAllErrorsInFinding(item.validationId);
    });
  }
}
