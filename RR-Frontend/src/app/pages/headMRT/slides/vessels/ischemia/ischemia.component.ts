import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';
import { ArteriesSegmentsLocalizerModel } from '@models/shared/angiography/localizers/arteries-segments-localizer.model';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof/index';
import { VesselsHelperService } from '../vessels-helper.service';

@Component({
  selector: 'rr-ischemia',
  templateUrl: './ischemia.component.html',
  styleUrls: ['./ischemia.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IschemiaComponent implements OnInit, OnDestroy {
  @Input() model: VesselsFindingUiModel;
  @Input() activeTabIndex: number;
  @Input() isContrastEnhanced: boolean;
  @Input() isDWIInAnySequence: boolean;
  @Output() activeTabIndexUpdate = new EventEmitter<number>();
  @Input() isCMYes: boolean;

  arteriesSegmentsLocalizerModel = ArteriesSegmentsLocalizerModel;
  subscriptions: Subscription[] = [];

  constructor(private vesselHelperService: VesselsHelperService) {}

  drainageAreasValidation = [
    nameof<VesselsFindingUiModel>(m => m.isSphenoparietalSinusRight),
    nameof<VesselsFindingUiModel>(m => m.isSphenoparietalSinusLeft),
    nameof<VesselsFindingUiModel>(m => m.isVeinOfLabbeRight),
    nameof<VesselsFindingUiModel>(m => m.isVeinOfLabbeLeft),
    nameof<VesselsFindingUiModel>(m => m.isInternalCerebralVeins),
    nameof<VesselsFindingUiModel>(m => m.isCorticalVeins)
  ].join(' ');

  localizationValidationGroup = [
    nameof<VesselsFindingUiModel>(m => m.arterialTerritoryType),
    nameof<VesselsFindingUiModel>(m => m.formType),
    nameof<VesselsFindingUiModel>(m => m.vascularTerritoryType),
    nameof<VesselsFindingUiModel>(m => m.vascularTerritoryLocations),
    this.drainageAreasValidation
  ];

  activeTabIndexChange(event: number) {
    this.activeTabIndexUpdate.emit(event);
  }

  ngOnInit() {
    this.subscriptions.push(this.vesselHelperService.largeLocalizerOpen.subscribe(() => this.onLocalizerClosed()));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onLocalizerClosed() {
    if (!this.model.cortexLocations.cerebellum) {
      this.model.isParsIntermedia = false;
      this.model.isSuperiorCerebellarPeduncle = false;
      this.model.isMiddleCerebellarPeduncle = false;
      this.model.isInferiorCerebellarPeduncle = false;
    }

    if (!this.model.cortexLocations.temporalLobeRight && !this.model.cortexLocations.temporalLobeLeft) {
      this.model.isGyrusTemporalisTransversus = false;
      this.model.isLateralOccipitotemporalGyrus = false;
    }

    if (!this.model.cortexLocations.occipitalLobeRight && !this.model.cortexLocations.occipitalLobeLeft) {
      this.model.isCuneus = false;
      this.model.isLingualGyrus = false;
    }

    if (!this.model.cortexLocations.parietalLobeRight && !this.model.cortexLocations.parietalLobeLeft) {
      this.model.isPraecuneus = false;
    }
  }
}
