import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DetailsType, EtiologyType, OuterbridgeClassificationType } from '@enums/elbowMRT/cartilage/chondral-lesion';

import { CartilageLigamentsCapsuleFindingUiModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-cartilage-lesion',
  templateUrl: './cartilage-lesion.component.html',
  styleUrls: ['./cartilage-lesion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CartilageLesionComponent {
  @Input() model: CartilageLigamentsCapsuleFindingUiModel;

  etiologyType = EtiologyType;
  detailsType = DetailsType;
  outerbridgeClassificationType = OuterbridgeClassificationType;

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

  clearTraumaticEtiology(): void {
    this.model.detailsType = DetailsType.None;
  }

  clearDegenerativeEtiology(): void {
    this.model.outerbridgeClassificationType = OuterbridgeClassificationType.None;
    this.model.sizeInMm = null;
    this.model.secondPlaneInMm = null;
    this.model.thirdPlaneInMm = null;

    this.model.isSubchondralCysts = false;
    this.model.isLooseBody = false;
    this.model.isChondrocalcinosis = false;
  }
}
