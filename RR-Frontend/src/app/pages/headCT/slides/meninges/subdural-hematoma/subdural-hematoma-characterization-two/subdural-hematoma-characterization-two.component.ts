import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { MeningesHelperService } from '../../meninges-helper.service';
import { CharacterizationHematomaTypeEnum } from '@enums/headCT/meninges/characterization-hematoma-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/headCT/meninges/differential-diagnosis-type.enum';
import { MidlineShiftSideTypeEnum } from '@enums/headCT/common/midline-shift-side-type.enum';

@Component({
  selector: 'rr-subdural-hematoma-characterization-two',
  templateUrl: './subdural-hematoma-characterization-two.component.html',
  styleUrls: ['./subdural-hematoma-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SubduralHematomaCharacterizationTwoComponent implements OnDestroy {
  @Input() model: MeningesFindingUiModel;
  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.meninges.fileUpload;

  isCMYes: boolean;
  w024: DropdownModel[];
  subscriptions: Subscription[] = [];

  midlineShiftSideTypeEnum = MidlineShiftSideTypeEnum;
  characterizationHematomaTypeEnum = CharacterizationHematomaTypeEnum;
  differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;

  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_05_001',
    'uni_05_002',
    'uni_05_003',
    'uni_05_004',
    'uni_05_005',
    'uni_05_006',
    'uni_05_007'
  );

  constructor(private translate: TranslateService, private meningesHelperService: MeningesHelperService) {
    this.subscriptions.push(
      translate.stream('headCT.meninges.w024.options').subscribe((out: DropdownModel[]) => (this.w024 = out)),
      meningesHelperService.isCMYes.subscribe((out: boolean) => (this.isCMYes = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
