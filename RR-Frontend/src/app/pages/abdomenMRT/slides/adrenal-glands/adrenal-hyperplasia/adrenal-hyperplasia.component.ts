import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AdrenalGlandsFindingUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { nameof } from 'ts-simple-nameof';
import { DifferentialDiagnosisTypeEnum, FormTypeEnum } from '@enums/abdomenMRT/adrenal-glands';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from 'app/app.config';
import { ExpansionInputsGroupModelInterface } from '@interfaces/controls/expansion-inputs-group-model.interface';

@Component({
  selector: 'rr-adrenal-hyperplasia',
  templateUrl: './adrenal-hyperplasia.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AdrenalHyperplasiaComponent implements OnInit, OnDestroy {
  @Input() model: AdrenalGlandsFindingUiModel;

  subscriptions: Subscription[] = [];
  dDOptions1: DropdownGroupedModel[];

  formType = FormTypeEnum;
  diagnosisType = DifferentialDiagnosisTypeEnum;

  expansionGroupConfig: ExpansionInputsGroupModelInterface = {
    mainHeaderTranslationKey: 'abdomenMRT.adrenalGlands.extension.value',
    mainHeaderRrId: 'abd_m_080302',
    size: {
      mandatory: false,
      modelName: nameof<AdrenalGlandsFindingUiModel>(m => m.sizeInMm),
      headerTranslationKey: 'abdomenMRT.adrenalGlands.size.value',
      headerRrId: 'abd_m_080303',
      inputRrId: 'abd_m_080304',
      labelTranslationKey: 'abdomenMRT.adrenalGlands.inMm.value',
      labelRrId: 'abd_m_080305',
      min: 1,
      max: 99,
      placeholder: '--'
    },
    secondPlane: {
      modelName: nameof<AdrenalGlandsFindingUiModel>(m => m.secondPlaneInMm),
      headerTranslationKey: 'abdomenMRT.adrenalGlands.2ndPlane.value',
      headerRrId: 'abd_m_080306',
      inputRrId: 'abd_m_080307',
      labelTranslationKey: 'abdomenMRT.adrenalGlands.inMm.value',
      labelRrId: 'abd_m_080308',
      min: 1,
      max: 99,
      placeholder: '--'
    },
    thirdPlane: {
      modelName: nameof<AdrenalGlandsFindingUiModel>(m => m.thirdPlaneInMm),
      headerTranslationKey: 'abdomenMRT.adrenalGlands.3rdPlane.value',
      headerRrId: 'abd_m_080309',
      inputRrId: 'abd_m_080310',
      labelTranslationKey: 'abdomenMRT.adrenalGlands.inMm.value',
      labelRrId: 'abd_m_080311',
      min: 1,
      max: 99,
      placeholder: '--'
    }
  };

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.adrenalGlands.fileUpload;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.adrenalGlands.adrenalHyperplasiaDDOptions1.options').subscribe((out: DropdownGroupedModel[]) => {
        this.dDOptions1 = out;
      })
    );
  }

  clearDependentControls(): void {
    this.model.isSuspicionOf = false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
