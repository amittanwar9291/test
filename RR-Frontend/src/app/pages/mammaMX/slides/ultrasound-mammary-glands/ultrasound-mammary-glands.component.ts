import { Component } from '@angular/core';
import { nameof } from 'ts-simple-nameof';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { UltrasoundMammaryGlandsUiModel } from '@models/mammaMX/ui/ultrasound-mammary-glands/ultrasound-mammary-glands-ui.model';
import { UltrasoundMammaryGlandsValidation } from '@models/mammaMX/ui/ultrasound-mammary-glands/ultrasound-mammary-glands-validation.model';
import { BreastSimple } from '@models/shared/mamma/breast/breast-simple.model';
import { BreastCross } from '@models/shared/mamma/breast/breast-cross.model';
import { BreastPizzaSlices } from '@models/shared/mamma/breast/breast-pizza-slices.model';
import { CutisType, MPectoralisType, ParenchymaDensityType, SubcutaneousFatTissueType } from '@enums/mammaMX/ultrasound-mammary-glands/';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-ultrasound-mammary-glands',
  templateUrl: './ultrasound-mammary-glands.component.html',
  styleUrls: ['./ultrasound-mammary-glands.component.scss']
})
export class UltrasoundMammaryGlandsComponent extends SlideBaseComponent<UltrasoundMammaryGlandsUiModel> {
  cutisType: typeof CutisType;
  cutisRetractionPresence: typeof SimpleAnswerEnum;
  subcutaneousFatTissueType: typeof SubcutaneousFatTissueType;
  mPectoralisType: typeof MPectoralisType;
  parenchymaDensityType: typeof ParenchymaDensityType;

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
      UltrasoundMammaryGlandsUiModel,
      commonServices,
      UltrasoundMammaryGlandsValidation
    );

    this.cutisType = CutisType;
    this.cutisRetractionPresence = SimpleAnswerEnum;
    this.subcutaneousFatTissueType = SubcutaneousFatTissueType;
    this.mPectoralisType = MPectoralisType;
    this.parenchymaDensityType = ParenchymaDensityType;
  }

  resetCutisLocation(): void {
    this.model.cutisLocation = new BreastCross();
    this.validationHelperService.removeError(nameof<UltrasoundMammaryGlandsUiModel>(m => m.cutisLocation));
  }

  resetRetractionLocation(): void {
    this.model.retractionLocation = new BreastPizzaSlices();
    this.validationHelperService.removeError(nameof<UltrasoundMammaryGlandsUiModel>(m => m.retractionLocation));
  }

  resetSubcutaneousFatTissueLocation(): void {
    this.model.subcutaneousFatTissueLocation = new BreastCross();
    this.validationHelperService.removeError(nameof<UltrasoundMammaryGlandsUiModel>(m => m.subcutaneousFatTissueLocation));
  }

  resetMPectoralisLocation(): void {
    this.model.mPectoralisLocation = new BreastSimple();
    this.validationHelperService.removeError(nameof<UltrasoundMammaryGlandsUiModel>(m => m.mPectoralisLocation));
  }
}
