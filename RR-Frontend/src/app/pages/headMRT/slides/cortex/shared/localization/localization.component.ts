import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CortexFindingUiModel } from '@models/headMRT/ui/cortex/cortex-finding-ui.model';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import {
  ClassificationWHOTypeEnum,
  DetailsTypeEnum,
  LocalizationTypeEnum,
  CortexDifferentialDiagnosisTypeEnum,
  ClassificationFazekasTypeEnum,
  CortexFindingTypeEnum
} from '@enums/headMRT/cortex';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { CortexHelperService } from '../../cortex-helper.service';
import { HistologyKnownTypeEnum } from '@enums/headMRT/common/histology-known-type.enum';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent implements OnInit, OnDestroy {
  constructor(private translateService: TranslateService, private cortexHelperService: CortexHelperService) {}

  @Input() model: CortexFindingUiModel;
  @Input() whoCondition: string[];
  @Input() classificationFazekasOptions: DropdownModel[];
  @Input() differentialDiagnosisOptions01: DropdownModel[];
  @Input() classificationWhoOptions: DropdownModel[];
  @Input() classificationAdamsOptions: DropdownModel[];

  subscriptions: Subscription[] = [];
  localizationTypeOptions: DropdownModel[];
  whoConditionArray = [];

  findingEnum = CortexFindingTypeEnum;
  histologyKnownTypeEnum = HistologyKnownTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  differentialDiagnosisEnum = CortexDifferentialDiagnosisTypeEnum;
  sideTypeEnum = SideTypeEnum;
  detailsTypeEnum = DetailsTypeEnum;
  localizationTypeEnum = LocalizationTypeEnum;

  ngOnInit() {
    this.initTranslations();
    this.whoConditionArray = this.whoCondition;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headMRT.cortex.lokalisationMarklager').subscribe((out: DropdownModel[]) => {
        this.localizationTypeOptions = Object.values(out);
      })
    );
  }

  openLargeLocalizer() {
    this.cortexHelperService.largeLocalizerOpen.next('cortex');
  }

  resetDifferentialDiagnosisDependantModel(): void {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.localizationFazekasScale = ClassificationFazekasTypeEnum.None;
    this.model.localizationWHOClassification = ClassificationWHOTypeEnum.None;
  }

  whoConditionFunction = param => this.whoConditionArray.includes(param);

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
