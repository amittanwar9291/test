import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import {
  CharacterizationType,
  DetectionFragmentationType,
  EpiphysealJointsClassificationType,
  GeneralCharacterizationType,
  StagingType,
  ClassificationSubType
} from '@enums/elbowMRT/cartilage/osteochondral-lesion';

import { CartilageLigamentsCapsuleFindingUiModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-osteochondral-lesion',
  templateUrl: './osteochondral-lesion.component.html',
  styleUrls: ['./osteochondral-lesion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteochondralLesionComponent implements OnInit {
  @Input() model: CartilageLigamentsCapsuleFindingUiModel;

  isCharacterization = false;

  previousCharacterizationTypeString = '';
  characterizationTypeString = '';

  previousThirdColumnTemplateString = '';
  thirdColumnTemplateString = '';

  localizationValidationString = [
    nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.anteriorHumeralCapitulum),
    nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.posteriorHumeralCapitulum),
    nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.anteriorHumeralTrochlea),
    nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.posteriorHumeralTrochlea),
    nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.ulnaTrochlearNotch),
    nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.ulnaRadialNotch),
    nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.radiusFoveaCapitis),
    nameof<CartilageLigamentsCapsuleFindingUiModel>(m => m.cartilageLocation.radiusCircumferentiaRadii)
  ].join(' ');

  characterizationType = CharacterizationType;
  generalCharacterizationType = GeneralCharacterizationType;
  detectionFragmentationType = DetectionFragmentationType;
  stagingType = StagingType;
  epiphysealJointsClassificationType = EpiphysealJointsClassificationType;
  classificationSubType = ClassificationSubType;

  ngOnInit(): void {
    this.resolveCharacterizationTemplate(true);
    this.resolveThirdColumnTemplate(true);
    this.resolveClassification();
  }

  private isSingleCapitulumHumeriSelected(): boolean {
    return (
      this.model.cartilageLocation.anteriorHumeralCapitulum !== this.model.cartilageLocation.posteriorHumeralCapitulum &&
      !this.isAnyNonCapitulumHumeriSelected()
    );
  }

  private isAnyCapitulumHumeriSelected(): boolean {
    return (
      (this.model.cartilageLocation.anteriorHumeralCapitulum || this.model.cartilageLocation.posteriorHumeralCapitulum) &&
      !this.isAnyNonCapitulumHumeriSelected()
    );
  }

  private isAnyNonCapitulumHumeriSelected(): boolean {
    return [
      this.model.cartilageLocation.anteriorHumeralTrochlea ||
        this.model.cartilageLocation.posteriorHumeralTrochlea ||
        this.model.cartilageLocation.ulnaTrochlearNotch ||
        this.model.cartilageLocation.ulnaRadialNotch ||
        this.model.cartilageLocation.radiusFoveaCapitis ||
        this.model.cartilageLocation.radiusCircumferentiaRadii
    ].some(item => item);
  }

  private resolveCharacterizationTypeString(isInit = false): void {
    const isSingle = this.isSingleCapitulumHumeriSelected();
    const isCapOrAndHum = this.isAnyCapitulumHumeriSelected();
    const isAnyOtherCombination = this.isAnyNonCapitulumHumeriSelected();

    if (!isInit) {
      this.previousCharacterizationTypeString = this.characterizationTypeString;
    }

    if (isCapOrAndHum) {
      this.characterizationTypeString = 'DoubleRadio';
    } else if (isSingle || isAnyOtherCombination) {
      this.characterizationTypeString = 'SingleCheck';
    } else {
      this.characterizationTypeString = '';
    }

    if (isInit) {
      this.previousCharacterizationTypeString = this.characterizationTypeString;
    }
  }

  /**
   * Called after selecting any checkbox in the first column.
   */
  resolveCharacterizationTemplate(isInit = false): void {
    this.resolveCharacterizationTypeString(isInit);

    if (this.characterizationTypeString !== this.previousCharacterizationTypeString) {
      this.clearCharacterizationControls();

      this.thirdColumnTemplateString = '';
    }

    this.isCharacterization = this.characterizationTypeString !== '';
    this.resolveClassification();
  }

  /**
   * Used to simplify the template selection. It flattens the enum values
   * so they match the string that is used when the checkbox is selected.
   * @param type value representing selected radiobutton
   */
  private characterizationTypeToTemplateString(type: CharacterizationType): string {
    if (type === CharacterizationType.General) {
      return 'General';
    } else if (type === CharacterizationType.ItsuboClassification) {
      return 'Itsubo';
    } else {
      return '';
    }
  }

  /**
   * Called after selecting either a radiobutton or a checkbox from the second column.
   */
  resolveThirdColumnTemplate(isInit = false): void {
    if (!isInit) {
      this.previousThirdColumnTemplateString = this.thirdColumnTemplateString;
    }
    switch (this.characterizationTypeString) {
      case 'DoubleRadio': {
        this.thirdColumnTemplateString = this.characterizationTypeToTemplateString(this.model.characterizationType);
        break;
      }
      case 'SingleCheck': {
        this.thirdColumnTemplateString = this.model.isGeneral ? 'General' : '';
        break;
      }
      default: {
        this.thirdColumnTemplateString = '';
        break;
      }
    }

    if (isInit) {
      this.previousThirdColumnTemplateString = this.thirdColumnTemplateString;
    } else {
      if (this.thirdColumnTemplateString !== this.previousThirdColumnTemplateString) {
        this.clearThirdColumn();
      }
    }
  }

  /**
   * Used to resolve the selection of read-only checkboxes in the last column.
   */
  resolveClassification(): void {
    switch (this.model.epiphysealJointsClassificationType) {
      case EpiphysealJointsClassificationType.Open:
        if (this.isAnyCapitulumHumeriSelected()) {
          this.model.classificationSubType = ClassificationSubType.MPanner;
        } else {
          this.model.classificationSubType = ClassificationSubType.JuvenileType;
        }
        break;
      case EpiphysealJointsClassificationType.Closed:
        this.model.classificationSubType = ClassificationSubType.AdultType;
        break;
      default:
        this.model.classificationSubType = ClassificationSubType.None;
        break;
    }
  }

  private clearCharacterizationControls(): void {
    this.clearThirdColumn();

    this.model.characterizationType = CharacterizationType.None;
    this.model.isGeneral = false;
  }

  private clearThirdColumn(): void {
    this.clearGeneralTemplate();
    this.clearItsuboTemplate();
  }

  private clearGeneralTemplate(): void {
    this.model.generalCharacterizationType = GeneralCharacterizationType.None;
    this.clearGeneralCharacterization();
  }

  private clearItsuboTemplate(): void {
    this.model.stagingType = StagingType.None;
  }

  clearDetailsOsteochondralDefectLooseBody(): void {
    this.model.detectionFragmentationType = DetectionFragmentationType.None;
  }

  clearGeneralCharacterization() {
    this.model.isBoneMarrowEdema = false;
    this.model.isDetailsOsteochondralDefectLooseBody = false;
    this.model.detectionFragmentationType = DetectionFragmentationType.None;
    this.model.isIntraosseousCystsAdjacentToLesion = false;
    this.model.isLesionOutlinedByHighSignalFluid = false;
  }
}
