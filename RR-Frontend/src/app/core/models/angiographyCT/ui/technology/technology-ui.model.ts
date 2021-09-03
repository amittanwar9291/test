import { AcquisitionUiModel } from '@models/angiographyCT/ui/technology/acquisition-ui.model';
import { TechnologyCtBaseUiModel } from '@models/shared/newTechnology/ui/technology-ct-base-ui.model';
import { ReconstructionFindingUiModel } from '@models/angiographyCT/ui/technology/reconstruction-finding-ui.model';

export class TechnologyUiModel extends TechnologyCtBaseUiModel<AcquisitionUiModel, ReconstructionFindingUiModel> {
  // Contrast Medium custom controls
  isIntravenous: boolean;

  // Protocols fourth column custom controls
  isBetaBlocker: boolean;
  isNitroglycerin: boolean;
  isRespiratoryArtifacts: boolean;
  isPulsationArtifacts: boolean;
  imageQualityType: number;

  constructor() {
    super(AcquisitionUiModel);

    // Contrast Medium custom controls
    this.isIntravenous = false;

    // Protocols fourth column custom controls
    this.isBetaBlocker = false;
    this.isNitroglycerin = false;
    this.isRespiratoryArtifacts = false;
    this.isPulsationArtifacts = false;
    this.imageQualityType = 0;
  }
}
