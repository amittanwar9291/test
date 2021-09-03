import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocalizationWithinMuscleTypeEnum } from '@enums/spineMRT/soft-tissues';
import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';

@Component({
  selector: 'rr-paravertebral-musculature-characterization-one',
  templateUrl: './paravertebral-musculature-characterization-one.component.html',
  styleUrls: ['./paravertebral-musculature-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ParavertebralMusculatureCharacterizationOneComponent implements OnInit {
  @Input() model: SoftTissuesFindingUiModel;
  @Input() isC0ToC7: boolean;
  @Input() isTH1ToL5: boolean;

  validationGroupMethod =
    'isLongissimusCapitisMuscle isLevatorScapulaeMuscle isSemispinalisColliMuscle isSemispinalisCapitisMuscle isSpleniusCapitisMuscle isTrapeziusMuscle ' +
    'isErectorSpinaeMuscle isQuadratusLumborumMuscle isPsoasMajorMuscle isMultifidusMuscle';

  localizationWithinMuscleTypeEnum: typeof LocalizationWithinMuscleTypeEnum = LocalizationWithinMuscleTypeEnum;

  constructor(private spineHelperService: SpineHelperService) {}

  ngOnInit(): void {
    this.clearLocalizerConnectedValues();
  }

  clearLocalizerConnectedValues() {
    if (this.isC0ToC7 === false) {
      this.model.isLongissimusCapitisMuscle = false;
      this.model.isLevatorScapulaeMuscle = false;
      this.model.isSemispinalisColliMuscle = false;
      this.model.isSemispinalisCapitisMuscle = false;
      this.model.isSpleniusCapitisMuscle = false;
      this.model.isTrapeziusMuscle = false;
    }
    if (this.isTH1ToL5 === false) {
      this.model.isErectorSpinaeMuscle = false;
      this.model.isIliocostalisMuscle = false;
      this.model.isLongissimusMuscle = false;
      this.model.isQuadratusLumborumMuscle = false;
      this.model.isPsoasMajorMuscle = false;
      this.model.isMultifidusMuscle = false;
    }
  }

  getCervicalSpineColumnValidatedElements() {
    if (this.isC0ToC7 && !this.isTH1ToL5) {
      return this.spineHelperService.paravertebralMusclesDynamicValidatedElements.cervicalSpine.join(' ');
    }
    if (this.isC0ToC7 && this.isTH1ToL5) {
      return this.spineHelperService.paravertebralMusclesDynamicValidatedElements.cervicalThoracicLumbarSpine.join(' ');
    }
  }

  getThoracicLumbarSpineColumnValidatedElements() {
    if (this.isTH1ToL5 && !this.isC0ToC7) {
      return this.spineHelperService.paravertebralMusclesDynamicValidatedElements.thoracicLumbarSpine.join(' ');
    }
    if (this.isC0ToC7 && this.isTH1ToL5) {
      return this.spineHelperService.paravertebralMusclesDynamicValidatedElements.cervicalThoracicLumbarSpine.join(' ');
    }
  }
}
