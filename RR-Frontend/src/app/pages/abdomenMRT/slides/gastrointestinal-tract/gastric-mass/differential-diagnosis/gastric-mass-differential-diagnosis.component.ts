import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';
import { AppConfig } from '../../../../../../app.config';
import { GastrointestinalDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/common';

@Component({
  selector: 'rr-gastric-mass-differential-diagnosis',
  templateUrl: './gastric-mass-differential-diagnosis.component.html',
  styleUrls: ['./gastric-mass-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class GastricMassDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() differentialDiagnosis1Options: DropdownModel[];
  @Input() differentialDiagnosis2Options: DropdownModel[];

  subscriptions: Subscription[] = [];
  differentialDiagnosis1Type = GastrointestinalDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2Type = GastrointestinalDifferentialDiagnosisTypeEnum;
  descriptionType = DescriptionTypeEnum;
  differentialDiagnosisType = GastrointestinalDifferentialDiagnosisTypeEnum;

  constructor(private translateService: TranslateService) {}
  ngOnInit() {
    this.initTranslations();
  }
  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('abdomenMRT.gastrointestinal.w035Raumforderung.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosis1Options = Object.values(out);
      })
    ),
      this.subscriptions.push(
        this.translateService.stream('abdomenMRT.gastrointestinal.w036Raumforderung.options').subscribe((out: DropdownModel[]) => {
          this.differentialDiagnosis2Options = Object.values(out);
        })
      );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  clearIsSuspicionOfAndisSubordinate() {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }
  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.gastrointestinalTract.fileUpload;
  }
}
