import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BrainstemCranialNervesDiagnosisTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BrainstemCranialNervesFindingUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-differential-diagnose-one',
  templateUrl: './differential-diagnose-one.component.html',
  styleUrls: ['./differential-diagnose-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnoseOneComponent implements OnInit, OnDestroy {
  @Input() model: BrainstemCranialNervesFindingUiModel;

  diagnosisTypeEnum = BrainstemCranialNervesDiagnosisTypeEnum;
  descriptionType = DescriptionTypeEnum;

  differentialDiagnosisW036: DropdownGroupedModel[];
  differentialDiagnosisW037: DropdownGroupedModel[];
  translationSubscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
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
