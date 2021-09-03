import { Component, Input } from '@angular/core';
import { CapsuleAndRibbonsFindingUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { SectionTypeEnum } from '@enums/handMRT/capsule-and-ribbons/section-type.enum';
import { CollateralLigamentInjuryTypeEnum } from '@enums/handMRT/capsule-and-ribbons/collateral-ligament-injury-type.enum';
import { LigamentumCollateraleUlnareTypeEnum } from '@enums/handMRT/capsule-and-ribbons/ligamentum-collaterale-ulnare-type.enum';

@Component({
  selector: 'rr-d1',
  templateUrl: './D1.component.html',
  styleUrls: ['./D1.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class D1Component {
  @Input() model: CapsuleAndRibbonsFindingUiModel;

  sectionType: typeof SectionTypeEnum;
  collateralLigamentInjuryType: typeof CollateralLigamentInjuryTypeEnum;
  ligamentumCollateraleUlnareType: typeof LigamentumCollateraleUlnareTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums(): void {
    this.sectionType = SectionTypeEnum;
    this.collateralLigamentInjuryType = CollateralLigamentInjuryTypeEnum;
    this.ligamentumCollateraleUlnareType = LigamentumCollateraleUlnareTypeEnum;
  }
}
