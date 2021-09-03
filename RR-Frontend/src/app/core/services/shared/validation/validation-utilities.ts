import { filter, isString, isNumber, isFunction, remove, split } from 'lodash';
import {
  FormErrorElement,
  FormErrorFinding,
  IValidationFindingBase,
  IValidationModelCondition,
  IValidationModelElement,
  IValidationModelFinding
} from '@models/shared/validation/form-validation.models';

export function getFindingsInModelToBeValidate(
  findingsValidatorsArray: IValidationModelFinding[],
  allFindingsInModel: IValidationFindingBase[],
  findingTypeModelName?: string
): any[] {
  const namesOfFindingToBeValidate = findingsValidatorsArray.map(elem => elem.findingName);
  return filter(allFindingsInModel, finding =>
    namesOfFindingToBeValidate.includes(findingTypeModelName ? finding[findingTypeModelName] : finding.findingType)
  );
}

export function valueNotSet(modelValue): boolean {
  return modelValue === 'None' || modelValue === '' || modelValue === null || modelValue === false;
}

export function getModelValue(modelName: string, currentModel) {
  if (modelName.includes('.')) {
    const splitedModel = modelName.split('.');
    let valueToReturn = currentModel;
    splitedModel.forEach(elem => {
      valueToReturn = valueToReturn[elem];
    });
    return valueToReturn;
  } else {
    return currentModel[modelName];
  }
}

export function getModelValueAsBoolean(modelName: string, currentModel) {
  const value = getModelValue(modelName, currentModel);
  return typeof value === 'boolean' ? value : value !== 'None' && value !== null && value !== '';
}

export function validateWithCustomRequiredValue(validationModel: IValidationModelElement, currentModel): FormErrorElement {
  const modelName = validationModel.modelName as string;
  const isRequiredValuePrimitive = isString(validationModel.requiredValue) || isNumber(validationModel.requiredValue);
  if (isRequiredValuePrimitive) {
    if (currentModel[modelName] !== validationModel.requiredValue) {
      return new FormErrorElement(modelName, validationModel.customMessage);
    }
  } else if (isFunction(validationModel.requiredValue)) {
    const valueFunction = validationModel.requiredValue as (arg: any) => any;
    if (!valueFunction(currentModel)) {
      return new FormErrorElement(modelName, validationModel.customMessage);
    }
  }
}

export function requiredConditionSet(elementToCompareValue, condition: IValidationModelCondition): boolean {
  if (condition.requiredValue) {
    return elementToCompareValue === condition.requiredValue;
  } else {
    return !valueNotSet(elementToCompareValue);
  }
}

export function isValidateConditionFulfilled(validatedElement: IValidationModelElement, currentModel) {
  const customConditionFunction = validatedElement.validateCondition.customConditionFunction;
  if (customConditionFunction) {
    return customConditionFunction(currentModel);
  } else {
    const currentModelValue = getModelValue(validatedElement.validateCondition.modelName, currentModel);
    return requiredConditionSet(currentModelValue, validatedElement.validateCondition);
  }
}

export function noFinding(currentPageData) {
  return currentPageData.findings.length === 0 || valueNotSet(currentPageData.findings[0].findingType);
}

export function flatInvalidFields(invalidFields: Array<FormErrorElement | FormErrorFinding>): Array<FormErrorElement | FormErrorFinding> {
  invalidFields.forEach(parent => {
    if (parent instanceof FormErrorFinding) {
      parent.errors.forEach(child => {
        if (child instanceof FormErrorFinding) {
          child.parentFindingId = parent.findingId;
          invalidFields.push(child);
        }
      });
      remove(parent.errors, child => child instanceof FormErrorFinding);
    }
  });
  return invalidFields;
}

export function validateFindingPageBaseElements(currentPageData: any): FormErrorElement {
  const areFindingsValue = currentPageData.areFindings;
  if (valueNotSet(areFindingsValue)) {
    return new FormErrorElement('areFindings');
  } else if (areFindingsValue === 'True' && noFinding(currentPageData)) {
    return new FormErrorElement('findings');
  }
}

export function searchForError(
  elementName: string,
  allErrors: Array<FormErrorElement | FormErrorFinding>,
  parentFindingId: string
): FormErrorElement {
  if (parentFindingId) {
    const parentFindingError: FormErrorFinding = (allErrors as FormErrorFinding[]).find(elem => elem.findingId === parentFindingId);
    return parentFindingError?.errors?.find(elem => elem.name === elementName);
  } else {
    return (allErrors as FormErrorElement[])?.find(elem => elem.name === elementName);
  }
}

export function getAsAnArray(data: Array<string> | string): Array<string> {
  return Array.isArray(data) ? data : split(data as string, ' ');
}
