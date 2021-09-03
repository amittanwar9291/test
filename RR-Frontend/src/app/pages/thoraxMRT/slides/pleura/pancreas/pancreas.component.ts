import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PleuraDiagnosisTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-diagnosis-type.enum';
import { LeasionLocalizationTypeEnum } from '@enums/thoraxMRT/pleura/upper-abdomen-pancreas/leasion-localization-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-pancreas',
  templateUrl: './pancreas.component.html',
  styleUrls: ['./pancreas.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PancreasComponent implements OnInit, OnDestroy {
  @Input() model: PleuraFindingUiModel;

  leasionLocalizationTypeEnum = LeasionLocalizationTypeEnum;
  pleuraDiagnosisTypeEnum = PleuraDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.pleura.W032.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  clearSuspicionCheckbox() {
    this.model.isSuspicionOf = false;
  }
}
