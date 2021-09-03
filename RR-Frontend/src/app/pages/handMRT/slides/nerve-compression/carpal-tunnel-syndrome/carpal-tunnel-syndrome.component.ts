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
import { PostoperativePathogenesisDetailsTypeEnum } from '@enums/handMRT/nerve-compression/carpal-tunnel-syndrome/postoperative-pathogenesis-details-type.enum';

@Component({
  selector: 'rr-carpal-tunnel-syndrome',
  templateUrl: './carpal-tunnel-syndrome.component.html',
  styleUrls: ['./carpal-tunnel-syndrome.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CarpalTunnelSyndromeComponent {
  @Input() model: NerveCompressionFindingUiModel;

  pathogenesisType: typeof PathogenesisTypeEnum;
  secondaryPathogenesisDetailsType: typeof SecondaryPathogenesisDetailsTypeEnum;
  osseousCauseType: typeof OsseousCauseTypeEnum;
  synovialOriginType: typeof SynovialOriginTypeEnum;
  neurogeneOriginType: typeof NeurogeOriginTypeEnum;
  softTissueOriginType: typeof SoftTissueOriginTypeEnum;
  postoperativePathogenesisDetailsType: typeof PostoperativePathogenesisDetailsTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums() {
    this.pathogenesisType = PathogenesisTypeEnum;
    this.secondaryPathogenesisDetailsType = SecondaryPathogenesisDetailsTypeEnum;
    this.osseousCauseType = OsseousCauseTypeEnum;
    this.synovialOriginType = SynovialOriginTypeEnum;
    this.neurogeneOriginType = NeurogeOriginTypeEnum;
    this.softTissueOriginType = SoftTissueOriginTypeEnum;
    this.postoperativePathogenesisDetailsType = PostoperativePathogenesisDetailsTypeEnum;
  }

  clearSecondaryDetails() {
    if (this.model.pathogenesisType !== this.pathogenesisType.Secondary) {
      this.model.secondaryPathogenesisDetailsType = SecondaryPathogenesisDetailsTypeEnum.None;
    }

    this.model.isOsTrapezium = false;
    this.model.isOsTrapezoid = false;
    this.model.isOsCapitatum = false;
    this.model.isOsHamatum = false;
    this.model.osseousCauseType = OsseousCauseTypeEnum.None;
    this.model.isHypertrophicOsteophytes = false;
    this.model.synovialOriginType = SynovialOriginTypeEnum.None;
    this.model.maxDiameter = null;
    this.model.secondLevel = null;
    this.model.thirdLevel = null;
    this.model.neurogeneOriginType = NeurogeOriginTypeEnum.None;
    this.model.softTissueSpaceRequirementType = SoftTissueOriginTypeEnum.None;
    this.model.postoperativePathogenesisDetailsType = PostoperativePathogenesisDetailsTypeEnum.None;
    this.model.isCompleteCut = false;
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
