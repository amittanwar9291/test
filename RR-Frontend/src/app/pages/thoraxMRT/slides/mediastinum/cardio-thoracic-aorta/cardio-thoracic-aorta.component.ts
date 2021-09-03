import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  AnomaliesTypeEnum,
  DetailsCongenitalVascularRingsTypeEnum,
  DetailsKinkingTypeEnum,
  MediastinumDifferentialDiagnosisTypeEnum,
  PathologyTypeEnum,
  ProgressMonitoringTypeEnum,
  ShapeTypeEnum
} from '@enums/thoraxMRT/mediastinum';
import { AorticArch } from '@models/angiographyMRT/ui/localizers/aortic-arch.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';
import { MediastinumLargeLocalizerConfigModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-large-localizer-config.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MediastinumHelperService } from '../mediastinum-helper.service';

@Component({
  selector: 'rr-cardio-thoracic-aorta',
  templateUrl: './cardio-thoracic-aorta.component.html',
  styleUrls: ['./cardio-thoracic-aorta.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CardioThoracicAortaComponent implements OnInit, OnDestroy {
  @Input() model: MediastinumFindingUiModel;

  pathologyTypeEnum = PathologyTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;
  anomaliesTypeEnum = AnomaliesTypeEnum;
  detailsKinkingTypeEnum = DetailsKinkingTypeEnum;
  detailsCongenitalVascularRingsTypeEnum = DetailsCongenitalVascularRingsTypeEnum;
  progressMonitoringTypeEnum = ProgressMonitoringTypeEnum;
  mediastinumDifferentialDiagnosisTypeEnum = MediastinumDifferentialDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW006: DropdownModel[];

  constructor(private translateService: TranslateService, private mediastinumHelperService: MediastinumHelperService) {}

  ngOnInit() {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.mediastinum.W006.options').subscribe((out: DropdownModel[]) => {
        this.ddlW006 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  openLargeLocalizer(modelPropName: string) {
    this.mediastinumHelperService.largeLocalizerOpen.next(new MediastinumLargeLocalizerConfigModel(modelPropName));
  }

  clearIsSelected() {
    this.model.isSuspected = false;
  }

  clear2ndColDetails(value: AnomaliesTypeEnum): string {
    return this.model.anomaliesType !== value ? 'third-col-block' : '';
  }
  clear1stColDetails(value: PathologyTypeEnum): string {
    if (this.model.pathologyType !== value) {
      return 'second-col-block third-col-block fourth-col-block';
    }
    return '';
  }

  clearLocalizer() {
    this.model.localizationType = new AorticArch();
  }
}
