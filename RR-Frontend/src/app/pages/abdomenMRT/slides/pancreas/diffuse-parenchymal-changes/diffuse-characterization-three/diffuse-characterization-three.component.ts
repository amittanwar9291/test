import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { ContrastEnhancementQuantitativeEnum, PhaseTypeEnum } from '@enums/abdomenMRT/pancreas';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';
import { AppConfig } from '../../../../../../app.config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DiffuseParenchymalDifferentialDiagnosisEnum } from '@enums/abdomenMRT/pancreas/diffuse-parenchymal-changes';

@Component({
  selector: 'rr-diffuse-characterization-three',
  templateUrl: './diffuse-characterization-three.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseCharacterizationThreeComponent {
  @Input() model: PancreasFindingUiModel;
  @Input() isCMReinforced: boolean;
  @Input() isDWI: boolean;
  @Input() contrastEnhancementDistributionDropdown: DropdownModel[];
  @Input() diffuseParenchymalDifferentialDiagnosis1Options: DropdownModel[];

  contrastEnhancementQuantitative = ContrastEnhancementQuantitativeEnum;
  characterizationIIIHomogeneityType = HomogeneityTypeEnum;
  phaseType = PhaseTypeEnum;
  diffuseParenchymalDifferentialDiagnosisType = DiffuseParenchymalDifferentialDiagnosisEnum;

  isHomoHeterogenEnabled() {
    return [this.contrastEnhancementQuantitative.Low, this.contrastEnhancementQuantitative.Strong].includes(
      this.model.contrastEnhancementQuantitative
    );
  }

  resetDifferentialDiagnosisDependantModel1(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
    this.model.diffuseParenchymalDifferentialDiagnosis2 = DiffuseParenchymalDifferentialDiagnosisEnum.None;
  }

  resetSubordinate(): void {
    this.model.isSubordinate = false;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.pancreas.fileUpload;
  }
}
