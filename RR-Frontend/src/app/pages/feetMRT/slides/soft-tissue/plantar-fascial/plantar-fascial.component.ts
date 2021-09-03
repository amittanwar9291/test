import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MuscleChangeTypeEnum, NodeTypeEnum, RuptureTypeEnum } from '@enums/feetMRT/soft-tissue';
import { PlantarFasciaDiseaseTypeEnum } from '@enums/feetMRT/soft-tissue/plantar-fascia-disease/plantar-fascia-disease-type.enum';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SoftTissueHelperService } from '../soft-tissue-helper.service';
import { compact } from 'lodash';

@Component({
  selector: 'rr-plantar-fascial',
  templateUrl: './plantar-fascial.component.html',
  styleUrls: ['./plantar-fascial.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PlantarFascialComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;
  isCMYesSubscription: Subscription;
  isCMYes: boolean;
  translationSubscriptions: Subscription[] = [];
  differentialDiagnosisBase: DropdownModel[];
  differentialDiagnosis: DropdownModel[];

  plantarFasciaDiseaseTypeEnum: typeof PlantarFasciaDiseaseTypeEnum;
  ruptureTypeEnum: typeof RuptureTypeEnum;
  nodeTypeEnum: typeof NodeTypeEnum;
  muscleChangeTypeEnum: typeof MuscleChangeTypeEnum;

  constructor(private translate: TranslateService, private softTissueHelperService: SoftTissueHelperService) {
    this.isCMYesSubscription = this.softTissueHelperService.isCMYes.subscribe(value => (this.isCMYes = value));

    this.plantarFasciaDiseaseTypeEnum = PlantarFasciaDiseaseTypeEnum;
    this.ruptureTypeEnum = RuptureTypeEnum;
    this.nodeTypeEnum = NodeTypeEnum;
    this.muscleChangeTypeEnum = MuscleChangeTypeEnum;
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('feetMRT.softTissue.differentialDiagnosisList.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisBase = Object.keys(out).map(e => out[e]);
      })
    );
  }

  muscleChangeTypeDisabled(): boolean {
    return compact([this.model.isMAbductorDigitiMinimi, this.model.isMFlexorDigitorumBrevis, this.model.isMQuadratusPlantae]).length > 1;
  }

  clearMuscleChangeType() {
    this.model.muscleChangeType = this.muscleChangeTypeDisabled() ? MuscleChangeTypeEnum.None : this.model.muscleChangeType;
  }
}
