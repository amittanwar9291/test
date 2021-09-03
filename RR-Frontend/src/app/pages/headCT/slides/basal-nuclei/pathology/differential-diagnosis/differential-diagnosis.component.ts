import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BasalNucleiFindingUiModel } from '@models/headCT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BasalNucleiDiagnosisTypeEnum } from '@enums/headCT/basal-nuclei/basal-nuclei-diagnosis-type.enum';

@Component({
  selector: 'rr-pathology-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PathologyDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  constructor(private translateService: TranslateService) {}

  @Input() model: BasalNucleiFindingUiModel;
  differentialDiagnosisOptions: DropdownGroupedModel[];
  differentialDiagnosisOptions0203: DropdownGroupedModel[];

  subscriptions: Subscription[] = [];

  differentialDiagnosisType = BasalNucleiDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headCT.basalNuclei.differentialDiagnosis01.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisOptions = out;
      }),
      this.translateService.stream('headCT.basalNuclei.differentialDiagnosis0203.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisOptions0203 = out;
      })
    );
  }

  resetDifferentialDiagnosis2(): void {
    this.model.isSubordinate = false;
  }

  resetDifferentialDiagnosis1(): void {
    this.model.isSuspicionOf = false;
    this.resetDifferentialDiagnosis2();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
