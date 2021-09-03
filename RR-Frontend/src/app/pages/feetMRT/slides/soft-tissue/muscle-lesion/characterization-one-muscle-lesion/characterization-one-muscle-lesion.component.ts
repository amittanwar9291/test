import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ClassificationTypeEnum,
  LocalizationWithinOfMuscleTypeEnum,
  MuscleLesionLocalizationTypeEnum,
  MuscularAtrophyTypeEnum
} from '@enums/feetMRT/soft-tissue';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-characterization-one-muscle-lesion',
  templateUrl: './characterization-one-muscle-lesion.component.html',
  styleUrls: ['./characterization-one-muscle-lesion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneMuscleLesionComponent implements OnInit {
  @Input() model: SoftTissueFindingUiModel;

  muscleLesionLocalizationTypeEnum: typeof MuscleLesionLocalizationTypeEnum;
  classificationTypeEnum: typeof ClassificationTypeEnum;
  localizationWithinOfMuscleTypeEnum: typeof LocalizationWithinOfMuscleTypeEnum;
  muscularAtrophyType: typeof MuscularAtrophyTypeEnum;

  classification: ClassificationTypeEnum;
  translationSubscriptions: Subscription[] = [];
  muscleLesionLocalizationType: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.muscleLesionLocalizationTypeEnum = MuscleLesionLocalizationTypeEnum;
    this.classificationTypeEnum = ClassificationTypeEnum;
    this.localizationWithinOfMuscleTypeEnum = LocalizationWithinOfMuscleTypeEnum;
    this.muscularAtrophyType = MuscularAtrophyTypeEnum;
  }

  ngOnInit(): void {
    this.classification = this.model.classificationType;
    this.initTranslations();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('feetMRT.softTissue.muscleLesionLocalizationType.options').subscribe((out: DropdownModel[]) => {
        this.muscleLesionLocalizationType = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearClassificationTypeDetails(val: ClassificationTypeEnum) {
    if (val !== this.classification) {
      this.model.isCrossDiameterOfTheRuptureLessThan5Mm = false;
      this.model.isCrossDiameterOfTheRuptureMoreThan5Mm = false;
      this.model.isWavyCourseOfTheFibers = false;
      this.model.isBonyAvulsion = false;
      this.model.retractionInMm = null;
      this.model.isIntracorticalEdema = false;
      this.classification = val;
    }
  }
}
