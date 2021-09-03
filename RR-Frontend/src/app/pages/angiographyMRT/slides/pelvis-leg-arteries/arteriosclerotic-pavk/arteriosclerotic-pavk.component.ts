import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ClassificationAccordingToTASCIITypeEnum, PathologyTypeEnum } from '@enums/angiographyMRT/pelvis-leg-arteries';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { ChronicAortiliacComponent } from './vascular-pathology/chronic-aortiliac/chronic-aortiliac.component';
import { ChronicCruropedalComponent } from './vascular-pathology/chronic-cruropedal/chronic-cruropedal.component';
import { ChronicFemoropoplitealComponent } from './vascular-pathology/chronic-femoropopliteal/chronic-femoropopliteal.component';
import { VascularStenosisComponent } from './vascular-stenosis/vascular-stenosis.component';

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
  @ViewChild(VascularStenosisComponent, { static: false }) vascularStenosisComponent;
  @Input() model: PelvisLegArteriesFindingUiModel;

  pathologyTypeEnum = PathologyTypeEnum;
  classificationAccordingToTASCIITypeEnum = ClassificationAccordingToTASCIITypeEnum;
}
