import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LungParenchymaDiagnosisTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-diagnosis-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-consolidation-differential-diagnosis-tab',
  templateUrl: './consolidation-differential-diagnosis-tab.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ConsolidationDifferentialDiagnosisTabComponent implements OnInit, OnDestroy {
  @Input() model: LungParenchymaFindingUiModel;

  differentialDiagnosisW024: DropdownModel[];
  differentialDiagnosisW025: DropdownModel[];

  subscriptions: Subscription[] = [];

  lungParenchymaDiagnosisTypeEnum = LungParenchymaDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungParenchyma.ddW024.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisW024 = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungParenchyma.ddW025.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisW025 = Object.values(out);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  dd1Change() {
    this.model.isSubordinated = false;
    this.model.isSuspected = false;
  }

  dd2Change() {
    this.model.isSubordinated = false;
  }

  dd2Enabled(): boolean {
    return (
      this.model.differentialDiagnosis01 !== this.lungParenchymaDiagnosisTypeEnum.None ||
      this.model.mainCharacteristicsDifferentialDiagnosis01 !== this.lungParenchymaDiagnosisTypeEnum.None
    );
  }

  isSubordinatedEnabled(): boolean {
    return this.model.differentialDiagnosis02 !== LungParenchymaDiagnosisTypeEnum.None;
  }
}
