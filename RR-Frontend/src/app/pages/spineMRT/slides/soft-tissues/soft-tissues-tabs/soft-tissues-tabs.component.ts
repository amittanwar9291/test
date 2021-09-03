import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissueFindingTypeEnum, SoftTissueDiagnosisTypeEnum } from '@enums/spineMRT/soft-tissues';
import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { SoftTissuesPresetsHttpService } from '@services/spineMRT/http/soft-tissues/soft-tissues-presets-http.service';
import { SpineSoftTissueLocalizerConfig } from '@models/spineMRT/ui/soft-tissues/spine-soft-tissue-localizer-config';

@Component({
  selector: 'rr-spine-mrt-soft-tissues-tabs',
  templateUrl: './soft-tissues-tabs.component.html',
  styleUrls: ['./soft-tissues-tabs.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SoftTissuesPresetsHttpService
    }
  ]
})
export class SoftTissuesTabsComponent {
  @Input() model: SoftTissuesFindingUiModel;
  @Input() isCMYes: boolean;
  @Input() activeTabIndex: number;
  @Output() activeTabIndexUpdate = new EventEmitter<number>();
  @Output() emitLocalizer = new EventEmitter<SpineSoftTissueLocalizerConfig>();

  descriptionTypeEnum: typeof DescriptionTypeEnum;
  softTissueFindingTypeEnum: typeof SoftTissueFindingTypeEnum;

  constructor() {
    this.descriptionTypeEnum = DescriptionTypeEnum;
    this.softTissueFindingTypeEnum = SoftTissueFindingTypeEnum;
  }

  openLargeLocalizer(localizerOption: SpineSoftTissueLocalizerConfig) {
    this.emitLocalizer.emit(localizerOption);
  }

  activeTabIndexChange(event: number) {
    this.activeTabIndexUpdate.emit(event);
  }
}
