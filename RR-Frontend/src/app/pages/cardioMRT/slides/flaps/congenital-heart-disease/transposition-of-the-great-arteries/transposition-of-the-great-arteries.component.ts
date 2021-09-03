import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CongenitalHeartDiseasesFindingUiModel } from '@models/cardioMRT/ui/flaps/congenital-heart-diseases-finding-ui.model';
import { TranspositionOfTheGreatArteriesType } from '@enums/cardioMRT/flaps';

@Component({
  selector: 'rr-transposition-of-the-great-arteries',
  templateUrl: './transposition-of-the-great-arteries.component.html',
  styleUrls: ['../../flaps.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TranspositionOfTheGreatArteriesComponent {
  @Input() model: CongenitalHeartDiseasesFindingUiModel;

  transpositionOfTheGreatArteriesType: typeof TranspositionOfTheGreatArteriesType;

  constructor() {
    this.transpositionOfTheGreatArteriesType = TranspositionOfTheGreatArteriesType;
  }
}
