import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { MeningesDiagnosisType } from '@enums/headCT/meninges/meninges-diagnosis-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HistologyKnownTypeEnum } from '@enums/headCT/common/histology-known-type.enum';

@Component({
  selector: 'rr-mass-localization',
  templateUrl: './mass-localization.component.html',
  styleUrls: ['./mass-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassLocalizationComponent implements OnDestroy {
  @Input() model: MeningesFindingUiModel;
  w020: DropdownGroupedModel[];
  w020Subscription: Subscription;

  descriptionTypeEnum = DescriptionTypeEnum;
  histologyKnownTypeEnum = HistologyKnownTypeEnum;
  meningesDiagnosisType = MeningesDiagnosisType;

  constructor(private translate: TranslateService) {
    this.w020Subscription = this.translate
      .stream('headCT.meninges.w020.options')
      .subscribe((out: DropdownGroupedModel[]) => (this.w020 = out));
  }

  ngOnDestroy() {
    this.w020Subscription.unsubscribe();
  }

  clearDifferentialDiagnosisDependentFields() {
    this.model.isSubordinate = false;
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
  }
}
