import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisFindingApiModel } from '@models/hipMRT/api/anamnesis/anamnesis-finding-api.model';
import { CartilageTransplantationTypeEnum } from '@enums/hipMRT/anamnesis/cartilage-transplantation-type.enum';

export class AnamnesisApiModel extends ReportModelBase {
  findings: AnamnesisFindingApiModel[];
  isEndoprosthesis: boolean;
  isEndoprosthesisRight: boolean;
  isEndoprosthesisLeft: boolean;
  isLabralSurgery: boolean;
  isLabralSurgeryRight: boolean;
  isLabralSurgeryLeft: boolean;
  isOffsetCorrection: boolean;
  isOffsetCorrectionRight: boolean;
  isOffsetCorrectionLeft: boolean;
  isCartilageTransplantation: boolean;
  cartilageTransplantationType: CartilageTransplantationTypeEnum;
  isCartilageTransplantationSideRight: boolean;
  isCartilageTransplantationSideLeft: boolean;
  isXRay: boolean;
  yearOfXRay: number;
  monthOfXRay: number;
  isCT: boolean;
  ctDate: number;
  yearOfCT: number;
  monthOfCT: number;
  isMRI: boolean;
  yearOfMRI: number;
  monthOfMRI: number;

  constructor() {
    super();

    this.findings = [];
    this.isEndoprosthesis = false;
    this.isEndoprosthesisRight = false;
    this.isEndoprosthesisLeft = false;
    this.isLabralSurgery = false;
    this.isLabralSurgeryRight = false;
    this.isLabralSurgeryLeft = false;
    this.isOffsetCorrection = false;
    this.isOffsetCorrectionRight = false;
    this.isOffsetCorrectionLeft = false;
    this.isCartilageTransplantation = false;
    this.cartilageTransplantationType = CartilageTransplantationTypeEnum.None;
    this.isCartilageTransplantationSideRight = false;
    this.isCartilageTransplantationSideLeft = false;
    this.isXRay = false;
    this.yearOfXRay = null;
    this.monthOfXRay = null;
    this.isCT = false;
    this.yearOfCT = null;
    this.monthOfCT = null;
    this.isMRI = false;
    this.yearOfMRI = null;
    this.monthOfMRI = null;
  }
}
