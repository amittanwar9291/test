import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { PathologyTypeEnum } from '@enums/hipMRT/soft-tissue';

@Component({
  selector: 'rr-other-pathologies',
  templateUrl: './other-pathologies.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OtherPathologiesComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;

  subscriptions: Subscription[] = [];
  inguinalAndIliacalDifferentialDiagnosisOptions: DropdownModel[];

  pathologyType: typeof PathologyTypeEnum;

  constructor(private translate: TranslateService) {
    this.pathologyType = PathologyTypeEnum;
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate
        .stream('hipMRT.softTissue.inguinalAndIliacalDifferentialDiagnosisOptions.options')
        .subscribe((out: DropdownModel[]) => {
          this.inguinalAndIliacalDifferentialDiagnosisOptions = Object.values(out);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
