import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CongenitalHeartDiseasesFindingUiModel } from '@models/cardioMRT/ui/flaps/congenital-heart-diseases-finding-ui.model';
import { ArtialSeptalDefectType, SinusVenosusType } from '@enums/cardioMRT/flaps';

@Component({
  selector: 'rr-atrial-septal-defect',
  templateUrl: './atrial-septal-defect.component.html',
  styleUrls: ['../../flaps.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AtrialSeptalDefectComponent {
  @Input() model: CongenitalHeartDiseasesFindingUiModel;

  artialSeptalDefectType: typeof ArtialSeptalDefectType;
  sinusVenosusType: typeof SinusVenosusType;

  constructor() {
    this.artialSeptalDefectType = ArtialSeptalDefectType;
    this.sinusVenosusType = SinusVenosusType;
  }
}
