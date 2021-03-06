import { FindingBase } from '@models/shared/finding/finding.base';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { ConfigurationFindingTypeEnum } from '@enums/spineCT/configuration/configuration-finding-type.enum';
import { PatterTypeEnum } from '@enums/spineCT/configuration/scoliosis/pattern-type.enum';
import { VertexSpineTypeEnum } from '@enums/spineCT/configuration/scoliosis/vertex-spine-type.enum';
import { DetailsTypeEnum } from '@enums/spineCT/configuration/spondylolisthesis/details-type.enum';
import { MeyerdingClassificationTypeEnum } from '@enums/spineCT/configuration/spondylolisthesis/meyerding-classification-type.enum';
import { LumbosacralTypeEnum } from '@enums/spineCT/configuration/transitional-vertebra/lumbosacral-type.enum';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { DefinitionTypeEnum } from '@enums/spineCT/configuration/transitional-vertebra/definition-type.enum';
import { EtiologyTypeEnum } from '@enums/spineCT/configuration/spondylolisthesis/etiology-type.enum';
import { CastellviTypeEnum } from '@enums/spineCT/configuration/transitional-vertebra/castellvi-type.enum';
import { PathologyTypeEnum } from '@enums/spineCT/configuration/curvature-disorders/pathology-type.enum';

export class ConfigurationFindingUiModel extends FindingBase {
  findingType: ConfigurationFindingTypeEnum;
  isCervicalSpine: boolean;
  isThoracicSpine: boolean;
  isLumbarSpine: boolean;
  cervicalSpineLocation: SpineLocation;
  thoracicSpineLocation: SpineLocation;
  lumbarSpineLocation: SpineLocation;
  cervicalSpinePathologyType: PathologyTypeEnum;
  thoracicSpinePathologyType: PathologyTypeEnum;
  lumbarSpinePathologyType: PathologyTypeEnum;
  detailsType: DetailsTypeEnum;
  etiologyType: EtiologyTypeEnum;
  spondylolisthesisLocation: SpineLocation;
  isCervical: boolean;
  isC7NeckRib: boolean;
  isThoracolumbar: boolean;
  isLumbalizedTH12: boolean;
  isLumbosacral: boolean;
  cervicalSpineCobbAngle: number;
  thoracicSpineCobbAngle: number;
  lumbarSpineCobbAngle: number;
  patternType: PatterTypeEnum;
  isCervicothoracic: boolean;
  cervicalVertexSpineType: VertexSpineTypeEnum;
  thoracicVertexSpineType: VertexSpineTypeEnum;
  lumbarVertexSpineType: VertexSpineTypeEnum;
  isTorsionCervicalSpine: boolean;
  isTorsionThoracicSpine: boolean;
  isTorsionLumbarSpine: boolean;
  meyerdingClassificationType: MeyerdingClassificationTypeEnum;
  lumbosacralType: LumbosacralTypeEnum;
  sideType: SideTypeEnum;
  definitionType: DefinitionTypeEnum;
  castellviType: CastellviTypeEnum;

  constructor() {
    super();
    this.findingType = ConfigurationFindingTypeEnum.None;
    this.isCervicalSpine = false;
    this.isThoracicSpine = false;
    this.isLumbarSpine = false;
    this.cervicalSpineLocation = new SpineLocation();
    this.thoracicSpineLocation = new SpineLocation();
    this.lumbarSpineLocation = new SpineLocation();
    this.cervicalSpinePathologyType = PathologyTypeEnum.None;
    this.thoracicSpinePathologyType = PathologyTypeEnum.None;
    this.lumbarSpinePathologyType = PathologyTypeEnum.None;
    this.detailsType = DetailsTypeEnum.None;
    this.etiologyType = EtiologyTypeEnum.None;
    this.spondylolisthesisLocation = new SpineLocation();
    this.isCervical = false;
    this.isC7NeckRib = false;
    this.isThoracolumbar = false;
    this.isLumbalizedTH12 = false;
    this.isLumbosacral = false;
    this.cervicalSpineCobbAngle = null;
    this.thoracicSpineCobbAngle = null;
    this.lumbarSpineCobbAngle = null;
    this.patternType = PatterTypeEnum.None;
    this.isCervicothoracic = false;
    this.cervicalVertexSpineType = VertexSpineTypeEnum.None;
    this.thoracicVertexSpineType = VertexSpineTypeEnum.None;
    this.lumbarVertexSpineType = VertexSpineTypeEnum.None;
    this.isTorsionCervicalSpine = false;
    this.isTorsionThoracicSpine = false;
    this.isTorsionLumbarSpine = false;
    this.meyerdingClassificationType = MeyerdingClassificationTypeEnum.None;
    this.lumbosacralType = LumbosacralTypeEnum.None;
    this.sideType = SideTypeEnum.None;
    this.definitionType = DefinitionTypeEnum.None;
    this.castellviType = CastellviTypeEnum.None;
  }
}
