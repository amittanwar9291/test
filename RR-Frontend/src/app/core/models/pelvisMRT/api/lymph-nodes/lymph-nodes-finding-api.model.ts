import { FindingBase } from '@models/shared/finding/finding.base';
import { LymphNodesFindingsTypeEnum } from '@enums/pelvisMRT/lymph-nodes/lymph-nodes-findings-type.enum';
import { FormTypeEnum } from '@enums/pelvisMRT/lymph-nodes/form-type.enum';
import { LimitationTypeEnum } from '@enums/pelvisMRT/lymph-nodes/limitation-type.enum';
import { LymphNodes } from '@models/pelvisMRT/ui/localizers/lymph-nodes';
import { FileApiModel } from '@models/shared/uploader/file-api.model';

export class LymphNodesFindingApiModel extends FindingBase {
  findingType: LymphNodesFindingsTypeEnum;
  localizationType: string;
  formType: FormTypeEnum;
  limitationType: LimitationTypeEnum;
  is12to2: boolean;
  is2to4oclock: boolean;
  is4to6oclock: boolean;
  is6to8oclock: boolean;
  is8to10oclock: boolean;
  is10to12oclock: boolean;
  maxShortAxisDiameter: number;
  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileApiModel;
  imageFileId: string;

  constructor() {
    super();

    this.findingType = LymphNodesFindingsTypeEnum.None;
    this.localizationType = 'None';
    this.formType = FormTypeEnum.None;
    this.limitationType = LimitationTypeEnum.None;
    this.is12to2 = false;
    this.is2to4oclock = false;
    this.is4to6oclock = false;
    this.is6to8oclock = false;
    this.is8to10oclock = false;
    this.is10to12oclock = false;
    this.maxShortAxisDiameter = null;
    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;
  }
}
