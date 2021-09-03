import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissuesFindingUiModel } from '@models/spineCT';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { nameof } from 'ts-simple-nameof';
import { SoftTissuesHelperService } from '../../soft-tissues-helper.service';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { compact } from 'lodash';

@Component({
  selector: 'rr-localization-tab',
  templateUrl: './localization-tab.component.html',
  styleUrls: ['./localization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationTabComponent {
  @Input() model: SoftTissuesFindingUiModel;

  sideTypeEnum = SideTypeEnum;

  mandatoryCheckboxes = [
    nameof<SoftTissuesFindingUiModel>(m => m.isLongissimusCapitisMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isLevatorScapulaeMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isSemispinalisColliMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isSemispinalisCapitisMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isSpleniusCapitisMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isTrapeziusMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isCervicalSpineAutochthonous),
    nameof<SoftTissuesFindingUiModel>(m => m.isThoracicOrLumbarSpineAutochthonous),
    nameof<SoftTissuesFindingUiModel>(m => m.isIliocostalisMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isLongissimusMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isQuadratusLumborumMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isPsoasMajorMuscle),
    nameof<SoftTissuesFindingUiModel>(m => m.isMultifidusMuscle)
  ];

  constructor(private softTissuesHelperService: SoftTissuesHelperService) {}

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.spineCT.softTissues.fileUpload;
  }

  isCheckboxesSingleSelect(): boolean {
    return compact(this.mandatoryCheckboxes.map(item => this.model[item])).length === 1;
  }

  onCheckboxChange(): void {
    if (this.isCheckboxesSingleSelect()) {
      return;
    }
    if (this.model.referencePicture.imageFileId) {
      this.softTissuesHelperService.clearImage(this.model.referencePicture.imageFileId).then(() => {
        this.model.referencePicture = new ReferencePictureUiModel();
      });
    } else {
      this.model.referencePicture = new ReferencePictureUiModel();
    }
  }
}
