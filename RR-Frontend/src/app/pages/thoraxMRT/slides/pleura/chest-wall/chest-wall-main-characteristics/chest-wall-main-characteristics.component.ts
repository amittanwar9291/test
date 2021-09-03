import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { PleuraSiteTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-site-type.enum';
import { PleuraHelperService } from '../../pleura-helper.service';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HistologyKnownTypeEnum } from '@enums/thoraxMRT/pleura/common/histology-known-type.enum';
import { CraniocaudalTypeEnum } from '@enums/thoraxMRT/pleura/common/craniocaudal-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { RibsModel } from '@models/shared/thorax/localizers/ribs.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { PleuraDiagnosisTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-diagnosis-type.enum';

@Component({
  selector: 'rr-chest-wall-main-characteristics',
  templateUrl: './chest-wall-main-characteristics.component.html',
  styleUrls: ['./chest-wall-main-characteristics.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChestWallMainCharacteristicsComponent implements OnInit, OnDestroy {
  @Input() model: PleuraFindingUiModel;

  isCMYes: boolean;

  descriptionTypeEnum = DescriptionTypeEnum;
  siteTypeEnum = PleuraSiteTypeEnum;
  histologyKnownTypeEnum = HistologyKnownTypeEnum;
  craniocaudalTypeEnum = CraniocaudalTypeEnum;
  spineLocationDisablePartEnum = SpineSelectionAccessibilityModeEnum;
  pleuraDiagnosisTypeEnum = PleuraDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW024: DropdownGroupedModel[];

  constructor(private translateService: TranslateService, private pleuraHelperService: PleuraHelperService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.pleura.W024.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddlW024 = out;
      })
    );
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

  clearDDLCheckboxes() {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  openLargeLocalizer(model: 'spine' | 'rib') {
    this.pleuraHelperService.largeLocalizerOpen.next(model);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
  clearLocalizer(localizer: string) {
    if (localizer === 'spine') {
      this.model.spineLocations = new SpineLocation();
    } else if (localizer === 'rib') {
      this.model.ribLocations = new RibsModel();
    }
  }
}
