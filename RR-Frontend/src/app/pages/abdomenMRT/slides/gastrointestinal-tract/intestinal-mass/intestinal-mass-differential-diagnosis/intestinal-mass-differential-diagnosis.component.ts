import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { GastrointestinalDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/common';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

@Component({
  selector: 'rr-intestinal-mass-differential-diagnosis',
  templateUrl: './intestinal-mass-differential-diagnosis.component.html',
  styleUrls: ['./intestinal-mass-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IntestinalMassDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: GastrointestinalTractFindingUiModel;
  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;
  differentialDiagnosisType = GastrointestinalDifferentialDiagnosisTypeEnum;
  differentialDiagnosis1Type = GastrointestinalDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2Type = GastrointestinalDifferentialDiagnosisTypeEnum;
  subscriptions: Subscription[] = [];
  differentialDiagnosis1Options: DropdownModel[];
  differentialDiagnosis2Options: DropdownModel[];
  descriptionType = DescriptionTypeEnum;

  constructor(private translateService: TranslateService) {}
  ngOnInit() {
    this.initTranslations();
  }
  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('abdomenMRT.gastrointestinal.w040IntestianlMassDD1.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosis1Options = Object.values(out);
      }),
      this.translateService.stream('abdomenMRT.gastrointestinal.w041IntestianlMassDD2.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosis2Options = Object.values(out);
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  reset() {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
    this.model.differentialDiagnosis2Type = GastrointestinalDifferentialDiagnosisTypeEnum.None;
  }
  removeUploadedFile(): void {
    this.referencePictureComponent?.resetReferencePicture();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.gastrointestinalTract.fileUpload;
  }
}
