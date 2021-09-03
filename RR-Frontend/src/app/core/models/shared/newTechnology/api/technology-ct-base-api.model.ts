import { AcquisitionApiBaseModel } from '@models/shared/newTechnology/api/acquisition-api-base.model';
import { ReportModelBase } from '@models/report-model-base';
import { ReconstructionApiBaseModel } from '@models/shared/newTechnology/api/reconstruction-api-base.model';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SequencesTypeEnum } from '@enums/shared/technology';
import { SideEffectUiBaseModel } from '@models/shared/newTechnology/ui/side-effect-ui-base.model';

export class TechnologyCtBaseApiModel<
  TAcquisitions extends AcquisitionApiBaseModel<TReconstructions>,
  TReconstructions extends ReconstructionApiBaseModel
> extends ReportModelBase {
  // Contrast Medium 1st column
  cmReinforcedType: SimpleAnswerEnum;
  iodineConcentrationType: string;
  contrastVolumeInMl: number;

  // Contrast Medium 2nd and 3rd column
  isCMSideEffect: boolean;
  cmSideEffects: SideEffectUiBaseModel[];

  // Contrast Medium 4th column
  isH1BlockerIV: boolean;
  isH2BlockerIV: boolean;
  isCortisoneIV: boolean;
  isO2Administration: boolean;
  isSubcutaneousEpinephrine: boolean;
  isNotFurtherSpecified: boolean;
  barcodeCMCharge: string;

  // Acquisitions
  setName: string;
  sequencesType: SequencesTypeEnum; // TODO should also create some ProtocolsTypeEnum alias with the same values to be used in CT modules
  acquisitions: TAcquisitions[];

  // Acquisitions 4th column
  isMotion: boolean;
  isMetalArtifacts: boolean; // TODO remove from the base model when turns out it's not common removed from mammaMRT
  isOther: boolean;

  constructor() {
    super();

    // Contrast Medium 1st column
    this.cmReinforcedType = SimpleAnswerEnum.None;
    this.iodineConcentrationType = 'None';
    this.contrastVolumeInMl = null;

    // Contrast Medium 2nd and 3rd column
    this.isCMSideEffect = false;
    this.cmSideEffects = [];

    // Contrast Medium 4th column
    this.isH1BlockerIV = false;
    this.isH2BlockerIV = false;
    this.isCortisoneIV = false;
    this.isO2Administration = false;
    this.isSubcutaneousEpinephrine = false;
    this.isNotFurtherSpecified = false;
    this.barcodeCMCharge = '';

    // Acquisitions 2nd and 3rd column
    this.setName = '';
    this.sequencesType = SequencesTypeEnum.Auto;
    this.acquisitions = [];

    // Acquisitions 4th column
    this.isMotion = false;
    this.isMetalArtifacts = false;
    this.isOther = false;
  }
}
