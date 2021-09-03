import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import { Subscription } from 'rxjs';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { FormValidationService } from '@services/shared/validation/form-validation.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { DistributionTypeEnum } from '@enums/feetMRT/bones/bone-marrow-edema/distribution-type.enum';
import { AssociatedFindingsTypeEnum } from '@enums/feetMRT/bones/bone-marrow-edema/associated-findings-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/feetMRT/bones/differential-diagnosis-type.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-bone-marrow-edema',
  templateUrl: './bone-marrow-edema.component.html',
  styleUrls: ['./bone-marrow-edema.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BoneMarrowEdemaComponent implements OnDestroy, OnInit {
  @Input() model: BonesFindingUiModel;
  localizationSideSubsription: Subscription;
  largeLocalizerOpenSubscription: Subscription;
  translateSubscription: Subscription;
  side: 'right' | 'left';

  distributionType: typeof DistributionTypeEnum;
  associatedFindingsType: typeof AssociatedFindingsTypeEnum;
  differentialDiagnosisType: typeof DifferentialDiagnosisTypeEnum;
  dropdownModel: DropdownModel[];

  constructor(
    private translate: TranslateService,
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {
    this.localizationSideSubsription = this.bonesHelperService.localizationSide.subscribe(value => (this.side = value as 'right' | 'left'));
    this.distributionType = DistributionTypeEnum;
    this.associatedFindingsType = AssociatedFindingsTypeEnum;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  }

  ngOnInit() {
    this.largeLocalizerOpenSubscription = this.bonesHelperService.largeLocalizerOpen.subscribe(() => {
      if (this.enumMapper.mapToString(this.model.threeDimensionalLocalization) !== 'None') {
        this.validationHelperService.removeError('threeDimensionalLocalization');
      }
    });
    this.initTranslations();
  }

  initTranslations() {
    this.translateSubscription = this.translate
      .stream('feetMRT.bones.differentialDiagnosisBoneMarrowEdemaArray.options')
      .subscribe((out: DropdownModel[]) => {
        this.dropdownModel = Object.keys(out).map(e => out[e]);
      });
  }

  ngOnDestroy() {
    this.localizationSideSubsription.unsubscribe();
    this.largeLocalizerOpenSubscription.unsubscribe();
    this.translateSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpen.next(
      new ComplexLocalizerData(ComplexLocalizersTypes.bigFootBonesLocalizer, 'multi', 'L005', false, false)
    );
  }

  pickedLocalizationAreas(columnNumber: number): boolean {
    return true;
    // const { threeDimensionalLocalization } = this.model;
    // const pickedAreas = Object.keys(threeDimensionalLocalization).filter(key => threeDimensionalLocalization[key]).length;
    // if (columnNumber < 5) {
    //   if (pickedAreas !== 1) {
    //     this.model.distributionType = 'None';
    //     this.model.associatedFindingsType = 'None';
    //     return true;
    //   } else {
    //     return false;
    //   }
    // } else {
    //   if (pickedAreas < 2) {
    //     this.model.differentialDiagnosisType = 'None';
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  }
}
