import { Component, Input } from '@angular/core';
import { FigoClassification } from '@models/pelvisMRT/ui/localizers/figo-classification';

@Component({
  selector: 'rr-figo-classification-small',
  templateUrl: './FIGO-classification-small.component.html',
  styleUrls: ['./FIGO-classification-small.component.scss']
})
export class FIGOClassificationSmallComponent {
  @Input() figoClassification: FigoClassification;

  constructor() {
    this.figoClassification = this.figoClassification || new FigoClassification();
  }
  isElementChecked(orientation: string): boolean {
    return this.figoClassification[orientation];
  }
}
