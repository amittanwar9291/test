import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AcuteAortalSyndromeAasTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/acute-aortal-syndrome-aas-type.enum';
import { BeginningTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/beginning-type.enum';
import { DebakeyTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/debakey-type.enum';
import { DensityTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/density-type.enum';
import { LocalizationOfTheMeasurementTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/localization-of-the-measurement-type.enum';
import { PericardialPleuralEffusionTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/pericardial-pleural-effusion-type.enum';
import { StanfordTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/stanford-type.enum';
import { SvenssonTypeEnum } from '@enums/angiographyCT/aorta/acute-aortal-syndrome/svensson-type.enum';
import { PathologyTypeEnum } from '@enums/angiographyCT/aorta/pathology-type.enum';
import { AortaFindingUiModel } from '@models/angiographyCT/ui/aorta/aorta-finding-ui.model';
import { AorticArch } from '@models/angiographyMRT/ui/localizers/aortic-arch.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { AortaHelperService } from '../aorta-helper.service';

@Component({
  selector: 'rr-acute-aorta-syndrome',
  templateUrl: './acute-aorta-syndrome.component.html',
  styleUrls: ['./acute-aorta-syndrome.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AcuteAortaSyndromeComponent implements OnInit, OnDestroy {
  @Input() model: AortaFindingUiModel;
  subscriptions: Subscription[] = [];
  isCmYes: boolean;

  acuteAortalSyndromeAasType = AcuteAortalSyndromeAasTypeEnum;
  pathologyTypeEnum = PathologyTypeEnum;
  stanfordTypeEnum = StanfordTypeEnum;
  beginningType = BeginningTypeEnum;
  densityType = DensityTypeEnum;

  W019Values: DropdownModel[];
  W020Values: DropdownModel[];
  W021Values: DropdownModel[];
  W022Values: DropdownModel[];
  W023Values: DropdownModel[];
  W024Values: DropdownModel[];

  constructor(
    private aortaHelperService: AortaHelperService,
    private translate: TranslateService,
    private validation: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.initTranslations();
    this.subscriptions.push(this.aortaHelperService.isCMYes.subscribe(v => (this.isCmYes = v)));
  }

  resetContent() {
    this.model.aortaLocations1 = new AorticArch();
    this.model.aortaLocations2 = new AorticArch();
    this.model.maxDiameterAortaInMm = null;
    this.model.depthInMm = null;
    this.model.craniocaudalLengthInMm = null;
    this.model.localizationOfTheMeasurementType = LocalizationOfTheMeasurementTypeEnum.None;
    this.model.proximalNeckLengthInMm = null;
    this.model.proximalAneurysmaticNeckDiameterInMm = null;
    this.model.isThrombosisFalseLumen = false;
    this.model.isPericardialEffusion = false;
    this.model.pericardialEffusionType = PericardialPleuralEffusionTypeEnum.None;
    this.model.isPleuralEffusion = false;
    this.model.pleuralEffusionType = PericardialPleuralEffusionTypeEnum.None;
    this.model.isRightCoronaryArtery = false;
    this.model.isLeftCoronaryArtery = false;
    this.model.isBrachiocephalicTrunk = false;
    this.model.isRightSubclavianArtery = false;
    this.model.isRightCommonCarotidArtery = false;
    this.model.isLeftCommonCarotidArtery = false;
    this.model.isLeftSubclavianArtery = false;
    this.model.isCoeliacTrunk = false;
    this.model.isSuperiorMesentericArterySma = false;
    this.model.isInferiorMesentericArteryIma = false;
    this.model.isRightRenalArtery = false;
    this.model.isLeftRenalArtery = false;
    this.model.stanfordType = StanfordTypeEnum.None;
    this.model.debakeyType = DebakeyTypeEnum.None;
    this.model.svenssonType = SvenssonTypeEnum.None;
    this.model.isAcuteExtravascularHematoma = false;
    this.model.beginningType = BeginningTypeEnum.None;
    this.model.isWallThickening = false;
    this.model.isEccentric = false;
    this.model.wallThicknessInMm = null;
    this.model.densityType = DensityTypeEnum.None;
    this.model.isRupture = false;
    this.model.isIntramuralAorticHematoma = false;
    this.model.isMushroomShaped = false;
    this.model.isCmExtravasation = false;
    this.model.isAortitis = false;

    this.clearValidation();
  }

  resetPericardialEffusionType() {
    this.model.pericardialEffusionType = PericardialPleuralEffusionTypeEnum.None;
  }

  resetPleuralEffusionType() {
    this.model.pleuralEffusionType = PericardialPleuralEffusionTypeEnum.None;
  }

  resetMeasurementType() {
    if (!this.model.maxDiameterAortaInMm) {
      this.model.localizationOfTheMeasurementType = LocalizationOfTheMeasurementTypeEnum.None;
    }
  }

  openLargeLocalizer(isReentry: boolean, isSingleSelection: boolean, isAortaDivided: boolean, isAdjacentSelection: boolean): void {
    this.aortaHelperService.isLargeLocalizerOpened.next({
      isLocalizationReentry: isReentry,
      isSingleChoice: isSingleSelection,
      isArcusAortaeDivided: isAortaDivided,
      isAdjacentChoice: isAdjacentSelection
    });
  }

  private clearValidation(): void {
    this.validation.removeError(nameof<AortaFindingUiModel>(m => m.aortaLocations1));
    this.validation.removeError(nameof<AortaFindingUiModel>(m => m.aortaLocations2));
    this.validation.removeError(nameof<AortaFindingUiModel>(m => m.localizationOfTheMeasurementType));
    this.validation.removeError(nameof<AortaFindingUiModel>(m => m.craniocaudalLengthInMm));
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyCT.aorta.W019.options').subscribe((out: DropdownModel[]) => {
        this.W019Values = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.aorta.W020.options').subscribe((out: DropdownModel[]) => {
        this.W020Values = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.aorta.W021.options').subscribe((out: DropdownModel[]) => {
        this.W021Values = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.aorta.W022.options').subscribe((out: DropdownModel[]) => {
        this.W022Values = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.aorta.W023.options').subscribe((out: DropdownModel[]) => {
        this.W023Values = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.aorta.W024.options').subscribe((out: DropdownModel[]) => {
        this.W024Values = out;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }
}
