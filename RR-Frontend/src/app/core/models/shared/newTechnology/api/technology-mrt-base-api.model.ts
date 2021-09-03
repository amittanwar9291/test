import { ReportModelBase } from '@models/report-model-base';

import { SideEffectApiBaseModel } from './side-effect-api-base.model';
import { SequenceApiBaseModel } from './sequence-api-base.model';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SequencesTypeEnum } from '@enums/shared/technology/sequences-type.enum';
import { MagneticFieldStrengthTypeEnum } from '@enums/shared/technology/magnetic-field-strength-type.enum';

export class TechnologyMrtBaseApiModel<TSequences extends SequenceApiBaseModel> extends ReportModelBase {
  // Contrast Medium 1st column
  cmReinforcedType: SimpleAnswerEnum;
  contrastMediumType: string;
  contrastQuantity: number;
  magneticFieldStrengthType: MagneticFieldStrengthTypeEnum;

  // Contrast Medium 2nd and 3rd column
  isCMSideEffect: boolean;
  cmSideEffects: SideEffectApiBaseModel[];

  // Contrast Medium 4th column
  isH1BlockerIV: boolean;
  isH2BlockerIV: boolean;
  isCortisoneIV: boolean;
  isO2Administration: boolean;
  isSubcutaneousEpinephrine: boolean;
  isNotFurtherSpecified: boolean;
  barcodeCMCharge: string;

  // Sequences 2nd and 3rd column
  setName: string;
  sequencesType: SequencesTypeEnum;
  sequences: TSequences[];

  // Sequences 4th column
  isMotion: boolean;
  isOther: boolean;

  constructor() {
    super();

    // Contrast Medium 1st column
    this.cmReinforcedType = SimpleAnswerEnum.None;
    this.contrastMediumType = 'None';
    this.contrastQuantity = null;
    this.magneticFieldStrengthType = MagneticFieldStrengthTypeEnum.None;

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

    // Sequences 2nd and 3rd column
    this.setName = '';
    this.sequencesType = SequencesTypeEnum.Auto;
    this.sequences = [];

    // Sequences 4th column
    this.isMotion = false;
    this.isOther = false;
  }
}
