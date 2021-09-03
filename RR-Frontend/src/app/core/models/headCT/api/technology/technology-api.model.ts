import { TechnologyCtBaseApiModel } from '@models/shared/newTechnology/api/technology-ct-base-api.model';
import { AcquisitionApiModel } from '@models/headCT/api/technology/acquisition-api.model';
import { ReconstructionFindingApiModel } from '@models/headCT/api/technology/reconstruction-finding-api.model';

export class TechnologyApiModel extends TechnologyCtBaseApiModel<AcquisitionApiModel, ReconstructionFindingApiModel> {
  // Contrast Medium custom controls
  isIntravenous: boolean;
  isIntrathecal: boolean;

  // Protocols fourth column custom controls
  isRespiratoryArtifacts: boolean;
  isPulsationArtifacts: boolean;
  isBeamHardeningArtifact: boolean;
  imageQualityType: string;

  constructor() {
    super();

    // Contrast Medium custom controls
    this.isIntravenous = false;
    this.isIntrathecal = false;

    // Protocols fourth column custom controls
    this.isRespiratoryArtifacts = false;
    this.isPulsationArtifacts = false;
    this.isBeamHardeningArtifact = false;
    this.imageQualityType = 'None';
  }
}
