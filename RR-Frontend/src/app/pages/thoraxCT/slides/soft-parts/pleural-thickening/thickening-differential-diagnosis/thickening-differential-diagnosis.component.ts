import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsDiagnosisTypeEnum } from '@enums/thoraxCT/soft-parts';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-thickening-differential-diagnosis',
  templateUrl: './thickening-differential-diagnosis.component.html',
  styleUrls: ['./thickening-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThickeningDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: SoftPartsFindingUiModel;

  softPartsDiagnosisTypeEnum = SoftPartsDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW035: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W035.options').subscribe((out: DropdownModel[]) => {
        this.ddlW035 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearDDLCheckboxes() {
    this.clearDDL2Checkbox();
    this.model.isSuspected = false;
  }

  clearDDL2Checkbox() {
    this.model.isSubordinated = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
