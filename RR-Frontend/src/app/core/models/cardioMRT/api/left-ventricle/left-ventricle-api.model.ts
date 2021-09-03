import { ReportModelBase } from '@models/report-model-base';
import { CardioRelaxationTimeApiModel } from '@models/cardioMRT/api/left-ventricle/cardio-relaxation-time-api.model';
import { CardioKineticDisorderLocalizerApiModel } from '@models/cardioMRT/api/left-ventricle/cardio-kinetic-disorder-localizer-api.model';
import { CardioPerfusionDefectLocalizerApiModel } from '@models/cardioMRT/api/left-ventricle/cardio-perfusion-defect-localizer-api.model';
import { CardioLGELocalizerApiModel } from '@models/cardioMRT/api/left-ventricle/cardio-LGE-localizer-api.model';
import { PerfusionTypeEnum } from '@enums/cardioMRT/left-ventricle/perfusion-type.enum';
import { FileApiModel } from '@models/shared/uploader/file-api.model';

export class LeftVentricleApiModel extends ReportModelBase {
  reportTypeName: string;

  // COLUMN 1
  // Morphology dropdowns
  myocardialEdemaType: string;
  wallThickeningType: string;
  wallThinningType: string;
  hypointensMyokType: string;
  // Morphology edition dialog
  myocardialEdemaLocalizer: string;
  wallThickeningLocalizer: string;
  wallThinningLocalizer: string;
  reducedMyocardialSignalT1wT2wLocalizer: string;

  // COLUMN 2
  isFunction: boolean;
  isKineticDisorder: boolean;
  isMidVentricularWallMovementDisorder: boolean;
  isApicalBallooning: boolean;
  isAneurysm: boolean;
  functionType: string;
  // Kinetic disorder edition dialog
  kineticDisorderLocalizer: CardioKineticDisorderLocalizerApiModel;

  // COLUMN 3
  isPerfusion: boolean;
  perfusionType: PerfusionTypeEnum;
  // Perfusion edition dialog
  perfusionDefectLocalizer: CardioPerfusionDefectLocalizerApiModel;

  // COLUMN 4
  isLGE: boolean;
  lgePictureNumber: string;
  lgeSerialNumber: string;
  lgeImageFile: FileApiModel;
  lgeImageFileId: string;
  lgeType: string;
  distributionType: string;
  // LGE edition dialog
  lgeSegmentalLocalizer: CardioLGELocalizerApiModel;

  // COLUMN 5
  isT1: boolean;
  isT2: boolean;
  isT1Gd: boolean;
  isT2Asterisk: boolean;
  valueMyocardiumInMs: number;
  referenceValueOfMyocardiumInMs: number;

  // Relaxation time edition dialog
  t1Localizer: CardioRelaxationTimeApiModel;
  t2Localizer: CardioRelaxationTimeApiModel;
  t1GdLocalizer: CardioRelaxationTimeApiModel;

  t1PictureNumber: string;
  t1SerialNumber: string;
  t1ImageFile: FileApiModel;
  t1ImageFileId: string;

  t2PictureNumber: string;
  t2SerialNumber: string;
  t2ImageFile: FileApiModel;
  t2ImageFileId: string;

  t1GdPictureNumber: string;
  t1GdSerialNumber: string;
  t1GdImageFile: FileApiModel;
  t1GdImageFileId: string;

  constructor() {
    super();

    this.reportTypeName = 'CardioMRT_LeftVentricle';

    this.myocardialEdemaType = 'None';
    this.wallThickeningType = 'None';
    this.wallThinningType = 'None';
    this.hypointensMyokType = 'None';

    this.myocardialEdemaLocalizer = 'None';
    this.wallThickeningLocalizer = 'None';
    this.wallThinningLocalizer = 'None';
    this.reducedMyocardialSignalT1wT2wLocalizer = 'None';

    this.isFunction = false;
    this.isKineticDisorder = false;
    this.isMidVentricularWallMovementDisorder = false;
    this.isApicalBallooning = false;
    this.isAneurysm = false;
    this.functionType = 'None';

    this.kineticDisorderLocalizer = new CardioKineticDisorderLocalizerApiModel();

    this.isPerfusion = false;
    this.perfusionType = PerfusionTypeEnum.None;
    this.perfusionDefectLocalizer = new CardioPerfusionDefectLocalizerApiModel();

    this.isLGE = false;
    this.lgePictureNumber = '';
    this.lgeSerialNumber = '';
    this.lgeImageFile = null;
    this.lgeImageFileId = null;
    this.lgeType = 'None';
    this.distributionType = 'None';
    this.lgeSegmentalLocalizer = new CardioLGELocalizerApiModel();

    this.isT1 = false;
    this.isT2 = false;
    this.isT1Gd = false;
    this.isT2Asterisk = false;
    this.valueMyocardiumInMs = null;
    this.referenceValueOfMyocardiumInMs = null;

    this.t1Localizer = new CardioRelaxationTimeApiModel();
    this.t2Localizer = new CardioRelaxationTimeApiModel();
    this.t1GdLocalizer = new CardioRelaxationTimeApiModel();

    this.t1PictureNumber = '';
    this.t1SerialNumber = '';
    this.t1ImageFile = null;
    this.t1ImageFileId = null;

    this.t2PictureNumber = '';
    this.t2SerialNumber = '';
    this.t2ImageFile = null;
    this.t2ImageFileId = null;

    this.t1GdPictureNumber = '';
    this.t1GdSerialNumber = '';
    this.t1GdImageFile = null;
    this.t1GdImageFileId = null;
  }
}
