import { Component, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { HistologyTypeEnum } from '@enums/handMRT/bones/';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';
import { AppConfig } from '../../../../../../app.config';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesHelperService, ComplexLocalizerData } from '../../bones-helper.service';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { DifferentialDiagnoseTypeEnum } from '@enums/handMRT/bones/';
import { Subscription } from 'rxjs';
@Component({
  selector: 'rr-handmrt-localization-extension',
  templateUrl: './localization-extension.component.html',
  styleUrls: ['./localization-extension.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationExtensionComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  @Input() localizationType: DropdownModel[];
  @Input() tumorDifferentialDiagnoseType: DropdownModel[];
  @ViewChild(ReferencePictureComponent) referencePicture: ReferencePictureComponent;

  differentialDiagnosisTypeEnum = DifferentialDiagnoseTypeEnum;
  histologyTypeEnum = HistologyTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  side: LocationTypeEnum;

  localizationSideSubscription: Subscription;

  constructor(private bonesHelperService: BonesHelperService) {}

  ngOnInit(): void {
    this.localizationSideSubscription = this.bonesHelperService.localizationSide.subscribe(value => {
      this.side = value;
    });
  }

  ngOnDestroy(): void {
    this.localizationSideSubscription.unsubscribe();
  }

  resetDependenciesDifferentialDiagnose() {
    this.model.isHistologyKnown = false;
    this.model.knownHistologyMalignancyType = this.histologyTypeEnum.None;
    this.model.isSecondary = false;
  }

  reset2ndPlane(): void {
    this.model.extension2ndPlaneSize = null;
    this.reset3rdPlane();
  }

  reset3rdPlane(): void {
    this.model.extension3rdPlaneSize = null;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.handMRT.bones.fileUpload;
  }

  clearReferencePicture(): void {
    this.referencePicture?.resetReferencePicture();
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpen.next(new ComplexLocalizerData('bones', true, false));
  }
}
