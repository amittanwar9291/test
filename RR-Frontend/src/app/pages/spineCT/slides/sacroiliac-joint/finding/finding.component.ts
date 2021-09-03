import { Component, Input } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';

import { SacroiliacJointFindingUiModel } from '@models/spineCT/ui/sacroiliac-joint/sacroiliac-joint-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AnkylosisTypeEnum } from '@enums/spineCT/sacroiliac-joint/ankylosis-type.enum';
import { ExtensionTypeEnum } from '@enums/spineCT/sacroiliac-joint/extension-type.enum';
import { SubchondralSclerosisTypeEnum } from '@enums/spineCT/sacroiliac-joint/subchondral-sclerosis-type.enum';
import { AppConfig } from 'app/app.config';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { DifferentialDiagnosisTypeEnum } from '@enums/spineCT/sacroiliac-joint/differential-diagnosis-type.enum';
import { FileService } from '@services/shared/file-service/file.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';

@Component({
  selector: 'rr-finding',
  templateUrl: './finding.component.html',
  styleUrls: ['./finding.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FindingComponent {
  @Input() model: SacroiliacJointFindingUiModel;

  @Input() differentialDiagnosisDropdown: DropdownModel[];

  ankylosisTypeEnum = AnkylosisTypeEnum;
  extensionTypeEnum = ExtensionTypeEnum;
  subchondralSclerosisTypeEnum = SubchondralSclerosisTypeEnum;
  differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;

  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_09_001',
    'uni_09_002',
    'uni_09_003',
    'uni_09_004',
    'uni_09_005',
    'uni_09_006',
    'uni_09_007'
  );

  constructor(private fileService: FileService, private navigationReportDataService: NavigationReportDataService) {}

  resetDD1DependFields() {
    this.model.isSuspicionOf = false;
    this.model.isSecondary = false;
  }

  resetDD2DependField() {
    this.model.isSecondary = false;
  }

  get extensionDisable(): boolean {
    return !this.model.pelvisLocation.left || !this.model.pelvisLocation.right;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.spineCT.sacroiliacJoint.fileUpload;
  }
}
