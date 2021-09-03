import { Injectable } from '@angular/core';
import { compact } from 'lodash';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import {
  FormErrorElement,
  FormErrorFinding,
  IValidationDefaultFindingsPage,
  IValidationFindingBase,
  IValidationModel,
  IValidationModelElement,
  IValidationModelFinding
} from '@models/shared/validation/form-validation.models';
import {
  flatInvalidFields,
  getFindingsInModelToBeValidate,
  getModelValue,
  getModelValueAsBoolean,
  isValidateConditionFulfilled,
  noFinding,
  validateFindingPageBaseElements,
  validateWithCustomRequiredValue,
  valueNotSet
} from '@services/shared/validation/validation-utilities';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { ValidationDataService } from '@services/shared/validation/validation-data.service';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  constructor(
    private enumMapper: EnumMapper,
    private formValidationHelperService: ValidationHelperService,
    private validationDataService: ValidationDataService
  ) {}

  isValid(): boolean {
    if (this.formValidationHelperService.noValidation()) {
      return true;
    }
    const formValidator: IValidationModel = this.validationDataService.currentPageValidator.getValue();
    const pageData = this.validationDataService.currentPageData.getValue();
    let invalidFields: Array<FormErrorElement | FormErrorFinding> = [];

    if (pageData && !!(pageData as IValidationDefaultFindingsPage).findings) {
      invalidFields.push(validateFindingPageBaseElements(pageData));
    }

    if (pageData && formValidator) {
      if (formValidator.elements && formValidator.elements.length > 0) {
        invalidFields = invalidFields.concat(this.validateElements(formValidator.elements));
      }
      if (formValidator.finding && formValidator.finding.length > 0 && !noFinding(pageData)) {
        invalidFields = invalidFields.concat(
          this.validateFindings(formValidator.finding, (this.validationDataService.currentPageData.getValue() as any).findings, null)
        );
      }
    }
    return this.getValidationResult(invalidFields);
  }

  private getValidationResult(invalidFields: Array<FormErrorElement | FormErrorFinding>): boolean {
    const invalidFieldsCompacted = compact(flatInvalidFields(invalidFields));
    if (invalidFieldsCompacted.length !== 0) {
      this.formValidationHelperService.setError(invalidFieldsCompacted);
      return false;
    } else {
      return true;
    }
  }

  private validateElements(elementsValidators: IValidationModelElement[]): Array<FormErrorElement | FormErrorFinding> {
    let invalidElements: Array<FormErrorElement | FormErrorFinding> = [];
    elementsValidators.forEach((elem: IValidationModelElement) => {
      invalidElements.push(this.validateStandAloneElement(elem));

      if (elem.finding && elem.finding.length > 0) {
        const findingsValidators: IValidationModelFinding[] = elem.finding;
        const findingsModel: IValidationFindingBase[] = this.getFindingsToBeValidate(elem);
        const findingTypeModelName = elem.findingTypeModelName;

        invalidElements = invalidElements.concat(this.validateFindings(findingsValidators, findingsModel, findingTypeModelName));
      }
    });
    return invalidElements;
  }

  private validateFindings(
    findingsValidators: IValidationModelFinding[],
    findingsModel: IValidationFindingBase[],
    findingTypeModelName: string
  ): FormErrorFinding[] {
    const invalidFindings: FormErrorFinding[] = [];
    findingsModel.forEach((findingModel: IValidationFindingBase) => {
      const findingValidator: IValidationModelFinding = this.getFindingValidator(findingModel, findingsValidators, findingTypeModelName);
      if (findingValidator) {
        invalidFindings.push(this.validateFinding(findingModel, findingValidator));
      }
    });
    return invalidFindings;
  }

  private getFindingValidator(
    findingModel: IValidationFindingBase,
    allFindingsValidators: IValidationModelFinding[],
    findingTypeModelName: string
  ): IValidationModelFinding {
    const findingName = findingTypeModelName ? findingModel[findingTypeModelName] : findingModel.findingType;
    return allFindingsValidators.find(elem => elem.findingName === findingName);
  }

  private getFindingsToBeValidate(data: IValidationModelElement | IValidationModel, nestedIn?): IValidationFindingBase[] {
    const isIValidationModelElement = (o): o is IValidationModelElement => 'modelName' in o;
    const findingsValidatorsArray: IValidationModelFinding[] = data.finding;

    let allFindingsInModel: IValidationFindingBase[];
    let findingTypeModelName: string;

    if (isIValidationModelElement(data)) {
      allFindingsInModel = (this.validationDataService.currentPageData.getValue() as any)[data.modelName as string];
      findingTypeModelName = data.findingTypeModelName;
    } else {
      allFindingsInModel = (this.validationDataService.currentPageData.getValue() as any).findings;
    }

    return getFindingsInModelToBeValidate(findingsValidatorsArray, allFindingsInModel, findingTypeModelName);
  }

  // Validate stand-alon checkboxes, radioGroups, checkboxesGroups, localizers
  // if input is invalid returns its model name
  private validateStandAloneElement(validatedElement: IValidationModelElement): FormErrorElement {
    if (
      validatedElement.validateCondition &&
      !isValidateConditionFulfilled(validatedElement, this.validationDataService.currentPageData.getValue())
    ) {
      return;
    }
    if (Array.isArray(validatedElement.modelName)) {
      return this.validateGroupedElements(validatedElement, this.validationDataService.currentPageData.getValue());
    } else {
      return this.validateSingleElement(validatedElement, this.validationDataService.currentPageData.getValue());
    }
  }

  // Validate pages with findings
  // Within each finding validates its checkboxes, radioGroups, checkboxesGroups, localizers
  // if an input is invalid returns its model name

  private validateFinding(findingModel: IValidationFindingBase, findingValidator: IValidationModelFinding): FormErrorFinding {
    let findingErrors: Array<FormErrorElement | FormErrorFinding> = [];
    findingValidator.elements.forEach((elem: IValidationModelElement) => {
      if (elem.validateCondition && !isValidateConditionFulfilled(elem, findingModel)) {
        return;
      }
      if (findingModel.isDeleted) {
        return;
      }
      if (elem.finding) {
        findingErrors = findingErrors.concat(
          this.validateFindings(elem.finding, (findingModel as any)[elem.modelName as string], elem.findingTypeModelName)
        );
      }
      if (Array.isArray(elem.modelName)) {
        findingErrors.push(this.validateGroupedElements(elem, findingModel));
      } else {
        findingErrors.push(this.validateSingleElement(elem, findingModel));
      }
    });
    const findingErrorsCompacted = compact(findingErrors);
    return findingErrorsCompacted.length > 0
      ? new FormErrorFinding(findingValidator.findingName, findingModel.validationId, findingErrorsCompacted)
      : null;
  }

  private validateGroupedElements(validationModel: IValidationModelElement, currentModel): FormErrorElement {
    const modelNames = validationModel.modelName as string[];
    const validModelValues = compact(modelNames.map(modelName => getModelValueAsBoolean(modelName, currentModel)));
    if (validModelValues.length === 0) {
      return new FormErrorElement(modelNames, validationModel.customMessage);
    }
  }

  private validateSingleElement(validationModel: IValidationModelElement, currentModel): FormErrorElement {
    const modelName = validationModel.modelName as string;
    const modelValue = getModelValue(modelName, currentModel);

    if (validationModel.requiredValue) {
      return validateWithCustomRequiredValue(validationModel, currentModel);
    }
    if (validationModel.isLocalizer) {
      const localizerValue = this.enumMapper.mapToString(modelValue);
      if (valueNotSet(localizerValue)) {
        return new FormErrorElement(modelName, validationModel.customMessage);
      }
    } else if (valueNotSet(modelValue)) {
      return new FormErrorElement(modelName, validationModel.customMessage);
    }
  }
}
