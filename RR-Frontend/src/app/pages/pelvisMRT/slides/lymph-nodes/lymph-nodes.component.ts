import { Component, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AppConfig } from '../../../../app.config';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { LymphNodesUiModel } from '@models/pelvisMRT/ui/lymph-nodes/lymph-nodes-ui.model';
import { LymphNodesFindingUiModel } from '@models/pelvisMRT/ui/lymph-nodes/lymph-nodes-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LymphNodesValidationModel } from '@models/pelvisMRT/ui/lymph-nodes/lymph-nodes-validation.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LymphNodesFindingsTypeEnum } from '@enums/pelvisMRT/lymph-nodes/lymph-nodes-findings-type.enum';
import { FormTypeEnum } from '@enums/pelvisMRT/lymph-nodes/form-type.enum';
import { LimitationTypeEnum } from '@enums/pelvisMRT/lymph-nodes/limitation-type.enum';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { FileService } from '@services/shared/file-service/file.service';

@Component({
  selector: 'rr-lymph-nodes',
  templateUrl: './lymph-nodes.component.html',
  styleUrls: ['./lymph-nodes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LymphNodesComponent extends SlideBaseComponent<LymphNodesUiModel> {
  @ViewChild('uploader') fileUploader;

  findingHandler: DynamicComponentHandler<LymphNodesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  largeLocaliserOpen: boolean;

  areFindings: typeof AreFindingsEnum;
  findingType: typeof LymphNodesFindingsTypeEnum;
  formType: typeof FormTypeEnum;
  limitationType: typeof LimitationTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private fileService: FileService
  ) {
    super(navService, slideRequestService, changeDetectionService, LymphNodesUiModel, commonServices, LymphNodesValidationModel);
    this.largeLocaliserOpen = false;
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, LymphNodesFindingUiModel);
    this.registerGetCallback((model: LymphNodesUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerSaveCallback((outModel: LymphNodesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });

    this.findingsConfiguration();

    this.areFindings = AreFindingsEnum;
    this.findingType = LymphNodesFindingsTypeEnum;
    this.formType = FormTypeEnum;
    this.limitationType = LimitationTypeEnum;
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== this.areFindings.Yes;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.pelvisMRT.lymphNodes.fileUpload;
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'pel_m_110107';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'pel_m_110106';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('pelvisMRT.lymphNodes.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('pelvisMRT.lymphNodes.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('pelvisMRT.lymphNodes.translationBits').subscribe((out: string) => {
        this.findingDropdownConfig.translationBits = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
  }

  clearModel() {
    if (this.findingHandler.currentItem.localizationType.mesorectal === false) {
      this.findingHandler.currentItem.is12to2 = false;
      this.findingHandler.currentItem.is2to4oclock = false;
      this.findingHandler.currentItem.is4to6oclock = false;
      this.findingHandler.currentItem.is6to8oclock = false;
      this.findingHandler.currentItem.is8to10oclock = false;
      this.findingHandler.currentItem.is10to12oclock = false;
    }

    if (this.localizationTypeLengthFilter()) {
      this.findingHandler.currentItem.formType = this.formType.None;
      this.findingHandler.currentItem.limitationType = this.limitationType.None;
      this.findingHandler.currentItem.maxShortAxisDiameter = null;
      if (this.findingHandler.currentItem.referencePicture.imageFileId) {
        this.removeImage();
      } else {
        this.findingHandler.currentItem.referencePicture = new ReferencePictureUiModel();
      }
    }

    this.validationHelperService.removeError('localizationType');
  }

  localizationTypeLengthFilter(): boolean {
    const localizationType = this.findingHandler.currentItem.localizationType;
    const isLocalizationType = Object.keys(localizationType).filter(item => this.findingHandler.currentItem.localizationType[item]);

    return isLocalizationType.length !== 1;
  }

  customLabelCalculator(index: number, handler: DynamicComponentHandler<LymphNodesFindingUiModel>, translationBits): string {
    let base = '';
    const currentFinding = handler.collection[index];
    if (currentFinding.findingType !== 'None') {
      base = translationBits[currentFinding.findingType];
    }
    return base;
  }

  private removeImage() {
    const route = `${this.fileUploadUrl}/${this.model.reportId}/${this.findingHandler.currentItem.referencePicture.imageFileId}`;
    return this.fileService.delete(route).then(() => {
      this.findingHandler.currentItem.referencePicture = new ReferencePictureUiModel();
    });
  }
}
