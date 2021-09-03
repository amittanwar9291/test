import { SurgicalProcedureTypeEnum } from '@enums/pelvisMRT/anamnesis/surgical-procedure-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { PreviousOperationTypeEnum } from '@enums/pelvisMRT/anamnesis/previous-operation-type.enum';

export class AnamnesisPreviousOperationFindingUiModel extends FindingBase {
  findingType: PreviousOperationTypeEnum;
  date: MonthYearModel;
  isRight: boolean;
  isLeft: boolean;
  isLeftPartial: boolean;
  isRightPartial: boolean;
  sugicalProceduresType: SurgicalProcedureTypeEnum;
  isRadical: boolean;
  isDeep: boolean;
  isAnusPraeter: boolean;
  isHartmannsRectalStump: boolean;
  isPouchReconstruction: boolean;

  constructor() {
    super();

    this.date = new MonthYearModel();
    this.findingType = PreviousOperationTypeEnum.None;
    this.isRight = false;
    this.isLeft = false;
    this.isLeftPartial = false;
    this.isRightPartial = false;
    this.sugicalProceduresType = SurgicalProcedureTypeEnum.None;
    this.isRadical = false;
    this.isDeep = false;
    this.isAnusPraeter = false;
    this.isHartmannsRectalStump = false;
    this.isPouchReconstruction = false;
  }
}
