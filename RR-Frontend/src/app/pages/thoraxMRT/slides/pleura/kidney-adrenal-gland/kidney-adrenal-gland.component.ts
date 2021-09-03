import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PleuraDiagnosisTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-diagnosis-type.enum';
import { PleuraSiteTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-site-type.enum';
import { GradingTypeEnum } from '@enums/thoraxMRT/pleura/upper-abdomen-kidney-adrenal-gland/grading-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-kidney-adrenal-gland',
  templateUrl: './kidney-adrenal-gland.component.html',
  styleUrls: ['./kidney-adrenal-gland.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class KidneyAdrenalGlandComponent implements OnInit, OnDestroy {
  @Input() model: PleuraFindingUiModel;

  siteTypeEnum = PleuraSiteTypeEnum;
  gradingTypeEnum = GradingTypeEnum;
  pleuraDiagnosisTypeEnum = PleuraDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  differentialDiagnosisTypeOptions: DropdownModel[];
  massAdrenalGlandClassificationTypeOptions: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.pleura.W033.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisTypeOptions = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.pleura.W034.options').subscribe((out: DropdownModel[]) => {
        this.massAdrenalGlandClassificationTypeOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearSuspicionOfMassAdrenalGlandCheckbox() {
    this.model.isSuspicionOfMassAdrenalGland = false;
  }

  clearSuspicionCheckbox() {
    this.model.isSuspicionOf = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
