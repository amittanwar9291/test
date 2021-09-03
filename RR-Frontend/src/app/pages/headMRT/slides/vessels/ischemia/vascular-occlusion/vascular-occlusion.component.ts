import { Component, Input, OnInit } from '@angular/core';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';
import { GradingTypeEnum, ArterialTerritoryTypeEnum } from '@enums/headMRT/vessels';
import { ControlContainer, NgForm } from '@angular/forms';
import { ArteriesSegmentsLocalizerModel } from '@models/shared/angiography/localizers/arteries-segments-localizer.model';
import { VesselsHelperService } from '../../vessels-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-vascular-occlusion',
  templateUrl: './vascular-occlusion.component.html',
  styleUrls: ['./vascular-occlusion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VascularOcclusionComponent implements OnInit {
  @Input() model: VesselsFindingUiModel;
  gradingTypeEnum = GradingTypeEnum;
  localizationTypeEnum = ArterialTerritoryTypeEnum;
  @Input() isCMYes: boolean;

  constructor(private validationHelperService: ValidationHelperService, private vesselHelperService: VesselsHelperService) {}

  ngOnInit(): void {
    if (compact(Object.values(this.model.affectedSegmentsOrVesselsLocation)).length > 0) {
      this.closeError();
    }
  }

  openLargeLocalizer(model: 'arteriesSegments') {
    this.vesselHelperService.largeLocalizerOpen.next(model);
  }

  resetLocalizer() {
    this.model.affectedSegmentsOrVesselsLocation = new ArteriesSegmentsLocalizerModel();
    this.closeError();
  }

  closeError() {
    this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.affectedSegmentsOrVesselsLocation));
  }
}
