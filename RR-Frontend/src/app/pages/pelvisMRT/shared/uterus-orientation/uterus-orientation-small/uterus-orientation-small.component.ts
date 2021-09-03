import { Component, Input } from '@angular/core';
import { UterusOrientation } from '@models/pelvisMRT/ui/localizers/uterus-orientation';

@Component({
  selector: 'rr-uterus-orientation-small',
  templateUrl: './uterus-orientation-small.component.html',
  styleUrls: ['./uterus-orientation-small.component.scss']
})
export class UterusOrientationSmallComponent {
  @Input() uterusOrientation: UterusOrientation;

  constructor() {
    this.uterusOrientation = this.uterusOrientation || new UterusOrientation();
  }
  isElementChecked(orientation: string): boolean {
    return this.uterusOrientation[orientation];
  }
}
