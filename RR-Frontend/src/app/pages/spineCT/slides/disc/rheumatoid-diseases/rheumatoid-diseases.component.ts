import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DiscFindingUiModel } from '@models/spineCT';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DiscHelperService, SpineCTLargeLocalizerConfig } from '../disc-helper.service';
import { TranslateService } from '@ngx-translate/core';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { nameof } from 'ts-simple-nameof';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { OsteoproliferativeReactionTypeEnum } from '@enums/spineCT/disc/osteoproliferative-reaction-type.enum';
import { ComplicationTypeEnum } from '@enums/spineCT/disc/complication-type.enum';
import { DiscDiagnosisTypeEnum } from '@enums/spineCT/disc/disc-diagnosis-type.enum';

@Component({
  selector: 'rr-rheumatoid-diseases',
  templateUrl: './rheumatoid-diseases.component.html',
  styleUrls: ['./rheumatoid-diseases.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RheumatoidDiseasesComponent implements OnInit, OnDestroy {
  @Input() model: DiscFindingUiModel;

  subscribtions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;

  w028DropdownOptions: DropdownModel[];

  osteoproliferativeReactionTypeEnum = OsteoproliferativeReactionTypeEnum;
  complicationTypeEnum = ComplicationTypeEnum;
  discDiagnosisTypeEnum = DiscDiagnosisTypeEnum;

  activeTabIndex: number;

  constructor(
    private discHelperService: DiscHelperService,
    private translate: TranslateService,
    private spineCtHelperService: SpineCtHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper
  ) {}

  ngOnInit(): void {
    this.subscribtions.push(this.discHelperService.largeLocalizerOpenedConfig.subscribe(() => this.onLocalizerClose()));
    this.subscribtions.push(this.discHelperService.activeTabIndex.subscribe(v => (this.activeTabIndex = v)));
    this.subscribtions.push(
      this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
    );
    this.subscribtions.push(
      this.translate.stream('spineCT.disc.W028Dropdown.options').subscribe((out: DropdownModel[]) => {
        this.w028DropdownOptions = out;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscribtions.forEach(s => s.unsubscribe());
  }

  openLocalizer(): void {
    this.discHelperService.largeLocalizerOpenedConfig.next(
      new SpineCTLargeLocalizerConfig(
        SpineLocationLogicTypeEnum.DiscEachIntervertebre,
        'spineCT.disc.pleaseSelectTheDiscOfTheCorrespondingSegmentMultipleChoice.value'
      )
    );
  }

  onLocalizerClose(): void {
    const isAnySelectionOnLocalizer = this.enumMapper.mapToString(this.model.spineLocation) !== 'None';
    if (isAnySelectionOnLocalizer) {
      this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.spineLocation));
    }
    if (!this.isC1orC2Selected()) {
      this.model.isArthrosis = false;
      this.model.isArthritis = false;
      this.model.atlantodentalDistanceInMm = null;
      this.model.isAtlantoaxialJointErosions = false;
      this.model.isDensErosion = false;
      this.model.isDensProtrusion = false;
      this.model.referenceChamberlainLineInMm = null;
      this.model.isBasilarImpression = false;
      this.model.isSubluxation = false;
    }
  }

  isC1orC2Selected(): boolean {
    return this.model.spineLocation.c1 || this.model.spineLocation.c2;
  }

  onTabChange(event: any): void {
    this.discHelperService.activeTabIndex.next(event.index);
  }
}
