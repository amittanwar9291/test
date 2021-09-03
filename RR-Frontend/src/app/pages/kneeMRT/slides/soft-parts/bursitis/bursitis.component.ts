import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { BursitisMarginsTypeEnum } from '@enums/kneeMRT/soft-parts';

@Component({
  selector: 'rr-bursitis',
  templateUrl: './bursitis.component.html',
  styleUrls: ['./bursitis.component.scss', '../soft-parts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BursitisComponent {
  @Input() model: SoftPartsFindingUiModel;

  validationGroup =
    'isBursaSuprapatellar ' +
    'isBursaSubcutaneaPraepatellaris ' +
    'isBursaSubfascialisPraepatellaris ' +
    'isBursaInfrapatellarisProfunda ' +
    'isBursaAnserina ' +
    'isBursaWithinTheInnerBand ' +
    'isBursaSubtendineaMusculiSemimembranosi ' +
    'isBursaTractusIliotibialis ' +
    'isBursaSubtendineaMusculiBicipitisFemorisInferior';

  bursitisMarginsTypeEnum: typeof BursitisMarginsTypeEnum;

  constructor() {
    this.bursitisMarginsTypeEnum = BursitisMarginsTypeEnum;
  }

  isSingleChoice(): boolean {
    const {
      isBursaSuprapatellar,
      isBursaSubcutaneaPraepatellaris,
      isBursaSubfascialisPraepatellaris,
      isBursaInfrapatellarisProfunda,
      isBursaAnserina,
      isBursaWithinTheInnerBand,
      isBursaSubtendineaMusculiSemimembranosi,
      isBursaTractusIliotibialis,
      isBursaSubtendineaMusculiBicipitisFemorisInferior
    } = this.model;

    const bursaArray = [
      isBursaSuprapatellar,
      isBursaSubcutaneaPraepatellaris,
      isBursaSubfascialisPraepatellaris,
      isBursaInfrapatellarisProfunda,
      isBursaAnserina,
      isBursaWithinTheInnerBand,
      isBursaSubtendineaMusculiSemimembranosi,
      isBursaTractusIliotibialis,
      isBursaSubtendineaMusculiBicipitisFemorisInferior
    ];

    return bursaArray.filter(value => value).length === 1;
  }
}
