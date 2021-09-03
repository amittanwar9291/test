import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
// import { QuantityTypeEnum } from '@enums/hipMRT/soft-tissue/articular-effusion/quantity-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { DifferentialDiagnosisTypeEnum, QuantityTypeEnum } from '@enums/hipMRT/soft-tissue';

@Component({
  selector: 'rr-articular-effusion',
  templateUrl: './articular-effusion.component.html',
  styleUrls: ['./articular-effusion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArticularEffusionComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;

  qualityType: typeof QuantityTypeEnum;
  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.qualityType = QuantityTypeEnum;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  resetIsSuspected(): void {
    this.model.isSuspected = false;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('hipMRT.softTissue.articularEffusionDifferentialDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
