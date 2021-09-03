import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DiscFindingUiModel } from '@models/spineCT';
import { ControlContainer, NgForm } from '@angular/forms';
import { ProtrusionExtrusionMigrationHelperService } from '../protrusion-extrusion-migration-helper.service';
import { DiscFindingTypeEnum } from '@enums/spineCT/disc/disc-finding-type.enum';
import { ProtrusionExtrusionDetailsTypeEnum } from '@enums/spineCT/disc/protrusion-extrusion-details-type.enum';
import { IDiscSelectionElements } from '@interfaces/pages/spine/intervertebal-disc-joints/disc-selection-elements.interface';
import { discSelectionElements } from '@models/spineCT/ui/disc/discSelectionElements';
import { compact } from 'lodash';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineDiscLocationModel } from '@models/shared/spine/localizers/spine-disc-location.model';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { ExpansionIntoSpinalCanalTypeEnum } from '@enums/spineCT/disc/expansion-into-spinal-canal-type.enum';
import { NerveRootAffectionTypeEnum } from '@enums/spineCT/disc/nerve-root-affection-type.enum';
import { StenosisTypeEnum } from '@enums/spineCT/disc/stenosis-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { GradeTypeEnum } from '@enums/spineCT/disc/grade-type.enum';

@Component({
  selector: 'rr-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class Tab1Component implements OnInit, OnDestroy {
  @Input() model: DiscFindingUiModel;

  translateSubscription: Subscription;

  discFindingTypeEnum = DiscFindingTypeEnum;
  protrusionExtrusionDetailsTypeEnum = ProtrusionExtrusionDetailsTypeEnum;
  expansionIntoSpinalCanalTypeEnum = ExpansionIntoSpinalCanalTypeEnum;
  nerveRootAffectionTypeEnum = NerveRootAffectionTypeEnum;
  stenosisTypeEnum = StenosisTypeEnum;

  w027DropdownOptions: DropdownModel[];

  constructor(
    public helperService: ProtrusionExtrusionMigrationHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translateSubscription = this.translate.stream('spineCT.disc.W027Dropdown.options').subscribe((out: DropdownModel[]) => {
      this.w027DropdownOptions = out;
    });
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }

  showAxialLocalization(): boolean {
    return this.helperService.shouldBeDisplayByFindingType([DiscFindingTypeEnum.Migration], this.model)
      ? true
      : this.model.protrusionExtrusionDetailsType === ProtrusionExtrusionDetailsTypeEnum.LocalizationAxial;
  }

  getFilteredAndSortedSelectionList(): IDiscSelectionElements[] {
    return compact(
      discSelectionElements.map(item => {
        return this.model.discLocation[item.name] ? item : null;
      })
    );
  }

  is1or2or6Selected(): boolean {
    return this.model.discLocation.central || this.model.discLocation.paracentralRight || this.model.discLocation.paracentralLeft;
  }

  is3or4or5or7or8or9Selected(): boolean {
    const anySelection = this.enumMapper.mapToString(this.model.discLocation) !== 'None';
    return anySelection && !this.is1or2or6Selected();
  }

  clearSelectionDetails() {
    if (!this.is1or2or6Selected()) {
      this.model.expansionIntoSpinalCanalType = ExpansionIntoSpinalCanalTypeEnum.None;
      this.model.isSpinalCanalStenosis = false;
      this.model.gradeType = GradeTypeEnum.None;
      this.model.sagittalDiameterInMm = null;
      this.model.transverseDiameterSpinalCanalWidthInMm = null;
    }
    if (!this.is3or4or5or7or8or9Selected()) {
      this.model.nerveRootAffectionType = NerveRootAffectionTypeEnum.None;
      this.model.stenosisType = StenosisTypeEnum.None;
    }
  }

  clearDiskSelection() {
    this.model.discLocation = new SpineDiscLocationModel();
    this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.discLocation));
  }

  getGradeTypeExcludedOptions(): string[] {
    return this.helperService.isL1dtoL5dSelectedOnLocalizerSelected(this.model) ? [] : [GradeTypeEnum.Relative, GradeTypeEnum.Absolute];
  }
}
