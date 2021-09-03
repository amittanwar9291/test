import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DiameterInfiltratedVeinTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/diameter-infiltrated-vein-type.enum';
import { InfiltrationTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/infiltration-type.enum';
import { MinimumDistanceToMesorectalFasciaTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/minimum-distance-to-mesorectal-fascia-type.enum';
import { RectalCancerCraniallyToPuborectalisType } from '@enums/pelvisMRT/rectum/rectal-carcinoma/rectal-cancer-cranially-to-puborectalis-type.enum';
import { RelationToPuborectalisMuscleTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/relation-to-puborectalis-muscle-type.enum';
import { TumorGrowthOverMuscularisTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/tumor-growth-over-muscularis-type.enum';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: RectumFindingUiModel;
  @Input() localizationModel: LocalizationUiModel;
  @Input() localisationDropdownOptions: DropdownModel[];

  rectalCancerCraniallyToPuborectalisType: typeof RectalCancerCraniallyToPuborectalisType;
  tumorGrowthOverMuscularisType: typeof TumorGrowthOverMuscularisTypeEnum;
  minimumDistanceToMesorectalFasciaType: typeof MinimumDistanceToMesorectalFasciaTypeEnum;
  diameterInfiltratedVeinType: typeof DiameterInfiltratedVeinTypeEnum;
  relationToPuborectalisMuscleType: typeof RelationToPuborectalisMuscleTypeEnum;
  lowRectalCancerType: typeof RectalCancerCraniallyToPuborectalisType;
  infiltrationType: typeof InfiltrationTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.rectalCancerCraniallyToPuborectalisType = RectalCancerCraniallyToPuborectalisType;
    this.tumorGrowthOverMuscularisType = TumorGrowthOverMuscularisTypeEnum;
    this.minimumDistanceToMesorectalFasciaType = MinimumDistanceToMesorectalFasciaTypeEnum;
    this.diameterInfiltratedVeinType = DiameterInfiltratedVeinTypeEnum;
    this.relationToPuborectalisMuscleType = RelationToPuborectalisMuscleTypeEnum;
    this.lowRectalCancerType = RectalCancerCraniallyToPuborectalisType;
    this.infiltrationType = InfiltrationTypeEnum;
  }

  get isMale(): boolean {
    return this.localizationModel?.patientInformation.gender === GenderTypeEnum.Male ? true : false;
  }

  get isFemale(): boolean {
    return this.localizationModel?.patientInformation.gender === GenderTypeEnum.Female ? true : false;
  }

  get isInfiltrationTypeT4b(): boolean {
    return this.model.infiltrationType === this.infiltrationType.T4b ? true : false;
  }

  validationElements = [
    nameof<RectumFindingUiModel>(m => m.isUrinaryBladder),
    nameof<RectumFindingUiModel>(m => m.isUterus),
    nameof<RectumFindingUiModel>(m => m.isSeminalVesicles),
    nameof<RectumFindingUiModel>(m => m.isProstate),
    nameof<RectumFindingUiModel>(m => m.isVagina),
    nameof<RectumFindingUiModel>(m => m.isSacrum),
    nameof<RectumFindingUiModel>(m => m.isCoccygis),
    nameof<RectumFindingUiModel>(m => m.isLevatorAniMuscle),
    nameof<RectumFindingUiModel>(m => m.isMSphincterAni)
  ];
}
