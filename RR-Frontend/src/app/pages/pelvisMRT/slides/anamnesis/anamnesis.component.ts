import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { AnamnesisUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisValidationModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-validation.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { AnamnesisClinicFindingUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-clinic-finding-ui.model';
import { AnamnesisPreviousOperationFindingUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-previous-operation-finding-ui.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { ProstateUiModel } from '@models/pelvisMRT/ui/prostate/prostate-ui.model';
import { PsaVolumeTypeEnum } from '@enums/pelvisMRT/prostate/psa-volume-type.enum';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> implements OnInit {
  clinicHandler: DynamicComponentHandler<AnamnesisClinicFindingUiModel>;
  previousOperationHandler: DynamicComponentHandler<AnamnesisPreviousOperationFindingUiModel>;

  clinicDropdownConfig: FindingColumnConfig;
  previousOperationDropdownConfig: FindingColumnConfig;

  localizationGender: GenderTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices, AnamnesisValidationModel);

    this.initializeHandlers();

    this.registerCallbacks();
    this.registerPagesConnections();
  }

  private initializeHandlers() {
    this.clinicHandler = new DynamicComponentHandler(this.logger, this.model.clinicFindings, AnamnesisClinicFindingUiModel);
    this.previousOperationHandler = new DynamicComponentHandler(
      this.logger,
      this.model.previousOperationFindings,
      AnamnesisPreviousOperationFindingUiModel
    );

    this.initClinicDropdownConfig();
    this.initPreviousOperationDropdownConfig();
  }

  initClinicDropdownConfig() {
    this.clinicDropdownConfig = new FindingColumnConfig();
    this.clinicDropdownConfig.itemCount = 7;
    this.clinicDropdownConfig.findingColumnIds.findingRRId = 'pel_m_020118';
    this.clinicDropdownConfig.findingColumnIds.buttonRRId = 'pel_m_020119';
  }

  initPreviousOperationDropdownConfig() {
    this.previousOperationDropdownConfig = new FindingColumnConfig();
    this.previousOperationDropdownConfig.itemCount = 7;
    this.previousOperationDropdownConfig.findingColumnIds.findingRRId = 'pel_m_020311';
    this.previousOperationDropdownConfig.findingColumnIds.buttonRRId = 'pel_m_020312';
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: AnamnesisUiModel) => {
      this.clinicHandler.reinitializeCollection(outModel.clinicFindings);
      this.previousOperationHandler.reinitializeCollection(outModel.previousOperationFindings);
    });

    this.registerSaveCallback((outModel: AnamnesisUiModel) => {
      this.clinicHandler.collectionPostSaveCleanup(outModel.clinicFindings);
      this.previousOperationHandler.collectionPostSaveCleanup(outModel.previousOperationFindings);
    });

    this.registerPreSaveCallback(() => {
      this.clinicHandler.collectionPreSaveCleanup();
      this.previousOperationHandler.collectionPreSaveCleanup();
    });
  }

  registerPagesConnections() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationModel: LocalizationUiModel) => {
      if (localizationModel) {
        this.localizationGender = localizationModel.patientInformation.gender;
      }
    });

    this.addPageConnection(
      4,
      ProstateUiModel,
      () => {
        return this.localizationGender === GenderTypeEnum.Male;
      },
      (prostateModel: ProstateUiModel) => {
        this.calculatePsaVolume(prostateModel);
      }
    );
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('pelvisMRT.anamnesis.findingTypes1.options').subscribe((out: DropdownModel[]) => {
        this.clinicDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('pelvisMRT.anamnesis.addClinicalFinding.value').subscribe((out: string) => {
        this.clinicDropdownConfig.buttonText = out;
      }),
      this.translate.stream('pelvisMRT.anamnesis.addPrevSurgery.value').subscribe((out: string) => {
        this.previousOperationDropdownConfig.buttonText = out;
      }),
      this.translate.stream('pelvisMRT.anamnesis.findingTypes2.options').subscribe((out: DropdownModel[]) => {
        this.previousOperationDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.previousOperationDropdownConfig.placeholder = out;
        this.clinicDropdownConfig.placeholder = out;
      })
    );
  }

  calculatePsaVolume(prostateModel: ProstateUiModel) {
    if (!prostateModel) {
      return;
    }

    if (this.model.psaLevel !== null && prostateModel.volumeInCm3 !== null) {
      const value = this.model.psaLevel / parseFloat(prostateModel.volumeInCm3.replace(',', '.'));
      prostateModel.psaVolume = isNaN(value) ? null : value.toFixed(2).replace('.', ',');
    } else {
      prostateModel.psaVolume = null;
      prostateModel.psaVolumeType = PsaVolumeTypeEnum.None;
    }
  }
}
