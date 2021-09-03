import { Component, Input } from '@angular/core';
import { CapsuleAndRibbonsFindingUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DigitusDTypeEnum } from '@enums/handMRT/capsule-and-ribbons/digitus-d-type.enum';

@Component({
  selector: 'rr-ligament-lesions-of-the-fingers',
  templateUrl: './ligament-lesions-of-the-fingers.component.html',
  styleUrls: ['./ligament-lesions-of-the-fingers.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LigamentLesionsOfTheFingersComponent {
  @Input() model: CapsuleAndRibbonsFindingUiModel;

  digitusDType: typeof DigitusDTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums(): void {
    this.digitusDType = DigitusDTypeEnum;
  }

  isD2toD5(): boolean {
    return this.model.localizationType !== this.digitusDType.D1 && this.model.localizationType !== this.digitusDType.None;
  }
}
