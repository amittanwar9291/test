import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { HeadCTVesselsLocalizersTypeEnum } from '@enums/headCT/vessels/headCT-vessels-localizers-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { VesselsHelperService } from '../../vessels-helper.service';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { DetailsTypeEnum } from '@enums/headCT/vessels/details-type.enum';
import { PerfusionTypeEnum } from '@enums/headCT/vessels/perfusion/perfusion-type.enum';

@Component({
  selector: 'rr-perfusion-localization-tab',
  templateUrl: './perfusion-localization-tab.component.html',
  styleUrls: ['./perfusion-localization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PerfusionLocalizationTabComponent implements OnInit, OnDestroy {
  @Input() model: VesselsFindingUiModel;
  w012: DropdownModel[];
  subscriptions: Subscription[] = [];

  detailsTypeEnum = DetailsTypeEnum;
  perfusionTypeEnum = PerfusionTypeEnum;
  headCTVesselsLocalizersTypeEnum = HeadCTVesselsLocalizersTypeEnum;

  constructor(private translate: TranslateService, private vesselsHelperService: VesselsHelperService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('headCT.vessels.w012.options').subscribe((out: DropdownModel[]) => (this.w012 = out)),
      this.vesselsHelperService.openLocalizer.subscribe(() => this.onLargeLocalizerClose())
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  openLargeLocalizer(localizerType: HeadCTVesselsLocalizersTypeEnum) {
    this.vesselsHelperService.openLocalizer.next(localizerType);
  }

  isParietalLobe(): boolean {
    return this.model.cortexLocation.parietalLobeRight || this.model.cortexLocation.parietalLobeLeft;
  }

  isOccipitalLobe(): boolean {
    return this.model.cortexLocation.occipitalLobeRight || this.model.cortexLocation.occipitalLobeLeft;
  }

  isTemporalLobe(): boolean {
    return this.model.cortexLocation.temporalLobeRight || this.model.cortexLocation.temporalLobeLeft;
  }

  isCerebellum(): boolean {
    return this.model.cortexLocation.cerebellum;
  }

  isNoLocalizerSelection() {
    return !this.isParietalLobe() && !this.isOccipitalLobe() && !this.isTemporalLobe() && !this.isCerebellum();
  }

  private onLargeLocalizerClose() {
    // for cortexLocation
    if (!this.isParietalLobe()) {
      this.model.isPraecuneus = false;
    }
    if (!this.isOccipitalLobe()) {
      this.model.isCuneus = false;
      this.model.isLingualGyrus = false;
    }
    if (!this.isTemporalLobe()) {
      this.model.isGyrusTemporalisTransversus = false;
      this.model.isLateralOccipitotemporalGyrus = false;
    }
    if (!this.isCerebellum()) {
      this.model.isParsIntermedia = false;
      this.model.isSuperiorCerebellarPeduncle = false;
      this.model.isMiddleCerebellarPeduncle = false;
      this.model.isInferiorCerebellarPeduncle = false;
    }
  }
}
