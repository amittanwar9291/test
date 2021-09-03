import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { JawTeethTypeEnum } from '@enums/headMRT/facial-skull/JawTeeth/jaw-teeth-type.enum';
import { CharacterizationTypeEnum } from '@enums/headMRT/facial-skull/JawTeeth/characterization-type.enum';
import { OtherNonOdontogenicCystTypeEnum } from '@enums/headMRT/facial-skull/JawTeeth/other-non-odontogenic-cyst-type.enum';
import { ClassificationTypeEnum } from '@enums/headMRT/facial-skull/JawTeeth/classification-type.enum';
import { DiscDisplacementTypeEnum } from '@enums/headMRT/facial-skull/JawTeeth/disc-displacement-type.enum';
import { OsseousChangesTypeEnum } from '@enums/headMRT/facial-skull/JawTeeth/osseous-changes-type.enum';
import { FacialSkullHelperService } from '../../facial-skull-helper.service';
import { JawTeethAssessmentTypeEnum } from '@enums/headMRT/facial-skull/JawTeeth/jaw-teeth-assessment-type.enum';
import { ToothAnomaliesTypeEnum } from '@enums/headMRT/facial-skull/JawTeeth/tooth-anomalies-type.enum';

@Component({
  selector: 'rr-jaw-teeth-characterization',
  templateUrl: './jaw-teeth-characterization.component.html',
  styleUrls: ['./jaw-teeth-characterization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class JawTeethCharacterizationComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  w057: DropdownModel[];
  w075: DropdownModel[];
  isCMYes: boolean;

  subscriptions: Subscription[] = [];

  jawTeethTypeEnum = JawTeethTypeEnum;
  characterizationTypeEnum = CharacterizationTypeEnum;
  otherNonOdontogenicCystTypeEnum = OtherNonOdontogenicCystTypeEnum;
  classificationTypeEnum = ClassificationTypeEnum;
  discDisplacementTypeEnum = DiscDisplacementTypeEnum;
  osseousChangesTypeEnum = OsseousChangesTypeEnum;
  jawTeethAssessmentTypeEnum = JawTeethAssessmentTypeEnum;
  toothAnomaliesTypeEnum = ToothAnomaliesTypeEnum;

  containerToResetDuringChangeJawTeethType =
    'typeContainer characterizationContainer differentialDiagnosisContainer classificationAccordingToWilkesContainer firstAssociatedFindingsContainer extensionContainer secondAssociatedFindingsContainer';

  constructor(private translate: TranslateService, private facialSkullHelperService: FacialSkullHelperService) {
    this.subscriptions.push(
      this.translate.stream('headMRT.facialSkull.w057.options').subscribe((out: DropdownModel[]) => (this.w057 = out)),
      this.translate.stream('headMRT.facialSkull.w075.options').subscribe((out: DropdownModel[]) => (this.w075 = out)),
      this.facialSkullHelperService.isCMYes.subscribe(v => (this.isCMYes = v))
    );
  }

  onMaxDiameterChange() {
    if (!this.model.maxDiameter) {
      this.model.size2ndPlane = null;
      this.model.size3rdPlane = null;
    }
  }

  onSize2ndPlaneChange() {
    if (!this.model.size2ndPlane) {
      this.model.size3rdPlane = null;
    }
  }

  onSequesterMaxDiameterChange() {
    if (!this.model.sequesterMaxDiameter) {
      this.model.sequesterSize2ndPlane = null;
      this.model.sequesterSize3rdPlane = null;
    }
  }

  onSequesterSize2ndPlaneChange() {
    if (!this.model.sequesterSize2ndPlane) {
      this.model.sequesterSize3rdPlane = null;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
