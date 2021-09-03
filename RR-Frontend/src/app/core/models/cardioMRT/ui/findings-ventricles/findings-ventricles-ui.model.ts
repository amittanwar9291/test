import { ReportModelBase } from '@models/report-model-base';
import { FileUiModel } from '@models/shared/uploader/file-ui.model';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';

export class FindingsVentriclesUiModel extends ReportModelBase {
  // measured-values-lv
  heartRate: number;
  interventricularSeptumThicknessInMm: number;
  lateralInMm: number;
  inferiorInMm: number;
  leftMyocardialMassInG: number;
  leftMyocardialMassAndBSAInGM2: number;
  lvEndDiastolicDiameterInMm: number;
  lvedvInMl: number;
  lvesvInMl: number;
  lvefInPercent: number;
  lvStrokeVolumeInMl: number;
  lvsvAndBSAInMlM2: number;
  lvOutputInLInMin: number;
  lvedvAndBSAInMlM2: number;
  lvesvAndBSAInMlM2: number;
  leftEDTimeInMs: number;
  leftESTimeInMs: number;
  longitudinalInPercent: number;
  circumferentialInPercent: number;
  global3DStrainInPercent: number;
  referencePicture: ReferencePictureUiModel;
  myocardialStrainImage: FileUiModel;
  myocardialStrainImageId: string;
  isLeftHeartFailure: boolean;
  hFpEF: boolean;
  hFmrEF: boolean;
  hFrEF: boolean;

  // measured-rv-atriums
  medioLateralInMm: number;
  anteroLateralInMm: number;
  inferoLateralInMm: number;
  rightMyocardialMassInG: number;
  rightMyocardialMassAndBSAInGM2: number;
  rvEndDiastolicDiameterInMm: number;
  rvedvInMl: number;
  rvesvInMl: number;
  rvefInPercent: number;
  rvStrokeVolumeInMl: number;
  rvsvAndBSAInMlM2: number;
  rvOutputInLInMin: number;
  rvedvAndBSAInMlM2: number;
  rvesvAndBSAInMlM2: number;
  rightEDTimeInMs: number;
  rightESTimeInMs: number;
  isRightHeartFailure: boolean;
  raIn4ChamberViewInMm: number;
  laIn4ChamberViewInMm: number;
  expansion2ndAxisInMm: number;

  constructor() {
    super();

    // measured-values-lv
    this.heartRate = null;
    this.interventricularSeptumThicknessInMm = null;
    this.lateralInMm = null;
    this.inferiorInMm = null;
    this.leftMyocardialMassInG = null;
    this.leftMyocardialMassAndBSAInGM2 = null;
    this.lvEndDiastolicDiameterInMm = null;
    this.lvedvInMl = null;
    this.lvesvInMl = null;
    this.lvefInPercent = null;
    this.lvStrokeVolumeInMl = null;
    this.lvsvAndBSAInMlM2 = null;
    this.lvOutputInLInMin = null;
    this.lvedvAndBSAInMlM2 = null;
    this.lvesvAndBSAInMlM2 = null;
    this.leftEDTimeInMs = null;
    this.leftESTimeInMs = null;
    this.longitudinalInPercent = null;
    this.circumferentialInPercent = null;
    this.global3DStrainInPercent = null;
    this.referencePicture = new ReferencePictureUiModel();
    this.myocardialStrainImage = null;
    this.myocardialStrainImageId = null;
    this.isLeftHeartFailure = false;
    this.hFpEF = false;
    this.hFmrEF = false;
    this.hFrEF = false;

    // measured-rv-atriums
    this.medioLateralInMm = null;
    this.anteroLateralInMm = null;
    this.inferoLateralInMm = null;
    this.rightMyocardialMassInG = null;
    this.rightMyocardialMassAndBSAInGM2 = null;
    this.rvEndDiastolicDiameterInMm = null;
    this.rvedvInMl = null;
    this.rvesvInMl = null;
    this.rvefInPercent = null;
    this.rvStrokeVolumeInMl = null;
    this.rvsvAndBSAInMlM2 = null;
    this.rvOutputInLInMin = null;
    this.rvedvAndBSAInMlM2 = null;
    this.rvesvAndBSAInMlM2 = null;
    this.rightEDTimeInMs = null;
    this.rightESTimeInMs = null;
    this.isRightHeartFailure = false;
    this.raIn4ChamberViewInMm = null;
    this.laIn4ChamberViewInMm = null;
    this.expansion2ndAxisInMm = null;
  }
}
