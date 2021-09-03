import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';
import {
  ClassificationTypeEnum,
  CricothyroidClassificationTypeEnum,
  EntityTypeEnum,
  FractureLocalizationTypeEnum,
  FractureOrientationTypeEnum,
  LuxationLocalizationTypeEnum
} from '@enums/neckMRT/larynx';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-characterization',
  templateUrl: './characterization.component.html',
  styleUrls: ['./characterization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationComponent implements OnDestroy {
  @Input() model: LarynxFindingUiModel;

  subscriptions: Subscription[] = [];

  softTissueLocalizationOptions: DropdownModel[];

  classificationType: typeof ClassificationTypeEnum;
  entityType: typeof EntityTypeEnum;
  fractureLocalizationType: typeof FractureLocalizationTypeEnum;
  fractureOrientationType: typeof FractureOrientationTypeEnum;
  luxationLocalizationType: typeof LuxationLocalizationTypeEnum;
  cricothyroidClassificationType: typeof CricothyroidClassificationTypeEnum;

  constructor(private translate: TranslateService) {
    this.classificationType = ClassificationTypeEnum;
    this.entityType = EntityTypeEnum;
    this.fractureLocalizationType = FractureLocalizationTypeEnum;
    this.fractureOrientationType = FractureOrientationTypeEnum;
    this.luxationLocalizationType = LuxationLocalizationTypeEnum;
    this.cricothyroidClassificationType = CricothyroidClassificationTypeEnum;

    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('neckMRT.larynx.softTissueLocalizationTypeOptions.options').subscribe((out: DropdownModel[]) => {
        this.softTissueLocalizationOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
