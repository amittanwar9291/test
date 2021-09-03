import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DifferentialDiagnosisEnum, HomogeneityTypeEnum, QuantitativeTypeEnum } from '@enums/feetMRT/soft-tissue';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SoftTissueHelperService } from '../../soft-tissue-helper.service';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent implements OnInit {
  @Input() model: SoftTissueFindingUiModel;
  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  descriptionTypeEnum: typeof DescriptionTypeEnum;
  quantitativeTypeEnum: typeof QuantitativeTypeEnum;
  homogeneityTypeEnum: typeof HomogeneityTypeEnum;

  translationSubscriptions: Subscription[] = [];
  differentialDiagnosisW017: DropdownModel[];
  differentialDiagnosisW018: DropdownModel[];

  constructor(private translate: TranslateService, private softTissueHelperService: SoftTissueHelperService) {
    this.descriptionTypeEnum = DescriptionTypeEnum;
    this.quantitativeTypeEnum = QuantitativeTypeEnum;
    this.homogeneityTypeEnum = HomogeneityTypeEnum;
    this.isCMYesSubscription = this.softTissueHelperService.isCMYes.subscribe(value => (this.isCMYes = value));
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('feetMRT.softTissue.differentialDiagnosisList3.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisW017 = Object.keys(out).map(e => out[e]);
      })
    );

    this.translationSubscriptions.push(
      this.translate.stream('feetMRT.softTissue.differentialDiagnosisList4.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisW018 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearDiagnosis2and3DependantFields() {
    this.model.isSuspicionOf = false;
    this.clearDiagnosis3DependantFields();
  }

  clearDiagnosis3DependantFields() {
    this.model.isSubordinated = false;
  }
}
