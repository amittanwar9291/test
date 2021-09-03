import { Component, Input, OnInit } from '@angular/core';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DifferentialDiagnosisTypeEnum } from '@enums/neckMRT/thyroid';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from 'app/app.config';
import { Subscription } from 'rxjs';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-parathyroid-differential-diagnosis',
  templateUrl: './parathyroid-differential-diagnosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ParathyroidDifferentialDiagnosisComponent implements OnInit {
  @Input() model: ThyroidFindingUiModel;

  subscriptions: Subscription[] = [];
  w032: DropdownModel[];
  w033: DropdownModel[];

  differentialDiagnosisType1 = DifferentialDiagnosisTypeEnum;
  differentialDiagnosisType2 = DifferentialDiagnosisTypeEnum;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.neckMRT.thyroid.fileUpload;
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('neckMRT.thyroid.W032.options').subscribe((out: DropdownModel[]) => {
        this.w032 = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translateService.stream('neckMRT.thyroid.W033.options').subscribe((out: DropdownModel[]) => {
        this.w033 = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
