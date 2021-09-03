import { FindingBase } from '@models/shared/finding/finding.base';
import { AnamnesisFindingTypeEnum } from '@enums/thoraxMRT/anamnesis/anamnesis-finding-type.enum';
import { SideTypeEnum } from '@enums/thoraxMRT/anamnesis/side-type.enum';

export class AnamnesisFindingUiModel extends FindingBase {
  anamnesisFindingType: AnamnesisFindingTypeEnum;
  cigarettePacksPerDay: number;
  isAorticValveTavi: boolean;
  isCoronary: boolean;
  isThoracicAortaTevar: boolean;
  sideType: SideTypeEnum;
  isAfterPartialLungResectionRight: boolean;
  isAfterPartialLungResectionLeft: boolean;

  constructor() {
    super();
    this.anamnesisFindingType = AnamnesisFindingTypeEnum.None;
    this.cigarettePacksPerDay = null;
    this.isAorticValveTavi = false;
    this.isCoronary = false;
    this.isThoracicAortaTevar = false;
    this.sideType = SideTypeEnum.None;
    this.isAfterPartialLungResectionRight = false;
    this.isAfterPartialLungResectionLeft = false;
  }
}
