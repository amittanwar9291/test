import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';
import { LiverDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/liver';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AppConfig } from 'app/app.config';
import { Subscription } from 'rxjs';
import { LiverHelperService } from '../../liver-helper.service';

@Component({
  selector: 'rr-focal-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent implements OnDestroy {
  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;
  @Input() model: LiverFindingUiModel;
  @Input() focalLiverLesionDDOptions1: DropdownModel[];
  @Input() focalLiverLesionDDOptions2: DropdownModel[];

  subscriptions: Subscription[] = [];
  isOneLocalizerSectionOrAnyLobeCheckbox: boolean;

  differentialDiagnosis = LiverDifferentialDiagnosisTypeEnum;
  differentialDiagnosis1 = LiverDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2 = LiverDifferentialDiagnosisTypeEnum;
  differentialDiagnosis3 = LiverDifferentialDiagnosisTypeEnum;
  descriptionType = DescriptionTypeEnum;

  constructor(private liverHelperService: LiverHelperService) {
    this.subscriptions.push(
      this.liverHelperService.isOneLocalizerSectionOrAnyLobeCheckbox.subscribe(v => {
        this.isOneLocalizerSectionOrAnyLobeCheckbox = v;
        if (!this.isOneLocalizerSectionOrAnyLobeCheckbox) {
          this.removeUploadedFile();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  resetDD1Dependent(): void {
    this.model.isSuspicionOf = false;
    this.resetDD2Dependent();
  }

  resetDD2Dependent(): void {
    this.model.isSubordinate = false;
  }

  removeUploadedFile(): void {
    this.referencePictureComponent?.resetReferencePicture();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.liver.fileUpload;
  }
}
