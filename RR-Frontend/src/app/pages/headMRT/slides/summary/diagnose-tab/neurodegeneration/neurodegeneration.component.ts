import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SummaryFindingUiModel } from '@models/headMRT/ui/summary/summary-finding-ui.model';
import {
  AtrophyNeurodegenerationTypeEnum,
  FazekasTypeEnum,
  NeurodegenerationLocalizationTypeEnum,
  NeurodegenerationTypeEnum,
  ScoreTypeEnum
} from '@enums/headMRT/summary/neurodegeneration';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SummaryDiagnosisTypeEnum } from '@enums/headMRT/summary';
import { SideTypeEnum } from '@enums/headMRT/common/side-type.enum';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { ControlContainer, NgForm } from '@angular/forms';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { omit } from 'lodash';

@Component({
  selector: 'rr-neurodegeneration',
  templateUrl: './neurodegeneration.component.html',
  styleUrls: ['./neurodegeneration.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NeurodegenerationComponent implements OnInit, OnDestroy {
  @Input() model: SummaryFindingUiModel;
  differentialDiagnosisOptions: DropdownModel[];
  neurodegenerationLocalizationOption: DropdownModel[];
  koedamScoreOption: DropdownModel[];
  mesialTemporalLobeAtrophyScoreOption: DropdownModel[];
  subscriptions: Subscription[] = [];

  neurodegenerationType = NeurodegenerationTypeEnum;
  fazekasType = FazekasTypeEnum;
  atrophyNeurodegenerationType = AtrophyNeurodegenerationTypeEnum;
  sideType = SideTypeEnum;
  neurodegenerationLocalizationType = NeurodegenerationLocalizationTypeEnum;
  koedamScore = ScoreTypeEnum;

  constructor(private translateService: TranslateService, private validationHelperService: ValidationHelperService) {}

  ngOnInit() {
    this.initTranslations();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headMRT.summary.W070.options').subscribe(out => {
        this.differentialDiagnosisOptions = Object.values(out);
      }),
      this.translateService.stream('headMRT.summary.W071.options').subscribe(out => {
        this.neurodegenerationLocalizationOption = Object.values(out);
      }),
      this.translateService.stream('headMRT.summary.W072.options').subscribe(out => {
        this.koedamScoreOption = Object.values(out);
      }),
      this.translateService.stream('headMRT.summary.W073.options').subscribe(out => {
        this.mesialTemporalLobeAtrophyScoreOption = Object.values(out);
      })
    );
  }

  resetMicroangiopathyDetiles() {
    this.model.fazekasType = FazekasTypeEnum.None;
    this.model.summaryDiagnosisType = SummaryDiagnosisTypeEnum.None;
  }

  resetAtrophyDetiles() {
    const omittedProperties = [...findingBaseProperties, nameof<SummaryFindingUiModel>(p => p.neurodegenerationType)];
    Object.assign(this.model, omit(new SummaryFindingUiModel(), omittedProperties));
    this.validationHelperService.removeAllErrorsInFinding(this.model.validationId);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
