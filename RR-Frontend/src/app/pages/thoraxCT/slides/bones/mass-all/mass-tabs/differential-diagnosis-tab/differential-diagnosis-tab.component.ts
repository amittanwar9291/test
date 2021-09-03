import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { BonesDifferentialDiagnosisTypeEnum } from '@enums/thoraxCT/bones/bones-differential-diagnosis-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ThoraxBonesFindingsTypeEnum } from '@enums/thoraxCT/bones/thorax-bones-findings-type.enum';

@Component({
  selector: 'rr-differential-diagnosis-tab',
  templateUrl: './differential-diagnosis-tab.component.html',
  styleUrls: ['./differential-diagnosis-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisTabComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  ddW052: DropdownGroupedModel[];
  ddW053: DropdownGroupedModel[];
  translationSubscriptions: Subscription[] = [];

  thoraxBonesFindingsTypeEnum = ThoraxBonesFindingsTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  bonesDifferentialDiagnosisTypeEnum = BonesDifferentialDiagnosisTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  ngOnDestroy(): void {
    this.translationSubscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('thoraxCT.bones.differentialDiagnoseW052.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW052 = this.model.findingType === ThoraxBonesFindingsTypeEnum.MassSpine ? out : this.removeSchmorlsNodeDiagnosis(out);
      })
    );

    this.translationSubscriptions.push(
      this.translate.stream('thoraxCT.bones.differentialDiagnoseW053.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW053 = this.model.findingType === ThoraxBonesFindingsTypeEnum.MassSpine ? out : this.removeSchmorlsNodeDiagnosis(out);
      })
    );
  }

  removeSchmorlsNodeDiagnosis(options: DropdownGroupedModel[]): DropdownGroupedModel[] {
    return options.map((grouped: DropdownGroupedModel) => ({
      label: grouped.label,
      items: grouped.items.filter((item: DropdownModel) => item.value !== this.bonesDifferentialDiagnosisTypeEnum.SchmorlsNode)
    }));
  }

  clearDDCheckboxes() {
    this.model.isSuspected = false;
    this.clearSubordinated();
  }

  clearSubordinated() {
    this.model.isSubordinated = false;
  }
}
