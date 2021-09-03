import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';
import { Subscription } from 'rxjs';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassComponent implements OnDestroy {
  @Input() model: LarynxFindingUiModel;
  @Input() isCMReinforced: boolean;
  @Input() isDWI: boolean;

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions: DropdownModel[];
  restrictedDifferentialDiagnosisOptions: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('neckMRT.larynx.larynxMassDifferentialDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions = Object.values(out);
      }),
      this.translate.stream('neckMRT.larynx.restrictedLarynxMassDifferentialDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.restrictedDifferentialDiagnosisOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
