import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

import {
  DemarcationTypeEnum,
  HomogeneityTypeEnum,
  LocalizationAxialTypeEnum,
  LocalizationCraniocaudalRelationTypeEnum
} from '@enums/kneeMRT/soft-parts';
import { SoftPartsDiagnosisTypeEnum } from '@enums/kneeMRT/soft-parts/soft-parts-diagnosis-type.enum';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: SoftPartsFindingUiModel;
  differentialDiagnosisArray: DropdownModel[];
  translationSubscriptions: Subscription[] = [];

  localizationAxialTypeEnum: typeof LocalizationAxialTypeEnum;
  localizationCraniocaudalRelationTypeEnum: typeof LocalizationCraniocaudalRelationTypeEnum;
  demarcationTypeEnum: typeof DemarcationTypeEnum;
  homogeneityTypeEnum: typeof HomogeneityTypeEnum;
  descriptionTypeEnum: typeof DescriptionTypeEnum;

  constructor(private translate: TranslateService) {
    this.localizationAxialTypeEnum = LocalizationAxialTypeEnum;
    this.localizationCraniocaudalRelationTypeEnum = LocalizationCraniocaudalRelationTypeEnum;
    this.demarcationTypeEnum = DemarcationTypeEnum;
    this.homogeneityTypeEnum = HomogeneityTypeEnum;
    this.descriptionTypeEnum = DescriptionTypeEnum;
  }

  ngOnInit() {
    this.initTranslations();
  }

  ngOnDestroy(): void {
    this.translationSubscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('kneeMRT.softParts.differentialDiagnosisListW017.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisArray = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearIsSecondary() {
    this.model.isSecondary = false;
  }
}
