import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ClassificationCorletteTypeEnum, LiverDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/liver';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-bile-duct-characterization-two',
  templateUrl: './characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: LiverFindingUiModel;
  @Input() bileDuctMassDDOptions: DropdownModel[];

  differentialDiagnosis1 = LiverDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2 = LiverDifferentialDiagnosisTypeEnum;
  classificationCorletteType = ClassificationCorletteTypeEnum;

  resetDD1Dependent(): void {
    this.model.differentialDiagnosis2 = LiverDifferentialDiagnosisTypeEnum.None;
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.liver.fileUpload;
  }

  get isPerihilarInLocalizerSelected(): boolean {
    return this.model.liverPathologyLocations.perihilar;
  }
}
