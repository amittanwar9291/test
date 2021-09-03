import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LimitationTypeEnum } from '@enums/feetMRT/soft-tissue';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

@Component({
  selector: 'rr-bursitis',
  templateUrl: './bursitis.component.html',
  styleUrls: ['./bursitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BursitisComponent {
  @Input() model: SoftTissueFindingUiModel;
  limitationTypeEnum: typeof LimitationTypeEnum;

  bursitisValidationGroup =
    'isBursaMetatarsophalangealis ' +
    'isMetatarsalBursa ' +
    'isBursaIntermetatarsale ' +
    'isBursaSubcutaneaCalcanea ' +
    'isBursaRetrocalcaneal ' +
    'isBursaSubcutaneaMedialMalleolus ' +
    'isBursaSubcutaneaLateralMalleolus';

  constructor() {
    this.limitationTypeEnum = LimitationTypeEnum;
  }

  setBursaArray(): boolean[] {
    const {
      isBursaMetatarsophalangealis,
      isMetatarsalBursa,
      isBursaIntermetatarsale,
      isBursaSubcutaneaCalcanea,
      isBursaRetrocalcaneal,
      isBursaSubcutaneaMedialMalleolus,
      isBursaSubcutaneaLateralMalleolus
    } = this.model;
    return [
      isBursaMetatarsophalangealis,
      isMetatarsalBursa,
      isBursaIntermetatarsale,
      isBursaSubcutaneaCalcanea,
      isBursaRetrocalcaneal,
      isBursaSubcutaneaMedialMalleolus,
      isBursaSubcutaneaLateralMalleolus
    ];
  }

  isBursaChoiceAndClearContent(): boolean {
    const filteredBursaArrayLength = this.setBursaArray().filter(bursaOption => bursaOption).length;
    if (filteredBursaArrayLength !== 1) {
      this.model.limitationType = this.limitationTypeEnum.None;
      this.model.isBleedingIn = false;
      this.model.isMortonNovelty = false;
    }
    if (filteredBursaArrayLength === 0) {
      this.model.maxDiameterBursa = null;
    }

    return filteredBursaArrayLength > 0;
  }

  isBursaSingleChoice(): boolean {
    return this.setBursaArray().filter(bursaOption => bursaOption).length === 1;
  }

  isBursaIntermetatarsaleSingleChoice(): boolean {
    return this.model.isBursaIntermetatarsale && this.isBursaSingleChoice();
  }
}
