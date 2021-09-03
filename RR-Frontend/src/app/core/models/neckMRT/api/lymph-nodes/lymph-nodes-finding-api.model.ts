import { FindingBase } from '@models/shared/finding/finding.base';
import { LymphNodesFindingTypeEnum, CharacterizationTypeEnum, MarginTypeEnum, ShapeTypeEnum } from '@enums/neckMRT/lymph-nodes';
import { FileApiModel } from '@models/shared/uploader/file-api.model';

export class LymphNodesFindingApiModel extends FindingBase {
  findingType: LymphNodesFindingTypeEnum;
  isLevelIaSubmental: boolean;
  isLevelIbSubmandibular: boolean;
  isLevelIIaUpperInternal: boolean;
  isLevelIIbUpperInternal: boolean;
  isLevelIIIMidInternal: boolean;
  isLevelIVLowerInternal: boolean;
  isLevelVaSuperiorPosteriorcervical: boolean;
  isLevelVbInferiorPosterior: boolean;
  isLevelVIAnteriorCompartment: boolean;
  isLevelVIIUppermediastinalLN: boolean;
  maxShortAxisDiameterInMm: number;
  shapeType: ShapeTypeEnum;
  marginType: MarginTypeEnum;
  isNecrosis: boolean;
  isConglomerateMass: boolean;
  characterizationType: CharacterizationTypeEnum;
  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileApiModel;
  imageFileId: string;

  constructor() {
    super();
    this.findingType = LymphNodesFindingTypeEnum.None;

    this.isLevelIaSubmental = false;
    this.isLevelIbSubmandibular = false;
    this.isLevelIIaUpperInternal = false;
    this.isLevelIIbUpperInternal = false;
    this.isLevelIIIMidInternal = false;
    this.isLevelIVLowerInternal = false;
    this.isLevelVaSuperiorPosteriorcervical = false;
    this.isLevelVbInferiorPosterior = false;
    this.isLevelVIAnteriorCompartment = false;
    this.isLevelVIIUppermediastinalLN = false;
    this.maxShortAxisDiameterInMm = null;
    this.shapeType = ShapeTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.isNecrosis = false;
    this.isConglomerateMass = false;
    this.characterizationType = CharacterizationTypeEnum.None;
    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;
  }
}
