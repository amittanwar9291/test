import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { PleuraDiagnosisTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-diagnosis-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from 'app/app.config';
import { Subscription } from 'rxjs';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

@Component({
  selector: 'rr-differential-diagnosis-tab',
  templateUrl: './differential-diagnosis-tab.component.html',
  styleUrls: ['./differential-diagnosis-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisTabComponent implements OnInit, OnDestroy {
  @Input() model: PleuraFindingUiModel;

  pleuraDiagnosisTypeEnum = PleuraDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW022: DropdownGroupedModel[];
  ddlW023: DropdownGroupedModel[];

  referencePictureRrIds = new ReferencePictureRRIds(
    'uni_06_001',
    'uni_06_002',
    'uni_06_003',
    'uni_06_004',
    'uni_06_005',
    'uni_06_006',
    'uni_06_007'
  );

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.pleura.W022.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddlW022 = out;
      })
    );

    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.pleura.W023.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddlW023 = out;
      })
    );
  }

  clearDDLCheckboxes() {
    this.clearDDL2And3Checkboxes();
    this.model.isSuspicionOf = false;
  }

  clearDDL2And3Checkboxes() {
    this.model.isSubordinate = false;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.thoraxMRT.pleura.fileUpload;
  }
}
