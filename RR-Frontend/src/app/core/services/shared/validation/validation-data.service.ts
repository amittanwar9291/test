import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormErrorElement, FormErrorFinding, IValidationModel } from '@models/shared/validation/form-validation.models';
import { IReport } from '@interfaces/report.interface';

@Injectable({
  providedIn: 'root'
})
export class ValidationDataService {
  currentPageValidator = new BehaviorSubject<IValidationModel>(null);
  currentPageData = new BehaviorSubject<IReport>(null);
  currentPageErrors = new BehaviorSubject<Array<FormErrorElement | FormErrorFinding>>(null);
  currentPageFinalValidation = new Subject<Array<FormErrorElement | FormErrorFinding>>();
  currentFindingValidationId = new BehaviorSubject<string>(null);
  currentSecondFindingValidationId = new BehaviorSubject<string>(null);
}
