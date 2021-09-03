import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SummaryUiModel } from '@models/abdomenMRT/ui/summary/summary-ui.model';
import { Subscription } from 'rxjs';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { NStageSentinelNodeTypeEnum, StageSubTypeEnum } from '@enums/abdomenMRT/summary';

@Component({
  selector: 'rr-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ClassificationComponent implements OnInit, OnDestroy {
  @Input() model: SummaryUiModel;
  subscriptions: Subscription[] = [];

  tStadiumOptions: DropdownModel[];
  nStadiumOptions: DropdownModel[];
  mStadiumOptions: DropdownModel[];
  gradingOptions: DropdownModel[];
  detailsOptions: DropdownModel[];
  residualOptions: DropdownModel[];
  lymphaticOptions: DropdownModel[];
  venousOptions: DropdownModel[];
  perineuralOptions: DropdownModel[];
  stageSubType = StageSubTypeEnum;
  nStageSentinelNodeType = NStageSentinelNodeTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.summary.tStadiumDropdown.options').subscribe(out => {
        this.tStadiumOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.summary.nStadiumDropdown.options').subscribe(out => {
        this.nStadiumOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.summary.mStadiumDropdown.options').subscribe(out => {
        this.mStadiumOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.summary.gradingDropdown.options').subscribe(out => {
        this.gradingOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.summary.detailsDropdown.options').subscribe(out => {
        this.detailsOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.summary.residualDropdown.options').subscribe(out => {
        this.residualOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.summary.lymphaticDropdown.options').subscribe(out => {
        this.lymphaticOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.summary.venousDropdown.options').subscribe(out => {
        this.venousOptions = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.summary.perineuralDropdown.options').subscribe(out => {
        this.perineuralOptions = Object.values(out);
      })
    );
  }

  nStadiumDetailsReset() {
    this.model.nStageSubType = this.stageSubType.None;
    this.model.nStageSentinelNodeType = this.nStageSentinelNodeType.None;
  }

  mStadiumDetailsReset() {
    this.model.mStageSubType = this.stageSubType.None;
    this.model.isPUL = false;
    this.model.isMAR = false;
    this.model.isOSS = false;
    this.model.isPLE = false;
    this.model.isHEP = false;
    this.model.isPER = false;
    this.model.isBRA = false;
    this.model.isADR = false;
    this.model.isLYM = false;
    this.model.isSKI = false;
    this.model.isOTH = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
