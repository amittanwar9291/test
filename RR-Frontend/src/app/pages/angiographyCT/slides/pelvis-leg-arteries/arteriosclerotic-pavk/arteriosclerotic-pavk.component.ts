import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ClassificationAccordingToTASCIITypeEnum,
  LocalizationTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { ChronicAortiliacComponent } from './vascular-pathology/chronic-aortiliac/chronic-aortiliac.component';
import { ChronicCruropedalComponent } from './vascular-pathology/chronic-cruropedal/chronic-cruropedal.component';
import { ChronicFemoropoplitealComponent } from './vascular-pathology/chronic-femoropopliteal/chronic-femoropopliteal.component';
import { LocalizationDetailsComponent } from './localization-details/localization-details';
import { ArterioscleroticPAVKPathologyTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';
import { SideTypeEnum } from '@enums/shared/side-type.enum';

@Component({
  selector: 'rr-arteriosclerotic-pavk',
  templateUrl: './arteriosclerotic-pavk.component.html',
  styleUrls: ['./arteriosclerotic-pavk.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArterioscleroticPavkComponent {
  @ViewChild(ChronicAortiliacComponent, { static: false }) chronicAortiliacComponent;
  @ViewChild(ChronicFemoropoplitealComponent, { static: false }) chronicFemoropoplitealComponent;
  @ViewChild(ChronicCruropedalComponent, { static: false }) chronicCruropedalComponent;
  @ViewChild(LocalizationDetailsComponent, { static: false }) vascularStenosisComponent;
  @Input() model: PelvisLegArteriesFindingUiModel;

  arterioscleroticPAVKPathologyTypeEnum = ArterioscleroticPAVKPathologyTypeEnum;
  classificationAccordingToTASCIITypeEnum = ClassificationAccordingToTASCIITypeEnum;

  resetDistalRefilling() {
    this.model.isInfrarenal = false;
    this.model.isSuprarenal = false;
    this.model.isP1Segment = false;
    this.model.isP2Segment = false;
    this.model.isP3Segment = false;
    this.model.sideType = SideTypeEnum.None;
    this.model.distalRefillingLocalizationType = LocalizationTypeEnum.None;
    this.model.isDistalRefillingSuprarenal = false;
    this.model.isDistalRefillingInfrarenal = false;
    this.model.isCollateralsFromAdjacentVessels = false;
    this.model.isProfundaFemoralArtery = false;
    this.model.isSuperficialFemoralArteryDistalSegment = false;
    this.model.isInsufficientCollateralization = false;
  }

  showProperColumns(): boolean {
    return (
      this.model.arterioscleroticPAVKPathologyType !== this.arterioscleroticPAVKPathologyTypeEnum.VascularStenosis &&
      this.model.classificationAccordingToTASCIIType === this.classificationAccordingToTASCIITypeEnum.None
    );
  }
}
