import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BrainstemCranialNervesDiagnosisTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves/brainstem-cranial-nerves-diagnosis-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BrainstemCranialNervesFindingUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { HistologyKnownTypeEnum } from '@enums/headMRT/common/histology-known-type.enum';

@Component({
  selector: 'rr-lokalisation-one',
  templateUrl: './lokalisation-one.component.html',
  styleUrls: ['./lokalisation-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LokalisationOneComponent implements OnInit, OnDestroy {
  @Input() model: BrainstemCranialNervesFindingUiModel;

  differentialDiagnosisType = BrainstemCranialNervesDiagnosisTypeEnum;
  descriptionType = DescriptionTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  knownHistologyType = HistologyKnownTypeEnum;

  differentialDiagnosisW036: DropdownGroupedModel[];
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
