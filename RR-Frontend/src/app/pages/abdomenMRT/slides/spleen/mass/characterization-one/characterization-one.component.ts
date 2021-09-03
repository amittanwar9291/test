import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  DelimitationTypeEnum,
  FormTypeEnum,
  HistologyKnownTypeEnum,
  HomogeneityTypeEnum,
  QuantityTypeEnum
} from '@enums/abdomenMRT/spleen';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SpleenFindingUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { SpleenPresetHttpService } from '@services/abdomenMRT/http/spleen/spleen-preset-http.service';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SpleenPresetHttpService
    }
  ]
})
export class CharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: SpleenFindingUiModel;

  descriptionTypeEnum = DescriptionTypeEnum;
  histologyKnownTypeEnum = HistologyKnownTypeEnum;
  quantityTypeEnum = QuantityTypeEnum;
  delimitationTypeEnum = DelimitationTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  formTypeEnum = FormTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW007: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('abdomenMRT.spleen.W007.options').subscribe((out: DropdownModel[]) => {
        this.ddlW007 = Object.values(out);
      })
    );
  }

  resetBothPlanes(): void {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }

  clearDDLCheckboxes() {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  clearHistologyKnownBlock() {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
