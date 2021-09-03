import { Component, Input } from '@angular/core';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { FatTypeEnum } from '@enums/pelvisMRT/male-sex/fat-type.enum';
import { SeptationsTypeEnum } from '@enums/pelvisMRT/male-sex/septations-type.enum';
import { SignalLossFlowVoidTypeEnum } from '@enums/pelvisMRT/male-sex/signal-loss-flow-void-type.enum';
import { ScrotumMassInternalChangeLocalizationTypeEnum } from '@enums/pelvisMRT/male-sex/scrotum-mass-internal-change-localization-type.enum';
import { HomogeneityTypeEnum } from '@enums/pelvisMRT/male-sex/homogeneity-type.enum';
import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import { NodularComponentsTypeEnum } from '@enums/pelvisMRT/male-sex/nodular-components-type.enum';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-additional-features-scrotum',
  templateUrl: './additional-features-scrotum.component.html',
  styleUrls: ['./additional-features-scrotum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AdditionalFeaturesScrotumComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  fatType: typeof FatTypeEnum;
  septationsType: typeof SeptationsTypeEnum;
  signalLossFlowVoidType: typeof SignalLossFlowVoidTypeEnum;
  scrotumMassInternalChangeLocalizationType: typeof ScrotumMassInternalChangeLocalizationTypeEnum;
  scrotumMassCmEnchancmentType: typeof CMEnhancementTypeEnum;
  homogeneityType: typeof HomogeneityTypeEnum;
  directionType: typeof DirectionTypeEnum;
  nodularComponentsType: typeof NodularComponentsTypeEnum;
  simpleAnswerType: typeof SimpleAnswerEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums() {
    this.fatType = FatTypeEnum;
    this.septationsType = SeptationsTypeEnum;
    this.signalLossFlowVoidType = SignalLossFlowVoidTypeEnum;
    this.scrotumMassInternalChangeLocalizationType = ScrotumMassInternalChangeLocalizationTypeEnum;
    this.scrotumMassCmEnchancmentType = CMEnhancementTypeEnum;
    this.homogeneityType = HomogeneityTypeEnum;
    this.directionType = DirectionTypeEnum;
    this.nodularComponentsType = NodularComponentsTypeEnum;
    this.simpleAnswerType = SimpleAnswerEnum;
  }

  hasTechnologyDwiBeenSelected() {
    if (!this.technologyModel || !this.technologyModel.sequences.length) {
      return false;
    }

    return !this.technologyModel.sequences.some(sequence => {
      return sequence.weightingType === 'DWI';
    });
  }
}
