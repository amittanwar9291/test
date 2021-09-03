import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DistributionTypeEnum } from '@enums/elbowMRT/bones';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { BonesHelperService } from '../bones-helper.service';

@Component({
  selector: 'rr-bone-marrow-edema',
  templateUrl: './bone-marrow-edema.component.html',
  styleUrls: ['./bone-marrow-edema.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BoneMarrowEdemaComponent {
  @Input() model: BonesFindingUiModel;
  isLessThan18YearsOld: boolean;

  distributionTypeEnum = DistributionTypeEnum;

  constructor(private bonesHelperService: BonesHelperService) {
    this.bonesHelperService.isLessThan18YearsOld.subscribe(value => {
      this.isLessThan18YearsOld = value;
    });
  }
}
