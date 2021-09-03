import { AcquisitionApiModel } from '@models/thoraxCT/api/technology/acquisition-api.model';
import { TechnologyCtBaseApiModel } from '@models/shared/newTechnology/api/technology-ct-base-api.model';
import { ReconstructionFindingApiModel } from '@models/thoraxCT/api/technology/reconstruction-finding-api.model';

export class TechnologyApiModel extends TechnologyCtBaseApiModel<AcquisitionApiModel, ReconstructionFindingApiModel> {
  // Contrast Medium custom controls
  isIntravenous: boolean;

  // Protocols fourth column custom controls
  isRespiratoryArtifacts: boolean;
  isPulsationArtifacts: boolean;

  constructor() {
    super();

    // Contrast Medium custom controls
    this.isIntravenous = false;

    // Protocols fourth column custom controls
    this.isRespiratoryArtifacts = false;
    this.isPulsationArtifacts = false;
  }
}
