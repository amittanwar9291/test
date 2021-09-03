import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { DifferentialDiagnosisTypeEnum } from '@enums/hipMRT/soft-tissue';

import { nameof } from 'ts-simple-nameof';

import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-abscess',
  templateUrl: './abscess.component.html',
  styleUrls: ['./abscess.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AbscessComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions: DropdownModel[];

  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;

  constructor(private translate: TranslateService, private validationHelperService: ValidationHelperService) {
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

  isLocalizationBlockDisabled(): boolean {
    const activators = [this.model.isPelvis, this.model.isThigh];
    return !activators.some(item => item);
  }

  resetLocalizationBlock(): void {
    if (this.isLocalizationBlockDisabled()) {
      this.model.isVentral = false;
      this.model.isMedial = false;
      this.model.isLateral = false;
      this.model.isDorsal = false;

      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isVentral));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isMedial));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isLateral));
      this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.isDorsal));
    }
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('hipMRT.softTissue.abscessDifferentialDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
