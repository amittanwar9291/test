import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DiscFindingUiModel } from '@models/spineCT';
import { DiscFindingTypeEnum } from '@enums/spineCT/disc/disc-finding-type.enum';
import { DiscHelperService, SpineCTLargeLocalizerConfig } from '../disc-helper.service';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { nameof } from 'ts-simple-nameof';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { omit } from 'lodash';
import { GradeTypeEnum } from '@enums/spineCT/disc/grade-type.enum';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { DirectionOfMigrationTypeEnum } from '@enums/spineCT/disc/direction-of-migration-type.enum';
import { ProtrusionExtrusionMigrationHelperService } from './protrusion-extrusion-migration-helper.service';

@Component({
  selector: 'rr-protrusion-extrusion-migration',
  templateUrl: './protrusion-extrusion-migration.component.html',
  styleUrls: ['./protrusion-extrusion-migration.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ProtrusionExtrusionMigrationComponent implements OnInit, OnDestroy {
  @Input() model: DiscFindingUiModel;

  discFindingTypeEnum = DiscFindingTypeEnum;
  directionOfMigrationTypeEnum = DirectionOfMigrationTypeEnum;

  subscriptions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;
  activeTabIndex = 0;

  tab1ValidationElements = [
    nameof<DiscFindingUiModel>(m => m.discLocation),
    [nameof<DiscFindingUiModel>(m => m.isNerveRootAffectionRight), nameof<DiscFindingUiModel>(m => m.isNerveRootAffectionLeft)].join(' '),
    [nameof<DiscFindingUiModel>(m => m.isStenosisRight), nameof<DiscFindingUiModel>(m => m.isStenosisLeft)].join(' ')
  ];
  tab2ValidationElements = [
    [nameof<DiscFindingUiModel>(m => m.isFacetJointArthropathyRight), nameof<DiscFindingUiModel>(m => m.isFacetJointArthropathyLeft)].join(
      ' '
    ),
    [nameof<DiscFindingUiModel>(m => m.isSynovialCystRight), nameof<DiscFindingUiModel>(m => m.isSynovialCystLeft)].join(' ')
  ];

  constructor(
    private discHelperService: DiscHelperService,
    private spineCtHelperService: SpineCtHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper,
    public helperService: ProtrusionExtrusionMigrationHelperService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.discHelperService.largeLocalizerOpenedConfig.subscribe(() => this.onLocalizerClose()),
      this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v)),
      this.discHelperService.activeTabIndex.subscribe(v => (this.activeTabIndex = v))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  openLocalizer(): void {
    this.discHelperService.largeLocalizerOpenedConfig.next(
      new SpineCTLargeLocalizerConfig(
        SpineLocationLogicTypeEnum.DiscEach,
        'spineCT.disc.pleaseSelectIntervertebralDiscMultipleChoice.value'
      )
    );
  }

  private onLocalizerClose(): void {
    const isAnySelectionOnLocalizer = this.enumMapper.mapToString(this.model.spineLocation) !== 'None';
    const isForbiddenGradeType = [GradeTypeEnum.Relative, GradeTypeEnum.Absolute].includes(this.model.gradeType);

    if (isAnySelectionOnLocalizer) {
      this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.spineLocation));
    }
    if (!this.helperService.isSingleSelectOnLocalizer(this.model)) {
      const omittedProperties = findingBaseProperties.concat([nameof<DiscFindingUiModel>(m => m.spineLocation)]);
      Object.assign(this.model, omit(new DiscFindingUiModel(), omittedProperties));
      this.activeTabIndexChange(0);
    }
    if (!this.helperService.isL1dtoL5dSelectedOnLocalizerSelected(this.model) && isForbiddenGradeType) {
      this.model.gradeType = GradeTypeEnum.None;
    }
  }

  activeTabIndexChange(e) {
    this.discHelperService.activeTabIndex.next(e);
  }
}
