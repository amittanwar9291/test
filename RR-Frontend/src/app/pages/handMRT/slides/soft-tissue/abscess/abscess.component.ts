import { Component, Input } from '@angular/core';
import { SoftTissueFindingUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { LocalizationTypeEnum } from '@enums/handMRT/soft-tissue/localization-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { SoftTissueHelperService } from '../soft-tissue-helper.service';

@Component({
  selector: 'rr-abscess',
  templateUrl: './abscess.component.html',
  styleUrls: ['./abscess.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AbscessComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() localizerModel: LocationTypeEnum;
  localizationType = LocalizationTypeEnum;

  constructor(private softTissueHelperService: SoftTissueHelperService) {}

  openLocalizer() {
    this.softTissueHelperService.handDetailslocalizerConfig.next({
      isSingleselection: true,
      description: 'handMRT.softTissue.descriptionAffectedBones.value'
    });
  }
}
