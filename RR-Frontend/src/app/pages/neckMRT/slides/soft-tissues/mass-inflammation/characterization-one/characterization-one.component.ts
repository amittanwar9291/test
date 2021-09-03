import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissuesFindingUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import {
  DifferentialDiagnosisTypeEnum,
  HistologyProvenTypeEnum,
  VascularNerveSheathTypeEnum
} from '@enums/neckMRT/soft-tissues/mass-inflammation';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SoftTissuesHelperService } from '../../soft-tissues-helper.service';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: SoftTissuesFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownModel[];
  @Input() orientationAxialOptions: DropdownModel[];

  selectionAccessibilityModeEnum: typeof SpineSelectionAccessibilityModeEnum;
  vascularNerveSheathTypeEnum: typeof VascularNerveSheathTypeEnum;

  descriptionType: typeof DescriptionTypeEnum;
  differentialDiagnosistype: typeof DifferentialDiagnosisTypeEnum;
  histologyProvenType: typeof HistologyProvenTypeEnum;

  constructor(private helperService: SoftTissuesHelperService) {
    this.selectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;
    this.vascularNerveSheathTypeEnum = VascularNerveSheathTypeEnum;
    this.descriptionType = DescriptionTypeEnum;
    this.differentialDiagnosistype = DifferentialDiagnosisTypeEnum;
    this.histologyProvenType = HistologyProvenTypeEnum;
  }

  resetDifferentialDiagnosisDependantModel(): void {
    this.model.isHistologyProven = false;
    this.model.histologyProvenType = HistologyProvenTypeEnum.None;
    this.model.isSubordinate = false;
  }

  openLargeLocalizer(): void {
    this.helperService.isLargeLocalizerOpen.next(true);
  }

  checkTransspatialSpread(): void {
    const firstGroup = [
      this.model.isPharyngealMucosalSpacePMS,
      this.model.isParapharyngealSpacePPS,
      this.model.isMastatorSpaceMS,
      this.model.isBuccalSpaceBS,
      this.model.isParotidSpacePS,
      this.model.isCarotidSpaceCS,
      this.model.isRetropharyngealSpaceRPSAndDangerSpace,
      this.model.isPerivertebralSpacePVSPrevertebral,
      this.model.isPerivertebralSpacePVSParaspinal,
      this.model.isVisceralSpaceVS,
      this.model.isAnteriorCervicalSpaceACS,
      this.model.isPosteriorCervicalSpacePCS
    ];
    const secondGroup = [
      this.model.isOralMucosalSpaceOMS,
      this.model.isSublingualSpaceSLS,
      this.model.isSubmandibularSpaceSMS,
      this.model.isApexLinguae,
      this.model.isCorpusLinguae,
      this.model.isRadixLinguae,
      this.model.isTongueBaseTonsil,
      this.model.isValleculae
    ];

    this.model.isTransspatialSpread = firstGroup.filter(item => item).length > 1 && secondGroup.filter(item => item).length > 1;
  }
}
