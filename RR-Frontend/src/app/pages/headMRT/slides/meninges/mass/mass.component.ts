import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { MeningesPresetHttpService } from '@services/headMRT/http/meninges/meninges-preset-http.service';

@Component({
  selector: 'rr-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: MeningesPresetHttpService
    }
  ]
})
export class MassComponent implements OnInit, OnDestroy {
  @Input() model: MeningesFindingUiModel;
  @Input() isDWIInAnySequence: boolean;
  @Input() isContrastEnhanced: boolean;
  subscriptions: Subscription[] = [];
  diffDiagnosisOptions: DropdownModel[];
  diffDiagnosisOptions2: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('headMRT.meninges.meningesMassDifferentialDiagnosisOptions').subscribe((out: DropdownModel[]) => {
        this.diffDiagnosisOptions = Object.values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('headMRT.meninges.meningesMassDifferentialDiagnosisOptions2').subscribe((out: DropdownModel[]) => {
        this.diffDiagnosisOptions2 = Object.values(out);
      })
    );
  }
}
