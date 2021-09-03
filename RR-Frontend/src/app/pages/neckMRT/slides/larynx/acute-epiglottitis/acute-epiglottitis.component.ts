import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';
import { DifferentialDiagnosisTypeEnum } from '@enums/neckMRT/larynx';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-acute-epiglottitis',
  templateUrl: './acute-epiglottitis.component.html',
  styleUrls: ['./acute-epiglottitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AcuteEpiglottitisComponent implements OnInit, OnDestroy {
  @Input() model: LarynxFindingUiModel;
  @Input() isCMReinforced: boolean;

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions: DropdownModel[];

  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;

  constructor(private translate: TranslateService) {
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum;

    this.initTranslations();
  }

  ngOnInit(): void {
    this.model.isEpiglottis = true;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate
        .stream('neckMRT.larynx.larynxAcuteEpiglottitisDifferentialDiagnosisOptions.options')
        .subscribe((out: DropdownModel[]) => {
          this.differentialDiagnosisOptions = Object.values(out);
        })
    );
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.neckMRT.larynx.fileUpload;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
