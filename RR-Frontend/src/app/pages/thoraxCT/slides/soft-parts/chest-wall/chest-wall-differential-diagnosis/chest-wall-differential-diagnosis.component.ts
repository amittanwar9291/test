import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsDiagnosisTypeEnum } from '@enums/thoraxCT/soft-parts';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-chest-wall-differential-diagnosis',
  templateUrl: './chest-wall-differential-diagnosis.component.html',
  styleUrls: ['./chest-wall-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChestWallDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() diagnosisDropDownList: DropdownModel[];
  @Input() groupedDiagnosisDropDownList: DropdownGroupedModel[];
  @Input() model: SoftPartsFindingUiModel;

  softPartsDiagnosisTypeEnum = SoftPartsDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW037: DropdownModel[];
  ddlW038: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W037.options').subscribe((out: DropdownModel[]) => {
        this.ddlW037 = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W038.options').subscribe((out: DropdownModel[]) => {
        this.ddlW038 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearDDLCheckboxes() {
    this.model.isSuspected = false;
    this.clearSubordinated();
  }

  clearSubordinated() {
    this.model.isSubordinated = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
