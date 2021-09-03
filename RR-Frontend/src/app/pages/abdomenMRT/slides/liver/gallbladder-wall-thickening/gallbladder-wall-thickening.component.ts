import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CharacteristicsTypeEnum, LiverDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/liver';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AppConfig } from 'app/app.config';
import { Subscription } from 'rxjs';
import { LiverHelperService } from './../liver-helper.service';

@Component({
  selector: 'rr-gallbladder-wall-thickening',
  templateUrl: './gallbladder-wall-thickening.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class GallbladderWallThickeningComponent {
  @Input() model: LiverFindingUiModel;
  @Input() gallBladderWallThickeningDDOptions: DropdownModel[];
  isCMReinforced: boolean;
  subscriptions: Subscription[] = [];

  differentialDiagnosis1 = LiverDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2 = LiverDifferentialDiagnosisTypeEnum;
  characteristicsType = CharacteristicsTypeEnum;

  constructor(private liverHelperService: LiverHelperService) {
    this.subscriptions.push(this.liverHelperService.isCMReinforced.subscribe(v => (this.isCMReinforced = v)));
  }

  resetDD1Dependent(): void {
    this.model.differentialDiagnosis2 = LiverDifferentialDiagnosisTypeEnum.None;
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.liver.fileUpload;
  }
}
