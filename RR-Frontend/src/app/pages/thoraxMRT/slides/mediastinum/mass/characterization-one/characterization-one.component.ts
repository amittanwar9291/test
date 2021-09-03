import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  HistologyKnownTypeEnum,
  HomogeneityTypeEnum,
  MediastinumDifferentialDiagnosisTypeEnum,
  MediastinumLimitationTypeEnum,
  ShapeTypeEnum
} from '@enums/thoraxMRT/mediastinum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MediastinumHelperService } from '../../mediastinum-helper.service';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: MediastinumFindingUiModel;

  histologyKnownTypeEnum = HistologyKnownTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;
  mediastinumLimitationTypeEnum = MediastinumLimitationTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  mediastinumDifferentialDiagnosisTypeEnum = MediastinumDifferentialDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW008: DropdownModel[];

  isDWISelected = false;

  constructor(private translateService: TranslateService, private mediastinumHelperService: MediastinumHelperService) {
    this.mediastinumHelperService.isDWISelected.subscribe(value => {
      this.isDWISelected = value;
    });
  }

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
      this.translateService.stream('thoraxMRT.mediastinum.W008.options').subscribe((out: DropdownModel[]) => {
        this.ddlW008 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clear2ndAnd3rdPlane(value: number) {
    if (value === null) {
      this.model.expansionSecondPlaneInMm = null;
      this.clear3rdPlane(value);
    }
  }

  clear3rdPlane(value: number) {
    if (value === null) {
      this.model.expansionThirdPlaneInMm = null;
    }
  }

  clearDDLCheckboxes() {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.isSubordinated = false;
    this.model.isSuspected = false;
  }
}
