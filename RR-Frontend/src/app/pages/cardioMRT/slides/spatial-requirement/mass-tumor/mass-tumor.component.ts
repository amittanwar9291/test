import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SpatialRequirementFindingUiModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-finding-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { MarginTypeEnum } from '@enums/cardioMRT/spatial-requirement/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/cardioMRT/spatial-requirement/homogeneity-type.enum';
import { EnhancementIntensityTypeEnum } from '@enums/cardioMRT/spatial-requirement/enhancement-intensity-type.enum';
import { MobilityTypeEnum } from '@enums/cardioMRT/spatial-requirement/mobility-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../../../../../app.config';
import { ControlContainer, NgForm } from '@angular/forms';
import { HeartCompartment } from '@models/cardioMRT/ui/spatial-requirement/heart-compartment.model';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

@Component({
  selector: 'rr-mass-tumor',
  templateUrl: './mass-tumor.component.html',
  styleUrls: ['./mass-tumor.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassTumorComponent implements OnInit {
  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;

  @Input() model: SpatialRequirementFindingUiModel;
  @Input() areContrastEnhancementGroupsDisabled: boolean;

  subscriptions: Subscription[] = [];
  differentialDiagnosis1Dropdown: DropdownModel[];
  differentialDiagnosis2and3Dropdown: DropdownModel[];

  simpleAnswerType: typeof SimpleAnswerEnum;
  marginType: typeof MarginTypeEnum;
  homogeneityType: typeof HomogeneityTypeEnum;
  enhancementIntensityType: typeof EnhancementIntensityTypeEnum;
  mobilityType: typeof MobilityTypeEnum;

  constructor(private translate: TranslateService) {
    this.simpleAnswerType = SimpleAnswerEnum;
    this.marginType = MarginTypeEnum;
    this.homogeneityType = HomogeneityTypeEnum;
    this.enhancementIntensityType = EnhancementIntensityTypeEnum;
    this.mobilityType = MobilityTypeEnum;
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.cardioMRT.spatialRequirement.fileUpload;
  }

  checkIfIKnow(): boolean {
    return this.model.descriptionType === 'IKnow';
  }

  isDiagnosisDisabled(level: number): boolean {
    switch (level) {
      case 2:
        return this.checkIfIKnow() ? this.model.differentialDiagnosis01 === 'None' : this.model.differentialDiagnosis1 === 'None';
      case 3:
        return this.model.differentialDiagnosis2 === 'None';
      default:
        return false;
    }
  }

  clearIsSubordinate(): void {
    this.model.isSubordinate = false;
  }

  resetNonTargetLesionLocalizer(): void {
    this.model.nonTargetLesionLocalizer = new HeartCompartment();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('cardioMRT.spatialRequirement.differentialDiagnosisOptions.options').subscribe(out => {
        this.differentialDiagnosis2and3Dropdown = out;
      }),
      this.translate.stream('cardioMRT.spatialRequirement.extendedDifferentialDiagnosisOptions.options').subscribe(out => {
        this.differentialDiagnosis1Dropdown = out;
      })
    );
  }
}
