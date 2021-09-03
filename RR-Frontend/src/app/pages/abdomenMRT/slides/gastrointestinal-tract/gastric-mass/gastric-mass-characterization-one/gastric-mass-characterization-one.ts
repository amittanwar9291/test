import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {
  FormTypeEnum,
  GastricLocalizationTypeEnum,
  GastrointestinalDifferentialDiagnosisTypeEnum,
  GastrointestinalHomogeneityTypeEnum,
  HistologyKnownTypeEnum,
  MarginTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/common';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-gastric-mass-characterization-one',
  templateUrl: './gastric-mass-characterization-one.html',
  styleUrls: ['./gastric-mass-characterization-one.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class GastricMassCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: GastrointestinalTractFindingUiModel;

  differentialDiagnosisOptions: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];
  descriptionType = DescriptionTypeEnum;
  histologyKnownType = HistologyKnownTypeEnum;
  gastricLocalizationType = GastricLocalizationTypeEnum;
  differentialDiagnosisType = GastrointestinalDifferentialDiagnosisTypeEnum;
  marginType = MarginTypeEnum;
  homogeneityType = GastrointestinalHomogeneityTypeEnum;
  formType = FormTypeEnum;

  constructor(private translateService: TranslateService) {}
  ngOnInit() {
    this.initTranslations();
  }
  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService
        .stream('abdomenMRT.gastrointestinal.w035Raumforderung.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.differentialDiagnosisOptions = out))
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  diagnosisDependentReset() {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.isSubordinate = false;
  }
  resetInput() {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    } else if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
}
