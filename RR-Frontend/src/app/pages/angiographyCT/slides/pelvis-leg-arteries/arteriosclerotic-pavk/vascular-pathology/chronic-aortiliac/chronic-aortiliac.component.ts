import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import {
  ChronicLesionsTypeEnum,
  TypeADetailsTypeEnum,
  TypeBDetailsTypeEnum,
  TypeCDetailsTypeEnum,
  TypeDDetailsTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';
import { ClassificationAccordingToTASCIITypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';

@Component({
  selector: 'rr-chronic-aortiliac',
  templateUrl: './chronic-aortiliac.component.html',
  styleUrls: ['./chronic-aortiliac.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChronicAortiliacComponent {
  @Input() model: PelvisLegArteriesFindingUiModel;
  sideTypeEnum = SideTypeEnum;
  chronicLesionsTypeEnum = ChronicLesionsTypeEnum;
  typeADetailsTypeEnum = TypeADetailsTypeEnum;
  typeBDetailsTypeEnum = TypeBDetailsTypeEnum;
  typeCDetailsTypeEnum = TypeCDetailsTypeEnum;
  typeDDetailsTypeEnum = TypeDDetailsTypeEnum;
  classificationAccordingToTASCIITypeEnum = ClassificationAccordingToTASCIITypeEnum;

  isDetailsHeaderActive(): boolean {
    return (
      this.model.chronicLesionsType !== this.chronicLesionsTypeEnum.None &&
      this.model.chronicLesionsType !== this.chronicLesionsTypeEnum.LerichSyndrome
    );
  }

  clearClassificationDetails(value: ChronicLesionsTypeEnum): string {
    return this.model.chronicLesionsType !== value ? 'fourth-col fifth-col' : '';
  }
}
