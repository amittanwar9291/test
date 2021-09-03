import { Component, Input, OnInit } from '@angular/core';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { NumberOfDivertuculaTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/number-of-divertucula-type.enum';
import { AbscessMaximumDiameterTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/abscess-maximum-diameter-type.enum';
import { PerforationTypeEnum } from '@enums/pelvisMRT/rectum/common/perforation-type.enum';
import { ComplicationsFistulaTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/complications-fistula-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { PathologyTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/pathology-type.enum';
import { IntestinalWallThickeningTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/intestinal-wall-thickening-type.enum';

@Component({
  selector: 'rr-sigmoid-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SigmoidCharacterizationOneComponent implements OnInit {
  @Input() model: RectumFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
  @Input() localizationModel: LocalizationUiModel;
  pathologyType: typeof PathologyTypeEnum;
  perforationType: typeof PerforationTypeEnum;
  complicationsFistulaType: typeof ComplicationsFistulaTypeEnum;
  intestinalWallThickeningType: typeof IntestinalWallThickeningTypeEnum;
  numberOfDiverticulaType: typeof NumberOfDivertuculaTypeEnum;
  cmReinforcedType: typeof SimpleAnswerEnum;
  genderType: typeof GenderTypeEnum;
  abscessMaximumDiameterType: typeof AbscessMaximumDiameterTypeEnum;

  macroAbscessMoreThan10Mm: boolean;

  constructor() {
    this.pathologyType = PathologyTypeEnum;
    this.perforationType = PerforationTypeEnum;
    this.complicationsFistulaType = ComplicationsFistulaTypeEnum;
    this.intestinalWallThickeningType = IntestinalWallThickeningTypeEnum;
    this.numberOfDiverticulaType = NumberOfDivertuculaTypeEnum;
    this.macroAbscessMoreThan10Mm = false;
    this.cmReinforcedType = SimpleAnswerEnum;
    this.genderType = GenderTypeEnum;
    this.abscessMaximumDiameterType = AbscessMaximumDiameterTypeEnum;
  }

  ngOnInit() {
    this.maximumDiameterChange(this.model.abscessMaximumDiameter);
  }

  maximumDiameterChange(inputValue): void {
    if (inputValue !== null && inputValue <= 10) {
      this.model.abscessMaximumDiameterType = AbscessMaximumDiameterTypeEnum.Micro;
      this.macroAbscessMoreThan10Mm = false;
      this.model.isPossibleCtGuidedDrainage = false;
    } else if (inputValue !== null && inputValue > 10) {
      this.model.abscessMaximumDiameterType = AbscessMaximumDiameterTypeEnum.Macro;
      this.macroAbscessMoreThan10Mm = true;
    } else {
      this.model.abscessMaximumDiameterType = AbscessMaximumDiameterTypeEnum.None;
      this.model.isPossibleCtGuidedDrainage = false;
    }
  }

  resetContent() {
    this.model.isPeritonitis = false;
    this.model.isIleus = false;
    this.model.isStenosis = false;
    this.model.isPhlegmons = false;
    this.model.complicationsFistulaType = ComplicationsFistulaTypeEnum.None;
    this.model.isFistula = false;
    this.model.isHemorrhagic = false;
    this.model.isFreeFluid = false;
  }
}
