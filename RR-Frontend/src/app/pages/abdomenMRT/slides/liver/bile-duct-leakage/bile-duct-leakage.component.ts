import { Subscription } from 'rxjs';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ExtensionTypeEnum, LiverDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/liver';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AppConfig } from 'app/app.config';
import { LiverHelperService } from '../liver-helper.service';

@Component({
  selector: 'rr-bile-duct-leakage',
  templateUrl: './bile-duct-leakage.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BileDuctLeakageComponent implements OnDestroy {
  @Input() model: LiverFindingUiModel;
  @Input() bileDuctLeakageDDOptions: DropdownModel[];
  @Output() emitLocalizer = new EventEmitter();
  subscriptions: Subscription[] = [];
  isCMReinforced: boolean;
  isDWIInAnySequence: boolean;

  extensionType = ExtensionTypeEnum;
  differentialDiagnosis = LiverDifferentialDiagnosisTypeEnum;

  constructor(private liverHelperService: LiverHelperService) {
    this.subscriptions.push(this.liverHelperService.isCMReinforced.subscribe(v => (this.isCMReinforced = v)));
    this.subscriptions.push(this.liverHelperService.isDWIInAnySequence.subscribe(v => (this.isDWIInAnySequence = v)));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit();
  }

  resetExtensionInputs(): void {
    this.liverHelperService.resetExtensionInputs(this.model);
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.liver.fileUpload;
  }
}
