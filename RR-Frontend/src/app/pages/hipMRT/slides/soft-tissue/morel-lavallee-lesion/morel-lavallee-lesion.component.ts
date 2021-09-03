import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { ClassificationTypeEnum, DifferentialDiagnosisTypeEnum, LocalizationThighTypeEnum } from '@enums/hipMRT/soft-tissue';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-morel-lavallee-lesion',
  templateUrl: './morel-lavallee-lesion.component.html',
  styleUrls: ['./morel-lavallee-lesion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MorelLavalleeLesionComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions: DropdownModel[];

  locationThighType: typeof LocalizationThighTypeEnum;
  classificationType: typeof ClassificationTypeEnum;
  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;

  constructor(private translate: TranslateService) {
    this.locationThighType = LocalizationThighTypeEnum;
    this.classificationType = ClassificationTypeEnum;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  resetIsSuspected(): void {
    this.model.isSuspected = false;
  }

  resetBothPlanes(): void {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('hipMRT.softTissue.morelLavalleDifferentialDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
