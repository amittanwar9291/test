import { FindingBase } from '@models/shared/finding/finding.base';
import { LabrumAndRibbonsFindingType, LabrumMorphologyResultType, DetailsType } from '@enums/shoulderMRT/labrum-and-ribbons';

export abstract class LabrumAndRibbonsFindingBaseUi extends FindingBase {
  findingType: LabrumAndRibbonsFindingType;
  extensionLabrumPathologyDiagnosis1: string;
  labrumMorphologyResultType: LabrumMorphologyResultType;
  isExtensionToLongBicepsTendon: boolean;
  isDislocationIntoJointSpace: boolean;
  isLongitudinalSplitting: boolean;
  isLigGlenohumeraleMedium: boolean;
  isLigGlenohumeraleInferior: boolean;
  isLigGlenohumerale: boolean;
  isMGHL: boolean;
  detailsType: DetailsType;

  constructor() {
    super();
    this.findingType = LabrumAndRibbonsFindingType.None;
    this.extensionLabrumPathologyDiagnosis1 = 'None';
    this.labrumMorphologyResultType = LabrumMorphologyResultType.None;
    this.isExtensionToLongBicepsTendon = false;
    this.isDislocationIntoJointSpace = false;
    this.isLongitudinalSplitting = false;
    this.isLigGlenohumeraleMedium = false;
    this.isLigGlenohumeraleInferior = false;
    this.isLigGlenohumerale = false;
    this.isMGHL = false;
    this.detailsType = DetailsType.None;
  }
}
