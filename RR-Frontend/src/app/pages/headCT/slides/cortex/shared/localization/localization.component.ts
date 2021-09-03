import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CortexFindingUiModel } from '@models/headCT/ui/cortex/cortex-finding-ui-model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { CortexHelperService } from '../../cortex-helper.service';
import { Subscription } from 'rxjs';
import { CortexFindingTypeEnum } from '@enums/shared/head/cortex';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DetailsTypeEnum, LocalizationTypeEnum, ClassificationWHOTypeEnum } from '@enums/shared/head/cortex/focal';
import { DifferentialDiagnosisTypeEnum } from '@enums/headCT/cortex/differential-diagnosis-type.enum';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { HistologyKnownTypeEnum } from '@enums/shared/head/histology-known-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent implements OnInit, OnDestroy {
  constructor(private translateService: TranslateService, private cortexHelperService: CortexHelperService) {}

  @Input() model: CortexFindingUiModel;

  @Input() differentialDiagnosisOptions01: DropdownGroupedModel[];
  @Input() classificationWhoOptions: DropdownModel[];
  @Input() classificationAdamsOptions: DropdownModel[];

  subscriptions: Subscription[] = [];
  localizationTypeOptions: DropdownModel[];

  findingEnum = CortexFindingTypeEnum;
  histologyKnownTypeEnum = HistologyKnownTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  differentialDiagnosisEnum = DifferentialDiagnosisTypeEnum;
  sideTypeEnum = SideTypeEnum;
  detailsTypeEnum = DetailsTypeEnum;
  localizationTypeEnum = LocalizationTypeEnum;

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headCT.cortex.lokalisationMarklager.options').subscribe((out: DropdownModel[]) => {
        this.localizationTypeOptions = out;
      })
    );
  }

  openLargeLocalizer() {
    this.cortexHelperService.largeLocalizerOpen.next(true);
  }

  resetDifferentialDiagnosisDependantModel(): void {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.localizationWHOClassification = ClassificationWHOTypeEnum.None;
  }

  isFulfillsWHOCondition = param => this.cortexHelperService.requiredForWHODropdown.includes(param);

  col4TitleCondition(): boolean {
    return !(
      this.model.cortexLocations.parietalLobeRight ||
      this.model.cortexLocations.parietalLobeLeft ||
      this.model.cortexLocations.occipitalLobeRight ||
      this.model.cortexLocations.occipitalLobeLeft ||
      this.model.cortexLocations.temporalLobeRight ||
      this.model.cortexLocations.temporalLobeLeft ||
      this.model.cortexLocations.cerebellum
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
