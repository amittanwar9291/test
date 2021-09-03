import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DiagnosisTypeEnum } from '@enums/elbowMRT/bones';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  descriptionTypeEnum = DescriptionTypeEnum;
  diagnosisTypeEnum = DiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW015: DropdownModel[];
  ddlW016: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('elbowMRT.bones.W015.options').subscribe((out: DropdownModel[]) => {
        this.ddlW015 = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translateService.stream('elbowMRT.bones.W016.options').subscribe((out: DropdownModel[]) => {
        this.ddlW016 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearDDLCheckboxes() {
    this.model.isSuspectedDiagnosis = false;
    this.clearSubordinateCheckbox();
  }

  clearSubordinateCheckbox() {
    this.model.isSubordinated = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
