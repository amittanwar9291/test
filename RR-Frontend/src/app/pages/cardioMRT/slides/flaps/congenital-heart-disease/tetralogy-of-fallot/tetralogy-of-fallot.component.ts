import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CongenitalHeartDiseasesFindingUiModel } from '@models/cardioMRT/ui/flaps/congenital-heart-diseases-finding-ui.model';

@Component({
  selector: 'rr-tetralogy-of-fallot',
  templateUrl: './tetralogy-of-fallot.component.html',
  styleUrls: ['../../flaps.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TetralogyOfFallotComponent {
  @Input() model: CongenitalHeartDiseasesFindingUiModel;
}
