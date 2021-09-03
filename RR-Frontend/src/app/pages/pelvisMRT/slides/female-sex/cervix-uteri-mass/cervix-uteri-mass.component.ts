import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { FemaleSexPresetHttpService } from '@services/pelvisMRT/http/female-sex/female-sex-preset-http.service';
import { nameof } from 'ts-simple-nameof';
import { FemaleSexHelperService } from '../female-sex-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-cervix-uteri-mass',
  templateUrl: './cervix-uteri-mass.component.html',
  styleUrls: ['./cervix-uteri-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: FemaleSexPresetHttpService
    }
  ]
})
export class CervixUteriMassComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;

  subscriptions: Subscription[] = [];
  activeTabIndex: number;

  differentialDiagnosisTabMandatoryElements = [
    nameof<FemaleSexFindingUiModel>(m => m.differentialDiagnosis1),
    nameof<FemaleSexFindingUiModel>(m => m.figoStageType1),
    nameof<FemaleSexFindingUiModel>(m => m.is1BMacroinvasiveLesion1),
    nameof<FemaleSexFindingUiModel>(m => m.figoStageAdditionalDetailsType1),
    nameof<FemaleSexFindingUiModel>(m => m.figoStageDetailsType1),
    nameof<FemaleSexFindingUiModel>(m => m.figoStageType2),
    nameof<FemaleSexFindingUiModel>(m => m.is1BMacroinvasiveLesion2),
    nameof<FemaleSexFindingUiModel>(m => m.figoStageAdditionalDetailsType2),
    nameof<FemaleSexFindingUiModel>(m => m.figoStageDetailsType2)
  ];

  constructor(private femaleSexHelperService: FemaleSexHelperService) {}

  ngOnInit() {
    this.subscriptions.push(this.femaleSexHelperService.activeTabIndex.subscribe(value => (this.activeTabIndex = value)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onTabChange(event) {
    this.femaleSexHelperService.activeTabIndex.next(event.index);
  }
}
