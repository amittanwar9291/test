import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CongenitalHeartDiseasesFindingUiModel } from '@models/cardioMRT/ui/flaps/congenital-heart-diseases-finding-ui.model';
import { VentricleSeptalDefectType } from '@enums/cardioMRT/flaps';

@Component({
  selector: 'rr-ventricle-septal-defect',
  templateUrl: './ventricle-septal-defect.component.html',
  styleUrls: ['../../flaps.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VentricleSeptalDefectComponent {
  @Input() model: CongenitalHeartDiseasesFindingUiModel;

  ventricleSeptalDefectType: typeof VentricleSeptalDefectType;

  constructor() {
    this.ventricleSeptalDefectType = VentricleSeptalDefectType;
  }
}
