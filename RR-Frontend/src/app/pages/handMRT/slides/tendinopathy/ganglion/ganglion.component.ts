import { Component, Input } from '@angular/core';
import { TendinopathyFindingUiModel } from '@models/handMRT/ui/tendinopathy/tendinopathy-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TendonInvolvementTypeEnum } from '@enums/handMRT/tendinopathy/tendon-involvement-type.enum';
import { InternalStructureTypeEnum } from '@enums/handMRT/tendinopathy/internal-structure-type.enum';
import { LocalizationTypeEnum } from '@enums/handMRT/tendinopathy/localization-type.enum';
import { LocalizationDetailsTypeEnum } from '@enums/handMRT/tendinopathy/localization-details-type.enum';

@Component({
  selector: 'rr-ganglion',
  templateUrl: './ganglion.component.html',
  styleUrls: ['./ganglion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class GanglionComponent {
  @Input() model: TendinopathyFindingUiModel;
  @Input() extensorTypes: DropdownModel[];
  @Input() flexorTypes: DropdownModel[];
  tendonInvolvementTypeEnum: typeof TendonInvolvementTypeEnum;
  internalStructureTypeEnum: typeof InternalStructureTypeEnum;
  localizationTypeEnum: typeof LocalizationTypeEnum;
  localizationDetailsTypeEnum: typeof LocalizationDetailsTypeEnum;

  constructor() {
    this.tendonInvolvementTypeEnum = TendonInvolvementTypeEnum;
    this.internalStructureTypeEnum = InternalStructureTypeEnum;
    this.localizationTypeEnum = LocalizationTypeEnum;
    this.localizationDetailsTypeEnum = LocalizationDetailsTypeEnum;
  }

  clear2ndPlane() {
    if (!this.model.size && this.model.size !== 0) {
      this.model.secondPlane = null;
    }
    this.clear3rdPlane();
  }

  clear3rdPlane() {
    if (!this.model.secondPlane && this.model.secondPlane !== 0) {
      this.model.thirdPlane = null;
    }
  }

  clearDropdowns() {
    this.model.localizationDetailsType = this.localizationDetailsTypeEnum.None;
  }
}
