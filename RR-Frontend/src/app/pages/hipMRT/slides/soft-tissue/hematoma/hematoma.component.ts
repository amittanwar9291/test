import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { DifferentialDiagnosisTypeEnum, QuantityTypeEnum } from '@enums/hipMRT/soft-tissue';
import { CharacterizationHematomaTypeEnum } from '@enums/hipMRT/soft-tissue/hematoma/characterization-hematoma-type.enum';

@Component({
  selector: 'rr-hematoma',
  templateUrl: './hematoma.component.html',
  styleUrls: ['./hematoma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class HematomaComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;

  qualityType: typeof QuantityTypeEnum;
  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;
  characterizationHematomaType: typeof CharacterizationHematomaTypeEnum;

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.qualityType = QuantityTypeEnum;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
    this.characterizationHematomaType = CharacterizationHematomaTypeEnum;
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
      this.translate.stream('hipMRT.softTissue.hematomaDifferentialDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
