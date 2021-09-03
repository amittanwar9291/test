import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MusclesAndTendonsFindingUiModel } from '@models/hipMRT/ui/muscles-and-tendons/muscles-and-tendons-finding-ui.model';

import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import {
  BonyAvulsionTypeEnum,
  CharacterizationHaematomaTypeEnum,
  ClassificationMCStatementEnum,
  EdemaLikeSignalIntensityTypeEnum,
  IntramuscularLocalizationTypeEnum,
  MuscularAtrophyTypeEnum,
  PathologyTypeEnum
} from '@enums/hipMRT/muscles-and-tendons';

@Component({
  selector: 'rr-musculature',
  templateUrl: './musculature.component.html',
  styleUrls: ['./musculature.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class MusculatureComponent implements OnInit, OnDestroy {
  @Input() model: MusclesAndTendonsFindingUiModel;

  musculatureLocalizationTypesSub: Subscription;
  musculatureLocalizationOptions: DropdownModel[];
  sideType = DirectionTypeEnum;
  intramuscularLocalizationType = IntramuscularLocalizationTypeEnum;
  pathologyType = PathologyTypeEnum;
  classificationMCStatement = ClassificationMCStatementEnum;
  bonyAvulsionType = BonyAvulsionTypeEnum;
  characterizationHaematomaType = CharacterizationHaematomaTypeEnum;
  edemaLikeSignalIntensityType = EdemaLikeSignalIntensityTypeEnum;
  muscularAtrophyType = MuscularAtrophyTypeEnum;

  constructor(private translate: TranslateService) {
    this.musculatureLocalizationOptions = [];
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  get furtherFindingsPathologyValidationFields(): string {
    return 'isEdemaLikeSignalIntensity isFattyDegeneration isMuscularAtrophy isApophysitis isFascialTear isReducedIschiofemoralDistance';
  }

  private initTranslations(): void {
    this.musculatureLocalizationTypesSub = this.translate
      .stream('hipMRT.musclesAndTendons.musculatureLocalizationTypes.options')
      .subscribe((out: DropdownModel[]) => (this.musculatureLocalizationOptions = out));
  }

  get isLastEmptyColumnForClassMCStatementVisible(): boolean {
    return [ClassificationMCStatementEnum.None, ClassificationMCStatementEnum.MuscularEdema].includes(this.model.classificationMCStatement);
  }

  get isLastEmptyColumnVisible(): boolean {
    switch (this.model.pathologyType) {
      case PathologyTypeEnum.None:
        return true;
      case PathologyTypeEnum.MuscleLesion:
        return this.isLastEmptyColumnForClassMCStatementVisible;
      default:
        return false;
    }
  }

  ngOnDestroy(): void {
    this.musculatureLocalizationTypesSub.unsubscribe();
  }
}
