import { OtherApplicationsTypeEnum } from '@enums/headMRT/technology/other-applications-type.enum';
import { SequenceApiBaseModel } from '@models/shared/newTechnology/api/sequence-api-base.model';

export class SequenceApiModel extends SequenceApiBaseModel {
  // First Column
  otherApplicationsType: OtherApplicationsTypeEnum;
  isCineImaging: boolean;

  // Second column
  isHighResolution: boolean;
  isChemicalShiftImaging: boolean;
  isCompressedSense: boolean;
  isDynamicsAfterContrastInjection: boolean;
  isSubtraction: boolean;
  isEpiDwi: boolean;
  isHasteNonEpiDwi: boolean;
  isADCMap: boolean;
  isCalculated: boolean;

  constructor() {
    super();

    // First Column
    this.otherApplicationsType = OtherApplicationsTypeEnum.None;
    this.isCineImaging = false;

    // Second column
    this.isHighResolution = false;
    this.isChemicalShiftImaging = false;
    this.isCompressedSense = false;
    this.isDynamicsAfterContrastInjection = false;
    this.isSubtraction = false;
    this.isEpiDwi = false;
    this.isHasteNonEpiDwi = false;
    this.isADCMap = false;
    this.isCalculated = false;
  }
}
