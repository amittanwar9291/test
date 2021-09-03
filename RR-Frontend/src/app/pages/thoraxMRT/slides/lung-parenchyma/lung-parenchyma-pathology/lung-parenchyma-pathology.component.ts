import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SuspicionTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/lung-parenchyma-pathology/suspicion-type.enum';
import { LungParenchymaFindingUiModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { LungParenchymaHelperService } from '../lung-parenchyma-helper.service';
import { LungParenchymaLargeLocalizerConfig } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-large-localizer-config.model';

@Component({
  selector: 'rr-lung-parenchyma-pathology',
  templateUrl: './lung-parenchyma-pathology.component.html',
  styleUrls: ['./lung-parenchyma-pathology.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LungParenchymaPathologyComponent {
  @Input() model: LungParenchymaFindingUiModel;

  suspicionType: typeof SuspicionTypeEnum;
  constructor(private lungParenchymaHelperService: LungParenchymaHelperService) {
    this.suspicionType = SuspicionTypeEnum;
  }

  resetInputs() {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    }
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
  openLargeLocalizer(modelPropName: string) {
    this.lungParenchymaHelperService.largeLocalizerOpen.next(new LungParenchymaLargeLocalizerConfig(modelPropName));
  }
}
