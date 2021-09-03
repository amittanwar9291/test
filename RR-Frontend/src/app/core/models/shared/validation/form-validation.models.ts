import { ModelBase } from '@models/model-base';
import { FindingBase } from '@models/shared/finding/finding.base';
import { ReportModelBase } from '@models/report-model-base';

export interface IValidationModel {
  elements?: IValidationModelElement[];
  finding?: IValidationModelFinding[];
}

export interface IValidationModelElement {
  modelName: string | string[];
  requiredValue?: string | number | ((model: ModelBase) => boolean); // if function return false field considered incorrect
  validateCondition?: IValidationModelCondition;
  isLocalizer?: boolean;
  finding?: IValidationModelFinding[];
  findingTypeModelName?: string;
  customMessage?: string;
}

export interface IValidationModelFinding {
  findingName: string;
  elements: IValidationModelElement[];
}

export interface IValidationModelCondition {
  modelName?: string;
  requiredValue?: any;
  customConditionFunction?: (model: ModelBase) => boolean; // if return false validation isn't perform
}

export class FormErrorElement {
  name: string | string[];
  resolved: boolean;
  customMessage: string;
  constructor(name: string | string[], customMessage?: string) {
    this.name = name;
    this.resolved = false;
    this.customMessage = customMessage;
  }
}

export class FormErrorFinding {
  findingName: string;
  findingId: string;
  parentFindingId?: string;
  errors: FormErrorElement[];
  constructor(findingName: string, findingId: string, errors: FormErrorElement[]) {
    this.findingName = findingName;
    this.findingId = findingId;
    this.errors = errors;
  }
}

export interface IValidationFindingBase extends FindingBase {
  findingType: string;
}

export interface IValidationDefaultFindingsPage extends ReportModelBase {
  areFindings: string;
  findings: IValidationFindingBase[];
}
