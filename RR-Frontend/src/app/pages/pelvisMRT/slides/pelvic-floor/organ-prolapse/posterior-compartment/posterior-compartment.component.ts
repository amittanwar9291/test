import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { MPLGrading } from '@interfaces/mpl-garding.interface';
import { PhaseTypeEnum } from '@enums/pelvisMRT/pelvic-floor/phase-type.enum';
import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import { RectalIntussusceptionTypeEnum } from '@enums/pelvisMRT/pelvic-floor/rectal-intussusception-type.enum';
import { ExpansionLongitudionalTypeEnum } from '@enums/pelvisMRT/pelvic-floor/expansion-longitudional-type.enum';
import { HorizontalExpansionTypeEnum } from '@enums/pelvisMRT/pelvic-floor/horizontal-expansion-type.enum';
import { GradingTypeEnum } from '@enums/pelvisMRT/pelvic-floor/grading-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-posterior-compartment',
  templateUrl: './posterior-compartment.component.html',
  styleUrls: ['./posterior-compartment.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PosteriorCompartmentComponent implements OnInit {
  @Input() model: PelvicFloorFindingUiModel;
  @Input() MPLGrading: MPLGrading;
  @Input() isDynamicOnLocalization: boolean;

  phaseType = PhaseTypeEnum;
  directionType = DirectionTypeEnum;
  rectalIntussusceptionType = RectalIntussusceptionTypeEnum;
  expansionLongitudionalType = ExpansionLongitudionalTypeEnum;
  horizontalExpansionType = HorizontalExpansionTypeEnum;
  pclGradingText = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default';

  constructor(private validationHelperService: ValidationHelperService) {}

  ngOnInit() {
    this.setMPLGradingValue();
  }

  setMPLGradingValue(): void {
    if (this.model.expansionInReferenceToAnteriorRectalWallInMm === null) {
      this.pclGradingText = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default';
      this.model.anteriorRectoceleGradingInMm = GradingTypeEnum.None;
      this.model.anteriorRectocelePhaseType = PhaseTypeEnum.None;
      this.validationHelperService.removeError(nameof<PelvicFloorFindingUiModel>(m => m.anteriorRectocelePhaseType));
    } else if (this.model.expansionInReferenceToAnteriorRectalWallInMm < 20) {
      this.pclGradingText = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.light';
      this.model.anteriorRectoceleGradingInMm = GradingTypeEnum.Light;
    } else if (
      this.model.expansionInReferenceToAnteriorRectalWallInMm >= 20 &&
      this.model.expansionInReferenceToAnteriorRectalWallInMm <= 40
    ) {
      this.pclGradingText = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.medium';
      this.model.anteriorRectoceleGradingInMm = GradingTypeEnum.Medium;
    } else if (this.model.expansionInReferenceToAnteriorRectalWallInMm > 40) {
      this.pclGradingText = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.heavy';
      this.model.anteriorRectoceleGradingInMm = GradingTypeEnum.Heavy;
    }
  }

  clearStaticInputs() {
    this.pclGradingText = 'pelvisMRT.pelvicFloor.mmNormal60ToMm.value.default';
    this.model.anteriorRectoceleGradingInMm = GradingTypeEnum.None;
  }
}
