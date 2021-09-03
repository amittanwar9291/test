import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { NerveCompressionFindingUiModel } from '@models/handMRT/ui/nerve-compression/nerve-compression-finding-ui.model';
import {
  NeurogeOriginTypeEnum,
  OsseousCauseTypeEnum,
  PathogenesisTypeEnum,
  SecondaryPathogenesisDetailsTypeEnum,
  SoftTissueOriginTypeEnum,
  SynovialOriginTypeEnum
} from '@enums/handMRT/nerve-compression';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-ulnar-tunnel-syndrome',
  templateUrl: './ulnar-tunnel-syndrome.component.html',
  styleUrls: ['./ulnar-tunnel-syndrome.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class UlnarTunelSyndromeComponent {
  @Input() model: NerveCompressionFindingUiModel;

  pathogenesisType: typeof PathogenesisTypeEnum;
  secondaryPathogenesisDetailsType: typeof SecondaryPathogenesisDetailsTypeEnum;
  osseousCauseType: typeof OsseousCauseTypeEnum;
  synovialOriginType: typeof SynovialOriginTypeEnum;
  neurogeneOriginType: typeof NeurogeOriginTypeEnum;
  softTissueOriginType: typeof SoftTissueOriginTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.initializeEnums();
  }

  initializeEnums() {
    this.pathogenesisType = PathogenesisTypeEnum;
    this.secondaryPathogenesisDetailsType = SecondaryPathogenesisDetailsTypeEnum;
    this.osseousCauseType = OsseousCauseTypeEnum;
    this.synovialOriginType = SynovialOriginTypeEnum;
    this.neurogeneOriginType = NeurogeOriginTypeEnum;
    this.softTissueOriginType = SoftTissueOriginTypeEnum;
  }

  clearSecondaryDetails() {
    if (this.model.pathogenesisType !== this.pathogenesisType.Secondary) {
      this.model.secondaryPathogenesisDetailsType = SecondaryPathogenesisDetailsTypeEnum.None;
    }

    this.model.isOsTriquetrum = false;
    this.model.isOsPisiforme = false;
    this.model.isOsHamatum = false;
    this.model.osseousCauseType = OsseousCauseTypeEnum.None;
    this.model.isHypertrophicFormation = false;
    this.model.isPseudarthrosis = false;
    this.model.isHypertrophicOsteophytes = false;
    this.model.synovialOriginType = SynovialOriginTypeEnum.None;
    this.model.maxDiameter = null;
    this.model.secondLevel = null;
    this.model.thirdLevel = null;
    this.model.length = null;
    this.model.neurogeneOriginType = NeurogeOriginTypeEnum.None;
    this.model.softTissueSpaceRequirementType = SoftTissueOriginTypeEnum.None;
    this.removeError();
  }
  removeError() {
    this.validationHelperService.removeError(nameof<NerveCompressionFindingUiModel>(m => m.isOsTriquetrum));
    this.validationHelperService.removeError(nameof<NerveCompressionFindingUiModel>(m => m.isOsPisiforme));
    this.validationHelperService.removeError(nameof<NerveCompressionFindingUiModel>(m => m.isOsHamatum));
  }
  resetInputs() {
    if (this.model.maxDiameter === null) {
      this.model.secondLevel = null;
      this.model.thirdLevel = null;
    }

    if (this.model.secondLevel === null) {
      this.model.thirdLevel = null;
    }
  }
}
