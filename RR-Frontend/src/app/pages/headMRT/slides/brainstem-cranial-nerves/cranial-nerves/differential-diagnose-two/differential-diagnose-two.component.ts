import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BrainstemCranialNervesDiagnosisTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves';
import { CranialNerveTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves/cranial-nerve-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BrainstemCranialNervesFindingUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-differential-diagnose-two',
  templateUrl: './differential-diagnose-two.component.html',
  styleUrls: ['./differential-diagnose-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnoseTwoComponent implements OnInit, OnDestroy {
  @Input() model: BrainstemCranialNervesFindingUiModel;

  diagnosisTypeEnum = BrainstemCranialNervesDiagnosisTypeEnum;
  descriptionType = DescriptionTypeEnum;
  cranialNerveType = CranialNerveTypeEnum;

  differentialDiagnosisW036: DropdownGroupedModel[];
  differentialDiagnosisW037: DropdownGroupedModel[];
  differentialDiagnosisW064: DropdownGroupedModel[];
  differentialDiagnosisW065: DropdownGroupedModel[];

  translationSubscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('headMRT.brainstemCranialNerves.differentialDiagnosisW036.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisW036 = out;
      })
    );
    this.translationSubscriptions.push(
      this.translate.stream('headMRT.brainstemCranialNerves.differentialDiagnosisW037.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisW037 = out;
      })
    );
    this.translationSubscriptions.push(
      this.translate.stream('headMRT.brainstemCranialNerves.differentialDiagnosisW064.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisW064 = out;
      })
    );
    this.translationSubscriptions.push(
      this.translate.stream('headMRT.brainstemCranialNerves.differentialDiagnosisW065.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisW065 = out;
      })
    );
  }

  getDDOptions(isDD01?: boolean): DropdownGroupedModel[] {
    if (this.model.descriptionType === DescriptionTypeEnum.IKnow || this.model.cranialNerveType === CranialNerveTypeEnum.IIOpticNerve) {
      return isDD01 ? this.differentialDiagnosisW064 : this.differentialDiagnosisW065;
    } else {
      return isDD01 ? this.differentialDiagnosisW036 : this.differentialDiagnosisW037;
    }
  }

  clearDDLCheckboxes() {
    this.model.isSuspicionOf = false;
    this.clearSubordinateCheckbox();
  }

  clearSubordinateCheckbox() {
    this.model.isSubordinate = false;
  }

  ngOnDestroy() {
    this.translationSubscriptions.forEach(sub => sub.unsubscribe());
  }
}
