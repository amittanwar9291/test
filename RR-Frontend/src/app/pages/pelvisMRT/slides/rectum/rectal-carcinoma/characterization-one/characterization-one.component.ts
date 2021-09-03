import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocalizationAxialTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/localization-axial-type.enum';
import { RectalCarcinomaMorphologyType } from '@enums/pelvisMRT/rectum/rectal-carcinoma/rectal-carcinoma-morphology-type.enum';
import { RelationToPuborectalisMuscleTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/relation-to-puborectalis-muscle-type.enum';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: RectumFindingUiModel;
  @Input() localisationDropdownOptions: DropdownModel[];

  localizationAxialTypeEnum: typeof LocalizationAxialTypeEnum;
  rectalCarcinomaMorphologyType: typeof RectalCarcinomaMorphologyType;
  relationToPuborectalisMuscleType: typeof RelationToPuborectalisMuscleTypeEnum;

  constructor() {
    this.localizationAxialTypeEnum = LocalizationAxialTypeEnum;
    this.rectalCarcinomaMorphologyType = RectalCarcinomaMorphologyType;
    this.relationToPuborectalisMuscleType = RelationToPuborectalisMuscleTypeEnum;
  }
}
