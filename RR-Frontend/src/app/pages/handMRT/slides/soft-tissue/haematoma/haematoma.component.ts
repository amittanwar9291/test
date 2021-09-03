import { Component, Input } from '@angular/core';
import { SoftTissueFindingUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { LocalizationTypeEnum } from '@enums/handMRT/soft-tissue/localization-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { SoftTissueHelperService } from '../soft-tissue-helper.service';

@Component({
  selector: 'rr-haematoma',
  templateUrl: './haematoma.component.html',
  styleUrls: ['./haematoma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class HaematomaComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() localizerSide: LocationTypeEnum;

  localizationType = LocalizationTypeEnum;

  constructor(private softTissueHelperService: SoftTissueHelperService) {}

  openLocalizer() {
    this.softTissueHelperService.handDetailslocalizerConfig.next({
      isSingleselection: true,
      description: 'handMRT.softTissue.descriptionAffectedBones.value'
    });
  }
}
