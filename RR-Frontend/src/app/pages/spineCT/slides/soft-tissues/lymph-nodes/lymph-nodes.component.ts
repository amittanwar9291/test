import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissuesFindingUiModel } from '@models/spineCT';
import { nameof } from 'ts-simple-nameof';
import { CharacterizationTypeEnum } from '@enums/spineCT/soft-tissues/characterization-type.enum';
import { AppConfig } from '../../../../../app.config';
import { compact } from 'lodash';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { SoftTissuesHelperService } from '../soft-tissues-helper.service';

@Component({
  selector: 'rr-lymph-nodes',
  templateUrl: './lymph-nodes.component.html',
  styleUrls: ['./lymph-nodes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LymphNodesComponent {
  @Input() model: SoftTissuesFindingUiModel;

  characterizationTypeEnum = CharacterizationTypeEnum;

  mandatoryCheckboxes = [
    nameof<SoftTissuesFindingUiModel>(m => m.isCervical),
    nameof<SoftTissuesFindingUiModel>(m => m.isParaaortal),
    nameof<SoftTissuesFindingUiModel>(m => m.isAortocaval),
    nameof<SoftTissuesFindingUiModel>(m => m.isParailiacal),
    nameof<SoftTissuesFindingUiModel>(m => m.isPresacral),
    nameof<SoftTissuesFindingUiModel>(m => m.isInguinal),
    nameof<SoftTissuesFindingUiModel>(m => m.isFemoral)
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
