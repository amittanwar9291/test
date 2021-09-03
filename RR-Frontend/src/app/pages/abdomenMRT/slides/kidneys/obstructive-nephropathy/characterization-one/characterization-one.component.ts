import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  SideTypeEnum,
  SeverityTypeEnum,
  AssociatedCausalFindingsTypeEnum,
  UrolithiasisDetailsUreterTypeEnum,
  EnlargedUterusDetailsTypeEnum
} from '@enums/abdomenMRT/kidneys';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';
import { AppConfig } from 'app/app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { ImageFileTypeEnum } from '@enums/abdomenMRT/kidneys/image-file-type.enum';

@Component({
  selector: 'rr-obstructive-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['../../kidneys.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() severityTypeOptions: DropdownModel[];
  @Input() associatedCausalFindingsOptions: DropdownModel[];
  @Input() ureterOptions: DropdownModel[];
  @Input() isCMReinforced: boolean;
  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;

  sideType = SideTypeEnum;
  severityType = SeverityTypeEnum;
  associatedCausalFindingsType = AssociatedCausalFindingsTypeEnum;
  urolithiasisDetailsUreterType = UrolithiasisDetailsUreterTypeEnum;
  enlargedUterusDetailsType = EnlargedUterusDetailsTypeEnum;
  imageFileTypeEnum = ImageFileTypeEnum;

  obstructiveNephropathyChar1ReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'abd_m_0705109',
    'uni_07_002_01',
    'uni_07_003_01',
    'uni_07_006_01',
    'uni_07_007_01',
    'uni_07_004_01',
    'uni_07_005_01'
  );

  clearSeverityDependent(): void {
    this.model.isRenalPelvisDilatation = false;
    this.model.maxDilatationInMm = null;
    this.model.isReducedRenalParenchymaThickness = false;
    this.model.isDilatationOfTheRenalPelvisAndTheRenalCalices = false;
    this.model.maxDilatationParenchymaInMm = null;
    this.model.isLossOfParenchymaHydronephrosis = false;
  }

  clearAssociatedCausalFindingsDependent(): void {
    this.model.isSuspicionOf = false;
    this.model.isRenalCalice = false;
    this.model.isRenalPelvis = false;
    this.model.isUreter = false;
    this.model.urolithiasisDetailsUreterType = UrolithiasisDetailsUreterTypeEnum.None;
    this.model.isUrinaryBladder = false;
    this.model.isOstiumRight = false;
    this.model.isOstiumLeft = false;
    this.model.isUrethra = false;
    this.model.maxDiameterConcrementInMm = null;
    this.model.isPhlebolite = false;
    this.model.isMoreThanOneLesionSameEntity = false;
    this.model.isReferenceImageConcretion = false;
    this.referencePictureComponent?.resetReferencePicture();
    this.model.enlargedUterusDetailsType = EnlargedUterusDetailsTypeEnum.None;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.kidneys.fileUpload;
  }

  get isAssociatedCausalUrolithiasis(): boolean {
    return this.model.associatedCausalFindingsType === AssociatedCausalFindingsTypeEnum.Urolithiasis;
  }
}
