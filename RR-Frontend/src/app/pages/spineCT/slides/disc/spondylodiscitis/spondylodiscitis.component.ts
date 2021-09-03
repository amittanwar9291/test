import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DiscFindingUiModel } from '@models/spineCT';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DiscHelperService, SpineCTLargeLocalizerConfig } from '../disc-helper.service';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { nameof } from 'ts-simple-nameof';
import { compact } from 'lodash';

@Component({
  selector: 'rr-spondylodiscitis',
  templateUrl: './spondylodiscitis.component.html',
  styleUrls: ['./spondylodiscitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SpondylodiscitisComponent implements OnInit, OnDestroy {
  @Input() model: DiscFindingUiModel;

  subscribtions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;
  isCMYes: boolean;

  constructor(
    private discHelperService: DiscHelperService,
    private spineCtHelperService: SpineCtHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper
  ) {}

  ngOnInit(): void {
    this.subscribtions.push(this.discHelperService.largeLocalizerOpenedConfig.subscribe(() => this.onLocalizerClose()));
    this.subscribtions.push(this.discHelperService.isCMYes.subscribe(v => (this.isCMYes = v)));
    this.subscribtions.push(
      this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
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
  }

  isLocatedAtPsoasMusclePermited(): boolean {
    const permited = ['tH1', 'tH2', 'tH3', 'tH4', 'tH5', 'tH6', 'tH7', 'tH8', 'tH9', 'tH10', 'tH11', 'tH12', 'l1', 'l2', 'l3', 'l4', 'l5'];
    if (this.spineLocalizerPermittedSelection) {
      return compact(permited.map(item => this.spineLocalizerPermittedSelection[item])).length > 0;
    }
  }
}
