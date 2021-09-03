import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import {
  MusclesLocalizationTypeEnum,
  LocalizationWithinMuscleTypeEnum,
  ClassificationMunichConsensusTypeEnum,
  OsseousAvulsionLocalizationTypeEnum
} from '@enums/pelvisMRT/bladder';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-muscles-characterization-one',
  templateUrl: './muscles-characterization-one.component.html',
  styleUrls: ['./muscles-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MusclesCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: BladderFindingUiModel;
  w039: DropdownGroupedModel[];
  w040: DropdownModel[];

  sideTypeEnum = SideTypeEnum;
  musclesLocalizationTypeEnum = MusclesLocalizationTypeEnum;
  localizationWithinMuscleTypeEnum = LocalizationWithinMuscleTypeEnum;
  classificationMunichConsensusTypeEnum = ClassificationMunichConsensusTypeEnum;

  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.translate.stream('pelvisMRT.bladder.w039.options').subscribe((out: DropdownGroupedModel[]) => (this.w039 = out)),
      this.translate.stream('pelvisMRT.bladder.w040.options').subscribe((out: DropdownModel[]) => (this.w040 = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  clearMuscleLesionGroup(value: SideTypeEnum): string {
    return this.model.sideType !== value ? 'muscleLesionGroup' : '';
  }

  localisationOptionsChange() {
    this.model.localizationWithinMuscleType = LocalizationWithinMuscleTypeEnum.None;
    this.model.isMuscleLesion = false;
    this.model.classificationMunichConsensusType = ClassificationMunichConsensusTypeEnum.None;
    this.model.isCrossDiameterOfRuptureLessThan5Mm = false;
    this.model.isCrossDiameterOfRupture5OrMoreMm = false;
    this.model.retractionInMm = null;
    this.model.isWavyCourseOfTheFibres = false;
    this.model.isOsseousAvulsion = false;
    this.model.osseousAvulsionLocalizationType = OsseousAvulsionLocalizationTypeEnum.None;
    this.model.isIntracorticalEdema = false;
  }
}
