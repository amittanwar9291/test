import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';

import { SideEffectUiBaseModel } from '@models/shared/newTechnology/ui/side-effect-ui-base.model';
import { AcquisitionUiBaseModel } from '@models/shared/newTechnology/ui/acquisition-ui-base.model';
import { ReportModelBase } from '@models/report-model-base';
import { ReconstructionUiBaseModel } from '@models/shared/newTechnology/ui/reconstruction-ui-base.model';

import { SequencesTypeEnum } from '@enums/shared/technology';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

export class TechnologyCtBaseUiModel<
  TAcquisitions extends AcquisitionUiBaseModel<TReconstructions>,
  TReconstructions extends ReconstructionUiBaseModel
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

  // Acquisitions 2nd and 3rd column
  setName: string;
  sequencesType: SequencesTypeEnum; // TODO should also create some ProtocolsTypeEnum alias with the same values to be used in CT modules
  acquisitions: TAcquisitions[];

  // Acquisitions 4th column
  isMotion: boolean;
  isMetalArtifacts: boolean; // TODO remove from the base model when turns out it's not common removed from mammaMRT
  isOther: boolean;

  constructor(private acquisitionCtor: INoParamConstructor<TAcquisitions>) {
    super();

    // Contrast Medium 1st column
    this.cmReinforcedType = SimpleAnswerEnum.None;
    this.iodineConcentrationType = 'None';
    this.contrastVolumeInMl = null;

    // Contrast Medium 2nd and 3rd column
    this.isCMSideEffect = false;
    this.cmSideEffects = [new SideEffectUiBaseModel()];

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
    this.acquisitions = [new acquisitionCtor()];

    // Acquisitions 4th column
    this.isMotion = false;
    this.isMetalArtifacts = false;
    this.isOther = false;
  }
}
