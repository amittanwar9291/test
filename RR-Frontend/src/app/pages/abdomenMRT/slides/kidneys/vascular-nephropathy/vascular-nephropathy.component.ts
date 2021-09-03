import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { PathologyTypeEnum, SideTypeEnum, LocalizationTypeEnum, RenalInfarctionCharacterizationTypeEnum } from '@enums/abdomenMRT/kidneys';
import { ExpansionInputsGroupModelInterface } from '@interfaces/controls/expansion-inputs-group-model.interface';
import { AppConfig } from 'app/app.config';
import { nameof } from 'ts-simple-nameof';
import { ImageFileTypeEnum } from '@enums/abdomenMRT/kidneys/image-file-type.enum';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

@Component({
  selector: 'rr-vascular-nephropathy',
  templateUrl: './vascular-nephropathy.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VascularNephropathyComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() isCMReinforced: boolean;
  @Input() isDWI: boolean;

  sideType = SideTypeEnum;
  pathologyType = PathologyTypeEnum;
  localizationType = LocalizationTypeEnum;
  renalInfarctionCharacterizationType = RenalInfarctionCharacterizationTypeEnum;

  expansionGroupConfig: ExpansionInputsGroupModelInterface = {
    mainHeaderTranslationKey: 'abdomenMRT.kidneys.extension.value',
    mainHeaderRrId: 'abd_m_070368',
    size: {
      mandatory: false,
      modelName: nameof<KidneysFindingUiModel>(m => m.renalInfarctionExtensionSizeInMm),
      headerTranslationKey: 'abdomenMRT.kidneys.size.value',
      headerRrId: 'abd_m_070369',
      inputRrId: 'abd_m_070370',
      labelTranslationKey: 'abdomenMRT.kidneys.inMm.value',
      labelRrId: 'abd_m_070371',
      min: 1,
      max: 99,
      placeholder: '--'
    },
    secondPlane: {
      modelName: nameof<KidneysFindingUiModel>(m => m.renalInfarctionSecondPlaneInMm),
      headerTranslationKey: 'abdomenMRT.kidneys.2ndPlane.value',
      headerRrId: 'abd_m_070372',
      inputRrId: 'abd_m_070373',
      labelTranslationKey: 'abdomenMRT.kidneys.inMm.value',
      labelRrId: 'abd_m_070374',
      min: 1,
      max: 99,
      placeholder: '--'
    },
    thirdPlane: {
      modelName: nameof<KidneysFindingUiModel>(m => m.renalInfarctionThirdPlaneInMm),
      headerTranslationKey: 'abdomenMRT.kidneys.3rdPlane.value',
      headerRrId: 'abd_m_070375',
      inputRrId: 'abd_m_070376',
      labelTranslationKey: 'abdomenMRT.kidneys.inMm.value',
      labelRrId: 'abd_m_070377',
      min: 1,
      max: 99,
      placeholder: '--'
    }
  };

  imageFileTypeEnum = ImageFileTypeEnum;

  vascularNephropathyReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_07_001',
    'uni_07_002',
    'uni_07_003',
    'uni_07_006',
    'uni_07_007',
    'uni_07_004',
    'uni_07_005'
  );

  resetPathologyDependentModels(): void {
    this.model.renalInfarctionExtensionSizeInMm = null;
    this.model.renalInfarctionSecondPlaneInMm = null;
    this.model.renalInfarctionThirdPlaneInMm = null;
    this.model.renalInfarctionT1wSignal = 0;
    this.model.renalInfarctionT2wSignal = 0;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.kidneys.fileUpload;
  }
}
