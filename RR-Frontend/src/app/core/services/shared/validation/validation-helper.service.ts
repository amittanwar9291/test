import { Injectable } from '@angular/core';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationDataService } from '@services/shared/validation/validation-data.service';
import {
  FormErrorElement,
  FormErrorFinding,
  IValidationFindingBase,
  IValidationModel,
  IValidationModelElement
} from '@models/shared/validation/form-validation.models';
import { compact, isEqual, clone } from 'lodash';
import { FindingBase } from '@models/shared/finding/finding.base';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { searchForError } from '@services/shared/validation/validation-utilities';

@Injectable({
  providedIn: 'root'
})
export class ValidationHelperService {
  validationLoggerTurnedOff: boolean;
  validationTurnOff: boolean;
  constructor(
    private toastMessageService: ToastMessageService,
    private validationDataService: ValidationDataService,
    private userBasicDataService: UserBasicDataService
  ) {}

  public setError(invalidFields: Array<FormErrorElement | FormErrorFinding>) {
    this.validationDataService.currentPageErrors.next(invalidFields);
    this.validationDataService.currentPageFinalValidation.next(invalidFields);
    this.logInvalidFields(invalidFields);
    this.displayErroredToast();
    this.displayCustomErroredToast(invalidFields);
  }

  public displayErroredToast() {
    this.toastMessageService.showErrorToast(null, 'errors.invalidForm.title');
  }

  private displayCustomErroredToast(invalidFields: Array<FormErrorElement | FormErrorFinding>) {
    invalidFields.forEach((item: FormErrorElement | FormErrorFinding) => {
      if (item instanceof FormErrorFinding) {
        item.errors.forEach(error => {
          if (error.customMessage) {
            this.toastMessageService.showErrorToast(error.customMessage, null);
          }
        });
      } else {
        if (item.customMessage) {
          this.toastMessageService.showErrorToast(item.customMessage, null);
        }
      }
    });
  }

  public clearValidationData() {
    this.toastMessageService.clearAllToasts();
    this.validationDataService.currentPageValidator.next(null);
    this.validationDataService.currentPageData.next(null);
    this.validationDataService.currentPageErrors.next(null);
    this.validationDataService.currentFindingValidationId.next(null);
    this.validationDataService.currentSecondFindingValidationId.next(null);
  }

  // removes error if element become disabled or removed from page
  public removeError(elementName: string, findingValidationId?) {
    const allErrors = this.validationDataService.currentPageErrors.getValue();
    const currentFindingValidationId = findingValidationId || this.validationDataService.currentFindingValidationId.getValue();
    const isElementInErrors = (error: FormErrorElement): boolean => {
      if (Array.isArray(error.name)) {
        return error.name.includes(elementName);
      } else {
        return error.name === elementName;
      }
    };

    const resolveError = (element: FormErrorElement): void => {
      if (element) {
        element.resolved = true;
        this.validationDataService.currentPageErrors.next(allErrors);
      }
    };

    if (allErrors) {
      let elementError: FormErrorElement;
      allErrors.forEach((item: FormErrorElement | FormErrorFinding) => {
        if (item instanceof FormErrorFinding && item.findingId === currentFindingValidationId) {
          elementError = item.errors.find(isElementInErrors);
          resolveError(elementError);
        } else if (item instanceof FormErrorElement) {
          elementError = isElementInErrors(item) ? item : null;
          resolveError(elementError);
        }
      });
    }
  }

  removeAllErrorsInFinding(findingValidationId: string) {
    const allErrors = this.validationDataService.currentPageErrors.getValue();
    allErrors?.forEach((item: FormErrorFinding) => {
      if (item.findingId === findingValidationId) {
        item.errors.forEach(error => (error.resolved = true));
      }
    });
    this.validationDataService.currentPageErrors.next(allErrors);
  }

  removeEmptyFindingListError(findingListPropertyModelName: string) {
    const allErrors = this.validationDataService.currentPageErrors.getValue();
    if (!allErrors) {
      return;
    }

    const findingListError = (allErrors as FormErrorElement[]).find(item => item.name === findingListPropertyModelName);

    if (!findingListError) {
      return;
    }

    findingListError.resolved = true;
    this.validationDataService.currentPageErrors.next(allErrors);
  }

  // updates current displayed finding validation id
  public updateCurrentFindingId(id: string, isSecond?: boolean) {
    if (isSecond) {
      this.validationDataService.currentSecondFindingValidationId.next(id);
    } else {
      this.validationDataService.currentFindingValidationId.next(id);
    }
  }

  public updateElementInValidationModel(elementToUpdate: IValidationModelElement, findingName?: string) {
    const validationModel: IValidationModel = clone(this.validationDataService.currentPageValidator.getValue());
    const findingIndex = validationModel.finding?.findIndex(finding => finding.findingName === findingName);
    const elementToUpdateParent: IValidationModelElement[] =
      findingIndex > -1 ? validationModel.finding[findingIndex].elements : validationModel.elements;

    const elementToUpdateIndex = elementToUpdateParent.findIndex(currentElement => {
      if (Array.isArray(elementToUpdate.modelName) && Array.isArray(currentElement.modelName)) {
        return isEqual((currentElement.modelName as string[]).sort(), (elementToUpdate.modelName as string[]).sort());
      } else {
        return currentElement.modelName === elementToUpdate.modelName;
      }
    });
    if (elementToUpdateIndex > -1) {
      elementToUpdateParent[elementToUpdateIndex] = elementToUpdate;
    } else {
      elementToUpdateParent.push(elementToUpdate);
    }
    this.validationDataService.currentPageValidator.next(validationModel);
  }

  // todo - facilitation of validation red markers implementation - remove when not used
  public logInvalidFields(invalidFieldsCompacted: Array<FormErrorElement | FormErrorFinding>) {
    if (this.validationLoggerTurnedOff) {
      return;
    }
    const errs = invalidFieldsCompacted.map(elem => {
      if (elem instanceof FormErrorElement) {
        return elem.name;
      } else if (elem instanceof FormErrorFinding) {
        return elem.findingName + ': ' + elem.errors.map(er => er.name).toString();
      }
    });
    errs.forEach(e => console.log(e));
  }

  // checks if finding has any errors
  public isFindingInvalid(finding: FindingBase): boolean {
    if ((finding as IValidationFindingBase).findingType === 'None' || !this.validationDataService.currentPageErrors.getValue()) {
      return false;
    }

    const allErrors = this.validationDataService.currentPageErrors.getValue();
    let findingAndItsChildrenErrors: FormErrorElement[] = [];
    (allErrors as FormErrorFinding[]).forEach((f: FormErrorFinding) => {
      if (f.findingId === finding.validationId || f.parentFindingId === finding.validationId) {
        findingAndItsChildrenErrors = findingAndItsChildrenErrors.concat(f.errors);
      }
    });

    return findingAndItsChildrenErrors ? compact(findingAndItsChildrenErrors.map(error => !error.resolved)).length > 0 : false;
  }

  // checks if finding element has error
  public isElementInvalid(elementName: string, parentFindingId?: string) {
    const allErrors = this.validationDataService.currentPageErrors.getValue();
    if (!allErrors) {
      return;
    }
    const elementErrorToCheck = searchForError(elementName, allErrors, parentFindingId);
    if (!elementErrorToCheck) {
      return false;
    } else {
      return !elementErrorToCheck.resolved;
    }
  }

  noValidation() {
    return this.validationTurnOff || this.userBasicDataService.userData.getValue().role === 'Viewer';
  }
}
