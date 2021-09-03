import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { TNMClassificationUiModel } from '@models/neckMRT/ui/summary/tnmclassification-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TNMClassificationDropdownsModel } from '@models/neckMRT/ui/summary/tnm-classification-dropdowns-model';
import { TnmClassificationConfigInterface } from '@interfaces/pages/neckMRT/summary/tnm-classification-config.interface';

import { TNMClassificationTypeEnum } from '@enums/neckMRT/summary';

import { lowerFirst } from 'lodash';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-tnm-classification',
  templateUrl: './tnm-classification.component.html',
  styleUrls: ['./tnm-classification.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TnmClassificationComponent implements OnInit, OnDestroy {
  @Input() model: TNMClassificationUiModel;
  @Input() config: TnmClassificationConfigInterface;

  subscriptions: Subscription[] = [];
  dropdownOptions = new TNMClassificationDropdownsModel();

  findingType: typeof TNMClassificationTypeEnum;

  constructor(private translate: TranslateService) {
    this.findingType = TNMClassificationTypeEnum;
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('neckMRT.summary.nasopharyngealCarcinomaOptionsTStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.nasopharyngealCarcinoma.tStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.nasopharyngealCarcinomaOptionsNStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.nasopharyngealCarcinoma.nStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.oropharyngealCarcinomaOptionsTStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.oropharyngealCarcinoma.tStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.oropharyngealCarcinomaOptionsNStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.oropharyngealCarcinoma.nStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.oropharyngealCarcinomaHpvOptionsTStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.oropharyngealCarcinomaHpv.tStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.oropharyngealCarcinomaHpvOptionsNStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.oropharyngealCarcinomaHpv.nStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.hypopharyngealCarcinomaOptionsTStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.hypopharyngealCarcinoma.tStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.hypopharyngealCarcinomaOptionsNStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.hypopharyngealCarcinoma.nStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.laryngealCarcinomaOptionsTStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.laryngealCarcinoma.tStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.laryngealCarcinomaOptionsNStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.laryngealCarcinoma.nStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.majorSalivaryGlandsOptionsTStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.majorSalivaryGlands.tStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.majorSalivaryGlandsOptionsNStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.majorSalivaryGlands.nStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.lipsOralCavityMinorSalivaryGlandsOptionsTStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.lipsOralCavityMinorSalivaryGlands.tStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.lipsOralCavityMinorSalivaryGlandsOptionsNStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.lipsOralCavityMinorSalivaryGlands.nStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.thyroidCarcinomaOptionsTStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.thyroidCarcinoma.tStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.thyroidCarcinomaOptionsNStage.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.thyroidCarcinoma.nStageType = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.cervicalLNsInCupSyndromeOptionsNStageHPVMinus.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.cervicalLNsInCupSyndrome.nStageHPVMinus = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.cervicalLNsInCupSyndromeOptionsNStageHPVPlus.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.cervicalLNsInCupSyndrome.nStageHPVPlus = Object.values(out);
      }),
      this.translate.stream('neckMRT.summary.mStageCommonOptions.options').subscribe((out: DropdownModel[]) => {
        this.dropdownOptions.commonMStageType = Object.values(out);
      })
    );
  }

  getDropdownOptions(dropdownType: 'tStageType' | 'nStageType'): DropdownModel[] {
    return this.dropdownOptions[lowerFirst(this.model.classificationType)][dropdownType];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
