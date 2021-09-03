import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HistologyTypeEnum } from '@enums/feetMRT/bones/space-requirement';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesHelperService, ComplexLocalizerData } from '../../bones-helper.service';

@Component({
  selector: 'rr-tumor-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalisationComponent {
  @Input() model: BonesFindingUiModel;
  @Input() differentialDiagnosis: DropdownModel[];
  @Input() feetSide: boolean;

  histologyTypeEnum: typeof HistologyTypeEnum;
  descriptionTypeEnum: typeof DescriptionTypeEnum;

  constructor(private bonesHelperService: BonesHelperService) {
    this.initializeEnums();
  }

  private initializeEnums() {
    this.histologyTypeEnum = HistologyTypeEnum;
    this.descriptionTypeEnum = DescriptionTypeEnum;
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpen.next(
      new ComplexLocalizerData(ComplexLocalizersTypes.bigFootBonesLocalizer, 'single', 'L005', false)
    );
  }

  clearDifferentialDiagnosis01() {
    this.model.histologyType = HistologyTypeEnum.None;
  }

  clearSizeInMm() {
    if (this.model.sizeInMm === null) {
      this.model.secondPlaneInMm = null;
      this.clearSecondLevelInMm();
    }
  }

  clearSecondLevelInMm() {
    if (this.model.secondPlaneInMm === null) {
      this.model.thirdPlaneInMm = null;
    }
  }
}
