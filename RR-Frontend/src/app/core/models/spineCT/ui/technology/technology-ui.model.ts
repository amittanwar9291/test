import { TechnologyCtBaseUiModel } from '@models/shared/newTechnology/ui/technology-ct-base-ui.model';
import { AcquisitionUiModel } from '@models/spineCT/ui/technology/acquisition-ui.model';
import { ReconstructionFindingUiModel } from '@models/spineCT/ui/technology/reconstruction-finding-ui.model';

export class TechnologyUiModel extends TechnologyCtBaseUiModel<AcquisitionUiModel, ReconstructionFindingUiModel> {
  // Contrast Medium custom controls
  isIntravenous: boolean;
  isIntradural: boolean;

  // Protocols fourth column custom controls
  isRespiratoryArtifacts: boolean;
  isPulsationArtifacts: boolean;
  imageQualityType: number;

  constructor() {
    super(AcquisitionUiModel);

    // Contrast Medium custom controls
    this.isIntravenous = false;
    this.isIntradural = false;

    // Protocols fourth column custom controls
    this.isRespiratoryArtifacts = false;
    this.isPulsationArtifacts = false;
    this.imageQualityType = 0;
  }
}
