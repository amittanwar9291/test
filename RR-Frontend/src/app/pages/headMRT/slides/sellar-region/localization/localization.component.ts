import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SellarRegionFindingUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SellarRegionDiagnosisTypeEnum } from '@enums/headMRT/sellar-region/sellar-region-diagnosis-type.enum';
import { RelationPituitaryGlandTypeEnum } from '@enums/headMRT/sellar-region/relation-pituitar-gland-type.enum';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent {
  @Input() model: SellarRegionFindingUiModel;
  @Input() differentialDiagnoseW38: DropdownGroupedModel[];
  descriptionType = DescriptionTypeEnum;
  sellarRegionDiagnosisType = SellarRegionDiagnosisTypeEnum;
  relationPituitaryGlandType = RelationPituitaryGlandTypeEnum;
  sideType = SideTypeEnum;

  onSizeInMmChange() {
    if (!this.model.extensionSize) {
      this.model.extensionSize2ndPlane = null;
      this.model.extensionSize3rdPlane = null;
    }
  }

  onSecondPlaneInMmChange() {
    if (!this.model.extensionSize2ndPlane) {
      this.model.extensionSize3rdPlane = null;
    }
  }
}
