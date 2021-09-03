import { FindingBase } from '@models/shared/finding/finding.base';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

export class ConfigurationFindingUiModel extends FindingBase {
  findingType: string;

  isCervicalSpine: boolean;
  isThoracicSpine: boolean;
  isLumbarSpine: boolean;
  cervicalSpineLocation: SpineLocation;
  thoracicSpineLocation: SpineLocation;
  lumbarSpineLocation: SpineLocation;

  cervicalSpinePathologyType: string;
  thoracicSpinePathologyType: string;
  lumbarSpinePathologyType: string;

  detailsType: string;
  meyerdingClassificationType: string;
  etiologyType: string;
  spondylolisthesisLocation: SpineLocation;

  isCervical: boolean;
  isC7NeckRib: boolean;
  isThoracolumbar: boolean;
  isLumbalizedTH12: boolean;
  isLumbosacral: boolean;
  lumbosacralType: string;
  sacralizedL5Type: string;

  cervicalSpineScoliosisType: string;
  cervicalSpineCobbAngle: number;
  thoracicSpineScoliosisType: string;
  thoracicSpineCobbAngle: number;
  lumbarSpineScoliosisType: string;
  lumbarSpineCobbAngle: number;

  constructor() {
    super();
    this.findingType = 'None';
    this.isCervicalSpine = false;
    this.isThoracicSpine = false;
    this.isLumbarSpine = false;
    this.cervicalSpineLocation = new SpineLocation();
    this.thoracicSpineLocation = new SpineLocation();
    this.lumbarSpineLocation = new SpineLocation();
    this.cervicalSpinePathologyType = 'None';
    this.thoracicSpinePathologyType = 'None';
    this.lumbarSpinePathologyType = 'None';
    this.detailsType = 'None';
    this.meyerdingClassificationType = 'None';
    this.etiologyType = 'None';
    this.spondylolisthesisLocation = new SpineLocation();
    this.isCervical = false;
    this.isC7NeckRib = false;
    this.isThoracolumbar = false;
    this.isLumbalizedTH12 = false;
    this.isLumbosacral = false;
    this.lumbosacralType = 'None';
    this.sacralizedL5Type = 'None';
    this.cervicalSpineScoliosisType = 'None';
    this.cervicalSpineCobbAngle = null;
    this.thoracicSpineScoliosisType = 'None';
    this.thoracicSpineCobbAngle = null;
    this.lumbarSpineScoliosisType = 'None';
    this.lumbarSpineCobbAngle = null;
  }
}
