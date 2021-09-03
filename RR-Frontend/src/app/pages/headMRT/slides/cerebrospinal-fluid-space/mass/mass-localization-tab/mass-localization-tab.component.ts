import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HistologyKnownTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/histology-known-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CerebrospinalMassDiagnosisTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-mass-diagnosis-type.enum';

@Component({
  selector: 'rr-mass-localization-tab',
  templateUrl: './mass-localization-tab.component.html',
  styleUrls: ['./mass-localization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassLocalizationTabComponent implements OnInit, OnDestroy {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;

  descriptionTypeEnum = DescriptionTypeEnum;
  histologyKnownTypeEnum = HistologyKnownTypeEnum;
  cerebrospinalMassDiagnosisTypeEnum = CerebrospinalMassDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW042: DropdownModel[];

  localizationValidationGroup =
    'isLateralVentricle isForamenOfMonro isIIIVentricle isAquaeductusMesencephaliSylvii isIVVentricle ' +
    'isForaminaOfLuschka isForamenOfMagendie isSubarachnoidCisterns';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('headMRT.cerebrospinalFluid.w042.options').subscribe((out: DropdownModel[]) => {
        this.ddlW042 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearDDLCheckboxes() {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  clearHistologyKnownBlock() {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
