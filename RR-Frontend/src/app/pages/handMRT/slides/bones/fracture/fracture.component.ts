import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  DorsomedialDrugTypeEnum,
  FractureClassificationTypeEnum,
  FractureFormTypeEnum,
  FractureFormSubTypeEnum,
  FractureFormNotSpecifiedTypeEnum,
  FractureFormScaphoideumTypeEnum
} from '@enums/handMRT/bones';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-fracture',
  templateUrl: './fracture.component.html',
  styleUrls: ['./fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  localizerSide: LocationTypeEnum;

  localizationSideSubscription: Subscription;

  constructor(private bonesHelperService: BonesHelperService, private enumMapper: EnumMapper) {}

  ngOnInit(): void {
    this.localizationSideSubscription = this.bonesHelperService.localizationSide.subscribe(value => {
      this.localizerSide = value;
    });
  }

  ngOnDestroy(): void {
    this.localizationSideSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    const cleanup = (m: BonesFindingUiModel) => {
      m.fractureClassificationType = FractureClassificationTypeEnum.None;
      m.fractureFormType = FractureFormTypeEnum.None;
      m.fractureFormScaphoideumType = FractureFormScaphoideumTypeEnum.None;
      m.fractureFormNotSpecifiedType = FractureFormNotSpecifiedTypeEnum.None;
      m.fractureFormSubType = FractureFormSubTypeEnum.None;
      m.dorsomedialDrugType = DorsomedialDrugTypeEnum.None;
    };
    this.bonesHelperService.largeLocalizerOpen.next(new ComplexLocalizerData('bones', true, true, false, false, cleanup));
  }

  noLocalizationSelected(): boolean {
    return this.enumMapper.mapToString(this.model.involvedBonesLocalizer) === 'None';
  }

  isMetacarpalSelected(): boolean {
    return this.enumMapper.mapToString(this.model.involvedBonesLocalizer).includes('Metacarpal');
  }

  isPhalanxSelected(): boolean {
    return this.enumMapper.mapToString(this.model.involvedBonesLocalizer).includes('Phalanx');
  }
}
