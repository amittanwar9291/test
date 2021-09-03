import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { HeadCTVesselsLocalizersTypeEnum } from '@enums/headCT/vessels/headCT-vessels-localizers-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { VesselsHelperService } from '../vessels-helper.service';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { AppConfig } from '../../../../../app.config';
import { PathologyTypeEnum } from '@enums/headCT/vessels/pathology-type.enum';
import { nameof } from 'ts-simple-nameof';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-cerebral-veins-sinus-durae-matris',
  templateUrl: './cerebral-veins-sinus-durae-matris.component.html',
  styleUrls: ['./cerebral-veins-sinus-durae-matris.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CerebralVeinsSinusDuraeMatrisComponent implements OnInit, OnDestroy {
  @Input() model: VesselsFindingUiModel;
  w017: DropdownModel[];
  subscriptions: Subscription[] = [];
  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.vessels.fileUpload;

  pathologyTypeEnum = PathologyTypeEnum;
  headCTVesselsLocalizersTypeEnum = HeadCTVesselsLocalizersTypeEnum;

  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_04_001',
    'uni_04_002',
    'uni_04_003',
    'uni_04_004',
    'uni_04_005',
    'uni_04_006',
    'uni_04_007'
  );

  constructor(
    private translate: TranslateService,
    private vesselsHelperService: VesselsHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('headCT.vessels.w017.options').subscribe((out: DropdownModel[]) => (this.w017 = out)),
      this.vesselsHelperService.openLocalizer.subscribe(() => this.onLargeLocalizerClose())
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  openLargeLocalizer(localizerType: HeadCTVesselsLocalizersTypeEnum) {
    this.vesselsHelperService.openLocalizer.next(localizerType);
  }

  private onLargeLocalizerClose() {
    if (this.enumMapper.mapToString(this.model.cerebralVenousThrombosisLocation) !== 'None') {
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.cerebralVenousThrombosisLocation));
    }
  }
}
