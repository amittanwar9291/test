import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BrainstemCranialNervesDiagnosisTypeEnum, SideTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves';
import { CranialNerveTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves/cranial-nerve-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BrainstemCranialNervesFindingUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { HistologyKnownTypeEnum } from '@enums/headMRT/common/histology-known-type.enum';

@Component({
  selector: 'rr-lokalisation-two',
  templateUrl: './lokalisation-two.component.html',
  styleUrls: ['./lokalisation-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LokalisationTwoComponent implements OnInit, OnDestroy {
  @Input() model: BrainstemCranialNervesFindingUiModel;

  descriptionType = DescriptionTypeEnum;
  sideType = SideTypeEnum;
  differentialDiagnosisType = BrainstemCranialNervesDiagnosisTypeEnum;
  knownHistologyType = HistologyKnownTypeEnum;
  cranialNerveType = CranialNerveTypeEnum;

  differentialDiagnosisW064: DropdownGroupedModel[];
  translationSubscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('headMRT.brainstemCranialNerves.differentialDiagnosisW064.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisW064 = out;
      })
    );
  }

  resetOpticGliomaDiagnosis() {
    if (this.model.descriptionType === DescriptionTypeEnum.IDescribe) {
      const isOpticGlioma = (diagnosis: BrainstemCranialNervesDiagnosisTypeEnum): boolean =>
        diagnosis === BrainstemCranialNervesDiagnosisTypeEnum.OpticGlioma;

      if (isOpticGlioma(this.model.differentialDiagnosis1)) {
        this.resetDD01();
      } else if (isOpticGlioma(this.model.differentialDiagnosis2)) {
        this.resetDD02();
      } else if (isOpticGlioma(this.model.differentialDiagnosis3)) {
        this.resetDD03();
      }
    }
  }

  resetDD01() {
    this.model.differentialDiagnosis1 = BrainstemCranialNervesDiagnosisTypeEnum.None;
    this.model.isSuspicionOf = false;
    this.resetDD02();
  }

  resetDD02() {
    this.model.differentialDiagnosis2 = BrainstemCranialNervesDiagnosisTypeEnum.None;
    this.model.isSubordinate = false;
    this.resetDD03();
  }

  resetDD03() {
    this.model.differentialDiagnosis3 = BrainstemCranialNervesDiagnosisTypeEnum.None;
  }

  ngOnDestroy() {
    this.translationSubscriptions.forEach(sub => sub.unsubscribe());
  }
}
