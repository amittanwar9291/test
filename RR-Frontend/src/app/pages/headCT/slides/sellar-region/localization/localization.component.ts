import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SellarRegionFindingUiModel } from '@models/headCT/ui/sellar-region/sellar-region-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SellarRegionDiagnosisTypeEnum } from '@enums/headCT/sellar-region/sellar-region-diagnosis-type.enum';
import { RelationToThePituitaryGlandTypeEnum } from '@enums/headCT/sellar-region/pathology/relation-to-the-pituitary-gland-type.enum';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { HistologyKnownTypeEnum } from '@enums/shared/head/histology-known-type.enum';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent {
  @Input() model: SellarRegionFindingUiModel;
  @Input() differentialDiagnoseW48: DropdownGroupedModel[];

  descriptionType = DescriptionTypeEnum;
  sellarRegionDiagnosisLocalizationType = SellarRegionDiagnosisTypeEnum;
  histologyKnownType = HistologyKnownTypeEnum;
  relationPituitaryGlandType = RelationToThePituitaryGlandTypeEnum;
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

  sellarRegionDiagnosisLocalizationChangeReset() {
    this.model.isSubordinate = false;
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
  }
}
