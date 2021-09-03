import { Component } from '@angular/core';

import { nameof } from 'ts-simple-nameof';

import { AnatomyEnhancementUi } from '@models/mammaMRT/ui/anatomy-enhancement/anatomy-enhancement-ui.model';
import { AnatomyEnhancementValidationModel } from '@models/mammaMRT/ui/anatomy-enhancement/anatomy-enhancement-validation.model';
import { FindingSiliconeUi } from '@models/mammaMRT/ui/anatomy-enhancement/finding-silicone-ui';
import { FindingMamillaUi } from '@models/mammaMRT/ui/anatomy-enhancement/finding-mamilla-ui';
import { BreastSegmentShoulder } from '@models/shared/mamma/breast/breast-segment-shoulder.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { RatingUiModel } from '@models/mammaMRT/ui/rating/rating-ui.model';
import { TechnologyUiModel } from '@models/mammaMRT/ui/technology/technology-ui.model';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { IPageConnection } from '@interfaces/page-connection.interface';

import {
  ArtefactEnum,
  ArtefactFindingEnum,
  BiradsEnum,
  NonEnhancingFindingsTypeEnum,
  ParenchymaDynamicContrastTypeEnum,
  GlandularBodyEnum,
  ParenchymaTypeEnum,
  LevelParenchymalesSideEnum,
  MamilleEnum,
  ParenchymalesSideEnum,
  SiliconeImplantEnum,
  SiliconeImplantTypeEnum
} from '@enums/mammaMRT/anatomy-enhancement';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-anatomy-enhancement',
  templateUrl: './anatomy-enhancement.component.html',
  styleUrls: ['./anatomy-enhancement.component.scss']
})
export class AnatomyEnhancementComponent extends SlideBaseComponent<AnatomyEnhancementUi> {
  grade: DropdownModel[];
  rupture: DropdownModel[];

  previousSiliconeImplantType1: string;
  previousSiliconeImplantType2: string;
  cmEnchancementApplied = SimpleAnswerEnum.None;

  cmEnchancement: typeof SimpleAnswerEnum;
  birads: typeof BiradsEnum;
  glandularBody: typeof GlandularBodyEnum;
  parenchymaType: typeof ParenchymaTypeEnum;
  artefact: typeof ArtefactEnum;
  artefactFinding1: typeof ArtefactFindingEnum;
  artefactFinding2: typeof ArtefactFindingEnum;
  siliconeImplant: typeof SiliconeImplantEnum;
  siliconeImplantType: typeof SiliconeImplantTypeEnum;
  parenchymaDynamicContrastType: typeof ParenchymaDynamicContrastTypeEnum;
  levelParenchymalesSide: typeof LevelParenchymalesSideEnum;
  onBothSides: typeof ParenchymalesSideEnum;
  nonEnhancingFindingsType: typeof NonEnhancingFindingsTypeEnum;
  mamille: typeof MamilleEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnatomyEnhancementUi, commonServices, AnatomyEnhancementValidationModel);

    this.birads = BiradsEnum;
    this.glandularBody = GlandularBodyEnum;
    this.parenchymaType = ParenchymaTypeEnum;
    this.artefact = ArtefactEnum;
    this.artefactFinding1 = ArtefactFindingEnum;
    this.artefactFinding2 = ArtefactFindingEnum;
    this.siliconeImplant = SiliconeImplantEnum;
    this.siliconeImplantType = SiliconeImplantTypeEnum;
    this.parenchymaDynamicContrastType = ParenchymaDynamicContrastTypeEnum;
    this.levelParenchymalesSide = LevelParenchymalesSideEnum;
    this.onBothSides = ParenchymalesSideEnum;
    this.nonEnhancingFindingsType = NonEnhancingFindingsTypeEnum;
    this.mamille = MamilleEnum;
    this.cmEnchancement = SimpleAnswerEnum;

    const pageConnection = this.preparePageConnectionObject();
    this.addPageConnection(pageConnection.pageNr, RatingUiModel, pageConnection.condition, pageConnection.callback);
    this.registerGetCallback(() => {
      this.previousSiliconeImplantType1 = this.model.siliconeImplantFinding1.siliconeImplantType;
      this.previousSiliconeImplantType2 = this.model.siliconeImplantFinding2.siliconeImplantType;
    });
    this.registerConnection();
  }

  disableDropdowns1IfSiliconomOrCapsulitisOrNone(): boolean {
    return (
      this.model.siliconeImplantFinding1.siliconeImplantType === SiliconeImplantTypeEnum.Siliconom ||
      this.model.siliconeImplantFinding1.siliconeImplantType === SiliconeImplantTypeEnum.Capsulitis ||
      this.model.siliconeImplantFinding1.siliconeImplantType === SiliconeImplantTypeEnum.None
    );
  }

  disableDropdowns2IfSiliconomOrCapsulitisOrNone(): boolean {
    return (
      this.model.siliconeImplantFinding2.siliconeImplantType === SiliconeImplantTypeEnum.Siliconom ||
      this.model.siliconeImplantFinding2.siliconeImplantType === SiliconeImplantTypeEnum.Capsulitis ||
      this.model.siliconeImplantFinding2.siliconeImplantType === SiliconeImplantTypeEnum.None
    );
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('mammaMRT.anatomyEnhancement.bakerGrades.options').subscribe((out: DropdownModel[]) => {
        this.grade = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('mammaMRT.anatomyEnhancement.ruptures.options').subscribe((out: DropdownModel[]) => {
        this.rupture = Object.keys(out).map(e => out[e]);
      })
    );
  }

  resetRightArtefactLocalizer() {
    this.model.artefactFinding1Location = new BreastSegmentShoulder();
    this.validationHelperService.removeError('artefactFinding1Location');
  }

  resetLeftArtefactLocalizer() {
    this.model.artefactFinding2Location = new BreastSegmentShoulder();
    this.validationHelperService.removeError('artefactFinding2Location');
  }

  resetBothArtefactTabs() {
    this.model.artefactFinding1 = ArtefactFindingEnum.None;
    this.model.artefactFinding2 = ArtefactFindingEnum.None;
    this.resetRightArtefactLocalizer();
    this.resetLeftArtefactLocalizer();
  }

  resetSiliconeFinding1() {
    this.model.siliconeImplantFinding1 = new FindingSiliconeUi();
    this.validationHelperService.removeError('siliconeImplantFinding1.location');
  }

  resetSiliconeFinding2() {
    this.model.siliconeImplantFinding2 = new FindingSiliconeUi();
    this.validationHelperService.removeError('siliconeImplantFinding2.location');
  }

  resetSiliconeFinding1AndSaveID(value: SiliconeImplantTypeEnum) {
    const savedImplantType = this.model.siliconeImplantFinding1.siliconeImplantType;
    const siliconeOldId = this.model.siliconeImplantFinding1.id;

    this.resetSiliconeFinding1();
    this.model.siliconeImplantFinding1.id = siliconeOldId;
    this.model.siliconeImplantFinding1.siliconeImplantType = SiliconeImplantTypeEnum[value];

    if (value === this.previousSiliconeImplantType1) {
      this.model.siliconeImplantFinding1.siliconeImplantType = SiliconeImplantTypeEnum[savedImplantType];
    }

    this.previousSiliconeImplantType1 = value;
  }

  resetSiliconeFinding2AndSaveID(value: SiliconeImplantTypeEnum) {
    const savedImplantType = this.model.siliconeImplantFinding2.siliconeImplantType;
    const siliconeOldId = this.model.siliconeImplantFinding2.id;

    this.resetSiliconeFinding2();
    this.model.siliconeImplantFinding2.id = siliconeOldId;
    this.model.siliconeImplantFinding2.siliconeImplantType = SiliconeImplantTypeEnum[value];

    if (value === this.previousSiliconeImplantType2) {
      this.model.siliconeImplantFinding2.siliconeImplantType = SiliconeImplantTypeEnum[savedImplantType];
    }

    this.previousSiliconeImplantType2 = value;
  }

  resetBothSiliconeFindings() {
    const siliconePreviousIds = [this.model.siliconeImplantFinding1.id, this.model.siliconeImplantFinding2.id];

    this.resetSiliconeFinding1();
    this.resetSiliconeFinding2();

    [this.model.siliconeImplantFinding1.id, this.model.siliconeImplantFinding2.id] = siliconePreviousIds;
  }

  resetBothMamillaFindings() {
    const mamillaFindingPreviousIds = [this.model.mamillaFinding1.id, this.model.mamillaFinding2.id];

    this.model.mamillaFinding1 = new FindingMamillaUi();
    this.model.mamillaFinding2 = new FindingMamillaUi();

    [this.model.mamillaFinding1.id, this.model.mamillaFinding2.id] = mamillaFindingPreviousIds;

    this.validationHelperService.removeError('mamillaFinding1.mamillaFindingLocation');
    this.validationHelperService.removeError('mamillaFinding2.mamillaFindingLocation');
  }

  resetFindingsWithoutEnhancementLocalization() {
    this.model.isFindingsLocalizationRight = false;
    this.model.isFindingsLocalizationLeft = false;
    if (this.model.nonEnhancingFindingsType === NonEnhancingFindingsTypeEnum.None) {
      this.validationHelperService.removeError(nameof<AnatomyEnhancementUi>(m => m.isFindingsLocalizationRight));
    }
  }

  // Connection with 9th page
  private preparePageConnectionObject(): IPageConnection<RatingUiModel> {
    const condition = () => this.model.glandularBody !== GlandularBodyEnum.None;
    const callback = (model: RatingUiModel) => {
      switch (this.model.glandularBody) {
        case GlandularBodyEnum.AlmostEntirelyFat: {
          model.acrDensityIndex = 1;
          break;
        }
        case GlandularBodyEnum.ScatteredFibroglandularTissue: {
          model.acrDensityIndex = 2;
          break;
        }
        case GlandularBodyEnum.HeterogeneousFibroglandularTissue: {
          model.acrDensityIndex = 3;
          break;
        }
        case GlandularBodyEnum.ExtremeFibroglandularTissue: {
          model.acrDensityIndex = 4;
          break;
        }
      }
    };
    return {
      pageNr: 9,
      condition,
      callback
    };
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (remoteModel: TechnologyUiModel) => {
      this.cmEnchancementApplied = remoteModel.cmReinforcedType;
      this.updateValidationModel(this.shouldValidateGlandParenchyma.bind(this));
    });
  }

  private shouldValidateGlandParenchyma(): boolean {
    return this.model.birads === BiradsEnum.BIRADS40 && this.cmEnchancementApplied === SimpleAnswerEnum.Yes;
  }

  private updateValidationModel(condition: () => boolean): void {
    this.validationHelperService.updateElementInValidationModel({
      modelName: nameof<AnatomyEnhancementUi>(m => m.parenchymaDynamicContrastType),
      validateCondition: {
        customConditionFunction: condition
      }
    });
  }
}
