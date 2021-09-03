import { Component } from '@angular/core';
import { nameof } from 'ts-simple-nameof';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { MammographyParenchymaAnatomyUiModel } from '@models/mammaMX/ui/mammography-parenchyma-anatomy/mammography-parenchyma-anatomy-ui.model';
import { BreastSimple } from '@models/shared/mamma/breast/breast-simple.model';
import { BreastCross } from '@models/shared/mamma/breast/breast-cross.model';
import { MammographyParenchymaAnatomyValidation } from '@models/mammaMX/ui/mammography-parenchyma-anatomy/mammography-parenchyma-anatomy-validation.model';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import {
  VolumeType,
  ParenchymaDensityBreastCompositionType,
  PectoralisMuscleType,
  SubcutaneousFattyTissueType
} from '@enums/mammaMX/mammography-parenchyma-anatomy';

@Component({
  selector: 'rr-mammography-parenchyma-anatomy',
  templateUrl: './mammography-parenchyma-anatomy.component.html',
  styleUrls: ['./mammography-parenchyma-anatomy.component.scss']
})
export class MammographyParenchymaAnatomyComponent extends SlideBaseComponent<MammographyParenchymaAnatomyUiModel> {
  volumeType: typeof VolumeType;
  parenchymaDensityBreastCompositionType: typeof ParenchymaDensityBreastCompositionType;
  pectoralisMuscleType: typeof PectoralisMuscleType;
  subcutaneousFattyTissueType: typeof SubcutaneousFattyTissueType;
  private resetParenchymaDensityCount = 0;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      MammographyParenchymaAnatomyUiModel,
      commonServices,
      MammographyParenchymaAnatomyValidation
    );

    this.volumeType = VolumeType;
    this.parenchymaDensityBreastCompositionType = ParenchymaDensityBreastCompositionType;
    this.pectoralisMuscleType = PectoralisMuscleType;
    this.subcutaneousFattyTissueType = SubcutaneousFattyTissueType;
  }

  resetVolumeLocalization(): void {
    this.model.volumeLocalization = new BreastSimple();
    this.validationHelperService.removeError(nameof<MammographyParenchymaAnatomyUiModel>(m => m.volumeLocalization));
  }

  resetSubcutaneousAdiposeTissueLocalization(): void {
    this.model.subcutaneousAdiposeTissueLocalization = new BreastCross();
    this.validationHelperService.removeError(nameof<MammographyParenchymaAnatomyUiModel>(m => m.subcutaneousAdiposeTissueLocalization));
  }

  resetPectoralisMuscleLocalization(): void {
    this.model.pectoralisMuscleLocalization = new BreastSimple();
    this.validationHelperService.removeError(nameof<MammographyParenchymaAnatomyUiModel>(m => m.pectoralisMuscleLocalization));
  }

  resetParenchymaDensityBreastComposition(): void {
    if (this.resetParenchymaDensityCount > 1 && this.model.volumeType === VolumeType.Ablatio) {
      if (this.model.volumeLocalization.left) {
        this.model.leftParenchymaDensityBreastCompositionType = ParenchymaDensityBreastCompositionType.None;
      } else if (this.model.volumeLocalization.right) {
        this.model.rightParenchymaDensityBreastCompositionType = ParenchymaDensityBreastCompositionType.None;
      }
    }
    this.resetParenchymaDensityCount++;
  }
}
