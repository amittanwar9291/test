import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { PleuraHelperService } from '../../pleura-helper.service';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { PleuraSiteTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-site-type.enum';
import { LocalizationTypeEnum } from '@enums/thoraxMRT/pleura/pleural-thickening-mass/localization-type.enum';
import { MarginTypeEnum } from '@enums/thoraxMRT/pleura/common/margin-type.enum';
import { AngleToThoracicWallTypeEnum } from '@enums/thoraxMRT/pleura/pleural-thickening-mass/angle-to-thoracic-wall-type.enum';
import { HistologyKnownTypeEnum } from '@enums/thoraxMRT/pleura/common/histology-known-type.enum';
import { PleuraShapeTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-shape-type.enum';
import { CraniocaudalTypeEnum } from '@enums/thoraxMRT/pleura/common/craniocaudal-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { PleuraDiagnosisTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-diagnosis-type.enum';

@Component({
  selector: 'rr-main-characteristics-tab',
  templateUrl: './main-characteristics-tab.component.html',
  styleUrls: ['./main-characteristics-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MainCharacteristicsTabComponent implements OnInit, OnDestroy {
  @Input() findings: PleuraFindingUiModel[];
  @Input() model: PleuraFindingUiModel;

  descriptionTypeEnum = DescriptionTypeEnum;
  pleuraSiteTypeEnum = PleuraSiteTypeEnum;
  localizationTypeEnum = LocalizationTypeEnum;
  pleuraShapeTypeEnum = PleuraShapeTypeEnum;
  craniocaudalTypeEnum = CraniocaudalTypeEnum;
  histologyKnownTypeEnum = HistologyKnownTypeEnum;
  angleToThoracicWallTypeEnum = AngleToThoracicWallTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  pleuraDiagnosisTypeEnum = PleuraDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW022: DropdownGroupedModel[];

  constructor(private translateService: TranslateService, public pleuraHelperService: PleuraHelperService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.pleura.W022.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddlW022 = out;
      })
    );
  }

  clearDDLValues() {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.isSubordinate = false;
  }

  resetBothPlanes(): void {
    if (!this.model.expansionSizeInMM) {
      this.model.secondPlaneInMm = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
