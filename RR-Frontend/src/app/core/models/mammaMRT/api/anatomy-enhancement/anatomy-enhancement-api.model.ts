import { FindingSiliconeApi } from '@models/mammaMRT/api/anatomy-enhancement/finding-silicone-api';
import { FindingMamillaApi } from '@models/mammaMRT/api/anatomy-enhancement/finding-mamilla-api';
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

export class AnatomyEnhancementApi extends ReportModelBase {
  birads: BiradsEnum;
  glandularBody: GlandularBodyEnum;
  parenchymaType: ParenchymaTypeEnum;

  artefact: ArtefactEnum;
  artefactFinding1: ArtefactFindingEnum;
  artefactFinding1Location: string;
  artefactFinding2: ArtefactFindingEnum;
  artefactFinding2Location: string;

  siliconeImplant: SiliconeImplantEnum;
  siliconeImplantFinding1: FindingSiliconeApi;
  siliconeImplantFinding2: FindingSiliconeApi;

  mamille: MamilleEnum;
  mamillaFinding1: FindingMamillaApi;
  mamillaFinding2: FindingMamillaApi;

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
    this.artefactFinding1Location = 'None';
    this.artefactFinding2 = ArtefactFindingEnum.None;
    this.artefactFinding2Location = 'None';

    this.siliconeImplant = SiliconeImplantEnum.None;
    this.siliconeImplantFinding1 = new FindingSiliconeApi();
    this.siliconeImplantFinding2 = new FindingSiliconeApi();

    this.mamille = MamilleEnum.None;
    this.mamillaFinding1 = new FindingMamillaApi();
    this.mamillaFinding2 = new FindingMamillaApi();

    this.parenchymaDynamicContrastType = ParenchymaDynamicContrastTypeEnum.None;
    this.levelParenchymalesSide = LevelParenchymalesSideEnum.None;
    this.onBothSides = ParenchymalesSideEnum.None;
    this.left = ParenchymalesSideEnum.None;
    this.right = ParenchymalesSideEnum.None;
    this.nonEnhancingFindingsType = NonEnhancingFindingsTypeEnum.None;
    this.isFindingsLocalizationRight = false;
    this.isFindingsLocalizationLeft = false;
  }
}
