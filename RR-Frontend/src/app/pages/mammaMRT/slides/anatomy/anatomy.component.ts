import { Component } from '@angular/core';

import { NavigationService } from '@services/shared/navigation/navigation.service';

import { AnatomyValidation } from '@models/mammaMRT/ui/anatomy/anatomy-validation.model';
import { AnatomyUiModel } from '@models/mammaMRT/ui/anatomy/anatomy-ui.model';
import { BreastSimple } from '@models/shared/mamma/breast/breast-simple.model';
import { BreastCross } from '@models/shared/mamma/breast/breast-cross.model';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { CutisThicknessTypeEnum, PectoralisMuscleTypeEnum, SubcutaneousTissueSpaceTypeEnum, VolumeTypeEnum } from '@enums/mammaMRT/anatomy';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-anatomy',
  templateUrl: './anatomy.component.html',
  styleUrls: ['./anatomy.component.scss']
})
export class AnatomyComponent extends SlideBaseComponent<AnatomyUiModel> {
  volumeType: typeof VolumeTypeEnum;
  cutisThicknessType: typeof CutisThicknessTypeEnum;
  simpleAnswerType: typeof SimpleAnswerEnum;
  subcutaneousTissueSpaceType: typeof SubcutaneousTissueSpaceTypeEnum;
  pectoralisMuscleType: typeof PectoralisMuscleTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnatomyUiModel, commonServices, AnatomyValidation);

    this.volumeType = VolumeTypeEnum;
    this.cutisThicknessType = CutisThicknessTypeEnum;
    this.simpleAnswerType = SimpleAnswerEnum;
    this.subcutaneousTissueSpaceType = SubcutaneousTissueSpaceTypeEnum;
    this.pectoralisMuscleType = PectoralisMuscleTypeEnum;
  }

  clearVolume(): void {
    this.model.volumeLocation = new BreastSimple();
    this.validationHelperService.removeError(nameof<AnatomyUiModel>(m => m.volumeLocation));
  }

  clearCutisThickness(): void {
    this.model.cutisThicknessLocation = new BreastCross();
    this.validationHelperService.removeError(nameof<AnatomyUiModel>(m => m.cutisThicknessLocation));
  }

  clearCutisRetraction(): void {
    this.model.cutisRetractionLocation = new BreastCross();
    this.validationHelperService.removeError(nameof<AnatomyUiModel>(m => m.cutisRetractionLocation));
  }

  clearSubcutaneousTissueType(): void {
    this.model.subcutaneousFatSpaceLocation = new BreastCross();
    this.validationHelperService.removeError(nameof<AnatomyUiModel>(m => m.subcutaneousFatSpaceLocation));
  }

  clearPectoralisMuscle(): void {
    this.model.pectoralisMuscleLocation = new BreastSimple();
    this.validationHelperService.removeError(nameof<AnatomyUiModel>(m => m.pectoralisMuscleLocation));
  }
}
