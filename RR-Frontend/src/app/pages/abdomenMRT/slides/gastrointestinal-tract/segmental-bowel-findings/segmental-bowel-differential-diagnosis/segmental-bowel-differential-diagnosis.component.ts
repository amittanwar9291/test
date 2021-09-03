import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import {
  ContrastEnhancementDistributionTypeEnum,
  EvaluationTypeEnum,
  ExtensionTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/segmental-bowel-findings';
import {
  ContrastEnhancementQuantitativeTypeEnum,
  GastrointestinalDifferentialDiagnosisTypeEnum,
  GastrointestinalHomogeneityTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/common';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

@Component({
  selector: 'rr-segmental-bowel-differential-diagnosis',
  templateUrl: './segmental-bowel-differential-diagnosis.component.html',
  styleUrls: ['./segmental-bowel-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SegmentalBowelDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() isCMReinforced: boolean;
  differentialDiagnosisOptions: DropdownModel[];
  w038Evaluation: DropdownModel[];
  w039Extension: DropdownModel[];

  subscriptions: Subscription[] = [];
  differentialDiagnosis1Type = GastrointestinalDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2Type = GastrointestinalDifferentialDiagnosisTypeEnum;
  evaluation1Type = EvaluationTypeEnum;
  extension1Type = ExtensionTypeEnum;
  evaluation2Type = EvaluationTypeEnum;
  extension2Type = ExtensionTypeEnum;
  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityType = GastrointestinalHomogeneityTypeEnum;
  cmEnhancementHomogeneityType = GastrointestinalHomogeneityTypeEnum;
  contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum;

  constructor(private translateService: TranslateService) {}
  ngOnInit() {
    this.initTranslations();
  }
  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('abdomenMRT.gastrointestinal.w037SegmentalBowel.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions = Object.values(out);
      }),
      this.translateService.stream('abdomenMRT.gastrointestinal.w038Evaluation.options').subscribe((out: DropdownModel[]) => {
        this.w038Evaluation = out;
      }),
      this.translateService.stream('abdomenMRT.gastrointestinal.w039Extension.options').subscribe((out: DropdownModel[]) => {
        this.w039Extension = out;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  resetDropdown1(): void {
    this.model.evaluationType = this.evaluation1Type.None;
    this.model.extensionType = this.extension1Type.None;
    this.model.evaluationType = this.evaluation2Type.None;
    this.model.extensionType = this.extension2Type.None;
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }
  resetDropdwon2(): void {
    if (this.model.differentialDiagnosis1Type === GastrointestinalDifferentialDiagnosisTypeEnum.BackwashIleitis) {
      this.model.isSubordinate = false;
    } else if (this.model.differentialDiagnosis1Type === GastrointestinalDifferentialDiagnosisTypeEnum.CrohnSDisease) {
      this.model.isSubordinate = false;
    } else if (this.model.differentialDiagnosis1Type === GastrointestinalDifferentialDiagnosisTypeEnum.UlcerativeColitis) {
      this.model.isSubordinate = false;
    } else {
      this.model.evaluationType = this.evaluation2Type.None;
      this.model.extensionType = this.extension2Type.None;
      this.model.isSubordinate = false;
    }
  }

  areEvaluationAndExtension1DropdownsHidden(): boolean {
    return [
      GastrointestinalDifferentialDiagnosisTypeEnum.CrohnSDisease,
      GastrointestinalDifferentialDiagnosisTypeEnum.BackwashIleitis,
      GastrointestinalDifferentialDiagnosisTypeEnum.UlcerativeColitis
    ].includes(this.model.differentialDiagnosis1Type);
  }
  areEvaluationAndExtension2DropdownsHidden(): boolean {
    if (this.model.differentialDiagnosis1Type === GastrointestinalDifferentialDiagnosisTypeEnum.BackwashIleitis) {
      return false;
    } else if (this.model.differentialDiagnosis1Type === GastrointestinalDifferentialDiagnosisTypeEnum.CrohnSDisease) {
      return false;
    } else if (this.model.differentialDiagnosis1Type === GastrointestinalDifferentialDiagnosisTypeEnum.UlcerativeColitis) {
      return false;
    } else {
      return [
        GastrointestinalDifferentialDiagnosisTypeEnum.CrohnSDisease,
        GastrointestinalDifferentialDiagnosisTypeEnum.BackwashIleitis,
        GastrointestinalDifferentialDiagnosisTypeEnum.UlcerativeColitis
      ].includes(this.model.differentialDiagnosis2Type);
    }
  }

  removeUploadedFile(): void {
    this.referencePictureComponent?.resetReferencePicture();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.gastrointestinalTract.fileUpload;
  }
}
