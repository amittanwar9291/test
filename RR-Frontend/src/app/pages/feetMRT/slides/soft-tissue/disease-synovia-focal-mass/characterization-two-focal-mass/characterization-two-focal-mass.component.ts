import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DifferentialDiagnosisEnum } from '@enums/feetMRT/soft-tissue';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { SoftTissueHelperService } from '../../soft-tissue-helper.service';

@Component({
  selector: 'rr-characterization-two-focal-mass',
  templateUrl: './characterization-two-focal-mass.component.html',
  styleUrls: ['./characterization-two-focal-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoFocalMassComponent implements OnInit {
  @Input() model: SoftTissueFindingUiModel;

  translationSubscriptions: Subscription[] = [];
  differentialDiagnosisW027: DropdownModel[];
  descriptionTypeEnum: typeof DescriptionTypeEnum;
  cmEnhancementTypeEnum: typeof CMEnhancementTypeEnum;
  homogeneityTypeEnum: typeof HomogeneityTypeEnum;
  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  constructor(private translate: TranslateService, private softTissueHelperService: SoftTissueHelperService) {
    this.descriptionTypeEnum = DescriptionTypeEnum;
    this.cmEnhancementTypeEnum = CMEnhancementTypeEnum;
    this.homogeneityTypeEnum = HomogeneityTypeEnum;
    this.isCMYesSubscription = this.softTissueHelperService.isCMYes.subscribe(value => (this.isCMYes = value));
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('feetMRT.softTissue.differentialDiagnosis5.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisW027 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearDiagnosis2() {
    this.model.isSubordinated = false;
    this.model.isSuspicionOf = false;
  }
}
