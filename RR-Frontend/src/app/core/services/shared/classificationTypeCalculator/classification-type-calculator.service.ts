import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassificationTypeCalculatorService {
  checkClassificationType(propertyToCheck: number): string {
    if (!propertyToCheck) {
      return 'Skip';
    } else if (propertyToCheck <= 8) {
      return 'LessThanOrEqual';
    } else if (propertyToCheck > 8) {
      return 'GreaterThan';
    }
  }
}
