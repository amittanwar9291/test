import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-soft-tissue-mass',
  templateUrl: './soft-tissue-mass.component.html',
  styleUrls: ['./soft-tissue-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SoftTissueMassComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;
  @Input() isCMReinforced: boolean;

  subscriptions: Subscription[] = [];

  differentialDiagnosisOptions: DropdownModel[];
  restrictedDifferentialDiagnosisOptions: DropdownModel[];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('hipMRT.softTissue.softTissueMassDifferentialDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions = Object.values(out);
      }),
      this.translate
        .stream('hipMRT.softTissue.restrictedSoftTissueMassDifferentialDiagnosisOptions.options')
        .subscribe((out: DropdownModel[]) => {
          this.restrictedDifferentialDiagnosisOptions = Object.values(out);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
