import { AcquisitionUiModel } from '@models/thoraxCT/ui/technology/acquisition-ui.model';
import { TechnologyCtBaseUiModel } from '@models/shared/newTechnology/ui/technology-ct-base-ui.model';
import { ReconstructionFindingUiModel } from '@models/thoraxCT/ui/technology/reconstruction-finding-ui.model';

export class TechnologyUiModel extends TechnologyCtBaseUiModel<AcquisitionUiModel, ReconstructionFindingUiModel> {
  // Contrast Medium custom controls
  isIntravenous: boolean;

  // Protocols fourth column custom controls
  isRespiratoryArtifacts: boolean;
  isPulsationArtifacts: boolean;

  constructor() {
    super(AcquisitionUiModel);

    // Contrast Medium custom controls
    this.isIntravenous = false;

    // Protocols fourth column custom controls
    this.isRespiratoryArtifacts = false;
    this.isPulsationArtifacts = false;
  }
}
