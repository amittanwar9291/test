import { TechnologyCtBaseApiModel } from '@models/shared/newTechnology/api/technology-ct-base-api.model';
import { AcquisitionApiModel } from '@models/angiographyCT/api/technology/acquisition-api.model';
import { ReconstructionFindingApiModel } from '@models/angiographyCT/api/technology/reconstruction-finding-api.model';

export class TechnologyApiModel extends TechnologyCtBaseApiModel<AcquisitionApiModel, ReconstructionFindingApiModel> {
  // Contrast Medium custom controls
  isIntravenous: boolean;

  // Protocols fourth column custom controls
  isBetaBlocker: boolean;
  isNitroglycerin: boolean;
  isRespiratoryArtifacts: boolean;
  isPulsationArtifacts: boolean;
  imageQualityType: string;

  constructor() {
    super();

    // Contrast Medium custom controls
    this.isIntravenous = false;

    // Protocols fourth column custom controls
    this.isBetaBlocker = false;
    this.isNitroglycerin = false;
    this.isRespiratoryArtifacts = false;
    this.isPulsationArtifacts = false;
    this.imageQualityType = 'None';
  }
}
