import { ReportModelBase } from '@models/report-model-base';
import { CardioSingleColorLocalizer } from '@models/cardioMRT/ui/left-ventricle/cardio-single-color-localizer-ui.model';
import { CardioRelaxationTimeUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-relaxation-time-ui.model';
import { CardioLGELocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-LGE-localizer-ui.model';
import { CardioKineticDisorderLocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-kinetic-disorder-localizer-ui.model';
import { CardioPerfusionDefectLocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-perfusion-defect-localizer-ui.model';
import { PerfusionTypeEnum } from '@enums/cardioMRT/left-ventricle/perfusion-type.enum';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';

export class LeftVentricleUiModel extends ReportModelBase {
  reportTypeName: string;

  // COLUMN 1
  // Morphology dropdowns
  myocardialEdemaType: string;
  wallThickeningType: string;
  wallThinningType: string;
  hypointensMyokType: string;
  // Morphology edition dialog
  myocardialEdemaLocalizer: CardioSingleColorLocalizer;
  wallThickeningLocalizer: CardioSingleColorLocalizer;
  wallThinningLocalizer: CardioSingleColorLocalizer;
  reducedMyocardialSignalT1wT2wLocalizer: CardioSingleColorLocalizer;

  // COLUMN 2
  isFunction: boolean;
  isKineticDisorder: boolean;
  isMidVentricularWallMovementDisorder: boolean;
  isApicalBallooning: boolean;
  isAneurysm: boolean;
  functionType: string;
  // Kinetic disorder edition dialog
  kineticDisorderLocalizer: CardioKineticDisorderLocalizerUiModel;

  // COLUMN 3
  isPerfusion: boolean;
  perfusionType: PerfusionTypeEnum;
  // Perfusion edition dialog
  perfusionDefectLocalizer: CardioPerfusionDefectLocalizerUiModel;

  // COLUMN 4
  isLGE: boolean;
  lgeReferencePicture: ReferencePictureUiModel;
  lgeType: string;
  distributionType: string;
  // LGE edition dialog
  lgeSegmentalLocalizer: CardioLGELocalizerUiModel;

  // COLUMN 5
  isT1: boolean;
  isT2: boolean;
  isT1Gd: boolean;
  isT2Asterisk: boolean;
  valueMyocardiumInMs: number;
  referenceValueOfMyocardiumInMs: number;

  // Relaxation time edition dialog
  t1Localizer: CardioRelaxationTimeUiModel;
  t2Localizer: CardioRelaxationTimeUiModel;
  t1GdLocalizer: CardioRelaxationTimeUiModel;

  t1ReferencePicture: ReferencePictureUiModel;
  t2ReferencePicture: ReferencePictureUiModel;
  t1GdReferencePicture: ReferencePictureUiModel;

  constructor() {
    super();

    this.reportTypeName = 'CardioMRT_LeftVentricle';

    this.myocardialEdemaType = 'None';
    this.wallThickeningType = 'None';
    this.wallThinningType = 'None';
    this.hypointensMyokType = 'None';

    this.isFunction = false;
    this.myocardialEdemaLocalizer = new CardioSingleColorLocalizer();
    this.wallThickeningLocalizer = new CardioSingleColorLocalizer();
    this.wallThinningLocalizer = new CardioSingleColorLocalizer();
    this.reducedMyocardialSignalT1wT2wLocalizer = new CardioSingleColorLocalizer();

    this.isKineticDisorder = false;
    this.isMidVentricularWallMovementDisorder = false;
    this.isApicalBallooning = false;
    this.isAneurysm = false;
    this.functionType = 'None';
    this.kineticDisorderLocalizer = new CardioKineticDisorderLocalizerUiModel();

    this.isPerfusion = false;
    this.perfusionType = PerfusionTypeEnum.None;
    this.perfusionDefectLocalizer = new CardioPerfusionDefectLocalizerUiModel();

    this.isLGE = false;
    this.lgeReferencePicture = new ReferencePictureUiModel();
    this.lgeType = 'None';
    this.distributionType = 'None';
    this.lgeSegmentalLocalizer = new CardioLGELocalizerUiModel();

    this.isT1 = false;
    this.isT2 = false;
    this.isT1Gd = false;
    this.isT2Asterisk = false;
    this.valueMyocardiumInMs = null;
    this.referenceValueOfMyocardiumInMs = null;

    this.t1Localizer = new CardioRelaxationTimeUiModel();
    this.t2Localizer = new CardioRelaxationTimeUiModel();
    this.t1GdLocalizer = new CardioRelaxationTimeUiModel();

    this.t1ReferencePicture = new ReferencePictureUiModel();
    this.t2ReferencePicture = new ReferencePictureUiModel();
    this.t1GdReferencePicture = new ReferencePictureUiModel();
  }
}
