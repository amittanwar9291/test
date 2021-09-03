import { Component, Input } from '@angular/core';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-hemorrhage-localization',
  templateUrl: './localization.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() isMale: boolean;
  @Input() isFemale: boolean;

  constructor(private validationHelperService: ValidationHelperService) {}

  localizationGroup = [
    nameof<PeritonealCavityFindingUiModel>(m => m.isIntraperitoneal),
    nameof<PeritonealCavityFindingUiModel>(m => m.isRetroperitoneum),
    nameof<PeritonealCavityFindingUiModel>(m => m.isSubordinate)
  ];

  get isOnlyInteraortocavalSelected(): boolean {
    return (
      this.model.isInteraortocaval &&
      [
        this.model.isAnteriorPararenalSpace,
        this.model.isPosteriorPararenalSpace,
        this.model.isPerirenalSpace,
        this.model.isAnteriorLeafGerotaFascia,
        this.model.isPosteriorLeafGerotaFascia,
        this.model.isLateroconalFascia,
        this.model.isZuckerkandlsFascia,
        this.model.isParaaortic,
        this.model.isParacaval
      ].every(v => v === false)
    );
  }

  conditionallyClearRetroperitoneumBlock(): void {
    if (this.isOnlyInteraortocavalSelected) {
      this.model.isRetroperitoneumRightSide = false;
      this.model.isRetroperitoneumLeftSide = false;

      this.validationHelperService.removeError(nameof<PeritonealCavityFindingUiModel>(m => m.isRetroperitoneumRightSide));
      this.validationHelperService.removeError(nameof<PeritonealCavityFindingUiModel>(m => m.isRetroperitoneumLeftSide));
    }
  }
}
