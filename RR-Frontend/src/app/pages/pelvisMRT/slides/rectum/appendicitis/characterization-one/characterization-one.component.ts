import { ControlContainer, NgForm } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-appendagitis-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AppengicitisCharacterizationOneComponent {
  @Input() model: RectumFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  resetLengthOfTheAppendix() {
    if (this.model.diameterOfTheAppendix === null) {
      this.model.lengthOfTheAppendix = null;
    }
  }
}
