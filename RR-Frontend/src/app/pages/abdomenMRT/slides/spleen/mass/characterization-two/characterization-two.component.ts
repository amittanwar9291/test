import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CmEnhancementDistributionTypeEnum, HomogeneityTypeEnum, SpleenDiagnosisTypeEnum } from '@enums/abdomenMRT/spleen';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { SpleenFindingUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AppConfig } from '../../../../../../app.config';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent implements OnInit, OnDestroy {
  @Input() model: SpleenFindingUiModel;
  @Input() isContrastEnhanced: boolean;
  @Input() isDWIInAnySequence: boolean;

  descriptionType = DescriptionTypeEnum;
  cmEnhancementTypeEnum = CMEnhancementTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  cmEnhancementDistributionTypeEnum = CmEnhancementDistributionTypeEnum;
  spleenDiagnosisTypeEnum = SpleenDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW007: DropdownModel[];
  ddlW008: DropdownModel[];

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

    this.subscriptions.push(
      this.translateService.stream('abdomenMRT.spleen.W008.options').subscribe((out: DropdownModel[]) => {
        this.ddlW008 = Object.values(out);
      })
    );
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.spleen.fileUpload;
  }

  clearDDLCheckboxes() {
    this.model.isSuspicionOf = false;
    this.clearSubordinateCheckbox();
  }

  clearSubordinateCheckbox() {
    this.model.isSubordinate = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  get isCMEnhancementQuantitativeTypeNoOrNone(): boolean {
    return (
      this.model.cmEnhancementQuantitativeType === this.cmEnhancementTypeEnum.No ||
      this.model.cmEnhancementQuantitativeType === this.cmEnhancementTypeEnum.None
    );
  }
}
