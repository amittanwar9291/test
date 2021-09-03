import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';

import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-space-requirement',
  templateUrl: './space-requirement.component.html',
  styleUrls: ['./space-requirement.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SpaceRequirementComponent implements OnInit, OnDestroy {
  @Input() model: MediastinumFindingUiModel;
  @Input() additionalData: any;

  translationSubscriptions: Subscription[] = [];
  differentialDiagnosis: DropdownModel[];
  extendedDifferentialDiagnosis: DropdownModel[];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('thoraxCT.mediastinum.extendedDifferentialDiagnosis.options').subscribe((out: DropdownModel[]) => {
        this.extendedDifferentialDiagnosis = Object.values(out);
      })
    );

    this.translationSubscriptions.push(
      this.translate.stream('thoraxCT.mediastinum.differentialDiagnosisArr.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosis = Object.values(out);
      })
    );
  }

  ngOnDestroy() {
    this.translationSubscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
