import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisFindingUiModel } from '@models/hipMRT/ui/anamnesis/anamnesis-finding-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { CartilageTransplantationTypeEnum } from '@enums/hipMRT/anamnesis/cartilage-transplantation-type.enum';
export class AnamnesisUiModel extends ReportModelBase {
  findings: AnamnesisFindingUiModel[];
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
  xRayDate: MonthYearModel;
  isCT: boolean;
  ctDate: MonthYearModel;
  isMRI: boolean;
  mriDate: MonthYearModel;

  constructor() {
    super();

    this.findings = [new AnamnesisFindingUiModel()];
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
    this.xRayDate = new MonthYearModel();
    this.isCT = false;
    this.ctDate = new MonthYearModel();
    this.isMRI = false;
    this.mriDate = new MonthYearModel();
  }
}
