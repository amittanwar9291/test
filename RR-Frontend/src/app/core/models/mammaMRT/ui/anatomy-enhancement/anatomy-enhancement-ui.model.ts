import { BreastSegmentShoulder } from '@models/shared/mamma/breast/breast-segment-shoulder.model';
import { FindingSiliconeUi } from '@models/mammaMRT/ui/anatomy-enhancement/finding-silicone-ui';
import { FindingMamillaUi } from '@models/mammaMRT/ui/anatomy-enhancement/finding-mamilla-ui';
import { ReportModelBase } from '@models/report-model-base';

import {
  BiradsEnum,
  GlandularBodyEnum,
  ParenchymaTypeEnum,
  ArtefactEnum,
  ArtefactFindingEnum,
  SiliconeImplantEnum,
  ParenchymaDynamicContrastTypeEnum,
  LevelParenchymalesSideEnum,
  ParenchymalesSideEnum,
  NonEnhancingFindingsTypeEnum,
  MamilleEnum
} from '@enums/mammaMRT/anatomy-enhancement';

export class AnatomyEnhancementUi extends ReportModelBase {
  birads: BiradsEnum;
  glandularBody: GlandularBodyEnum;
  parenchymaType: ParenchymaTypeEnum;

  artefact: ArtefactEnum;
  artefactFinding1: ArtefactFindingEnum;
  artefactFinding1Location: BreastSegmentShoulder;
  artefactFinding2: ArtefactFindingEnum;
  artefactFinding2Location: BreastSegmentShoulder;

  siliconeImplant: SiliconeImplantEnum;
  siliconeImplantFinding1: FindingSiliconeUi;
  siliconeImplantFinding2: FindingSiliconeUi;

  mamille: MamilleEnum;
  mamillaFinding1: FindingMamillaUi;
  mamillaFinding2: FindingMamillaUi;

  parenchymaDynamicContrastType: ParenchymaDynamicContrastTypeEnum;
  levelParenchymalesSide: LevelParenchymalesSideEnum;
  onBothSides: ParenchymalesSideEnum;
  right: ParenchymalesSideEnum;
  left: ParenchymalesSideEnum;
  nonEnhancingFindingsType: NonEnhancingFindingsTypeEnum;
  isFindingsLocalizationRight: boolean;
  isFindingsLocalizationLeft: boolean;

  constructor() {
    super();

    this.birads = BiradsEnum.None;
    this.glandularBody = GlandularBodyEnum.None;
    this.parenchymaType = ParenchymaTypeEnum.None;
    this.artefact = ArtefactEnum.None;
    this.artefactFinding1 = ArtefactFindingEnum.None;
    this.artefactFinding1Location = new BreastSegmentShoulder();
    this.artefactFinding2Location = new BreastSegmentShoulder();
    this.artefactFinding2 = ArtefactFindingEnum.None;

    this.siliconeImplant = SiliconeImplantEnum.None;
    this.siliconeImplantFinding1 = new FindingSiliconeUi();
    this.siliconeImplantFinding2 = new FindingSiliconeUi();

    this.mamille = MamilleEnum.None;
    this.mamillaFinding1 = new FindingMamillaUi();
    this.mamillaFinding2 = new FindingMamillaUi();

    this.parenchymaDynamicContrastType = ParenchymaDynamicContrastTypeEnum.None;
    this.levelParenchymalesSide = LevelParenchymalesSideEnum.None;
    this.onBothSides = ParenchymalesSideEnum.None;
    this.right = ParenchymalesSideEnum.None;
    this.left = ParenchymalesSideEnum.None;
    this.nonEnhancingFindingsType = NonEnhancingFindingsTypeEnum.None;
    this.isFindingsLocalizationRight = false;
    this.isFindingsLocalizationLeft = false;
  }
}
