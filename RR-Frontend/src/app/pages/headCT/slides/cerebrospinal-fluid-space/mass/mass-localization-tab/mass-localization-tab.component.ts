import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { CerebrospinalMassDiagnosisTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/cerebrospinal-mass-diagnosis-type.enum';
import { HistologyKnownTypeEnum } from '@enums/headCT/common/histology-known-type.enum';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-mass-localization-tab',
  templateUrl: './mass-localization-tab.component.html',
  styleUrls: ['./mass-localization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassLocalizationTabComponent implements OnDestroy {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;
  w046: DropdownGroupedModel[];
  w046Subscription: Subscription;

  descriptionTypeEnum = DescriptionTypeEnum;
  cerebrospinalMassDiagnosisTypeEnum = CerebrospinalMassDiagnosisTypeEnum;
  histologyKnownTypeEnum = HistologyKnownTypeEnum;

  mandatoryLocalisationCheckboxes = [
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isLateralVentricle),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isForamenMonroi),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isIIIVentricle),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isAquaeductusMesencephaliSylvii),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isIVVentricle),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isForamenLuschkae),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isForamenMagendie),
    nameof<CerebrospinalFluidSpaceFindingUiModel>(m => m.isSubarachnoidCisterns)
  ].join(' ');

  constructor(private translate: TranslateService) {
    this.w046Subscription = translate
      .stream('headCT.cerebrospinalFluidSpace.w046.options')
      .subscribe((out: DropdownGroupedModel[]) => (this.w046 = out));
  }

  onMassDifferentialDiagnosisIKnow1TypeChange() {
    this.model.isSubordinate = false;
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
  }

  ngOnDestroy() {
    this.w046Subscription.unsubscribe();
  }
}
