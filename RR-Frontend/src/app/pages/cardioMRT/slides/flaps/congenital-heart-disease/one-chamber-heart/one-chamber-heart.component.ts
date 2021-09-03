import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CongenitalHeartDiseasesFindingUiModel } from '@models/cardioMRT/ui/flaps/congenital-heart-diseases-finding-ui.model';
import { AVConnectionType, OneChamberHeartSingleType } from '@enums/cardioMRT/flaps';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-one-chamber-heart',
  templateUrl: './one-chamber-heart.component.html',
  styleUrls: ['../../flaps.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OneChamberHeartComponent implements OnInit {
  @Input() model: CongenitalHeartDiseasesFindingUiModel;
  @Input() oneChamberHeartSelected: boolean;

  previousMainVerticleType: LocationTypeEnum;
  previousOneChamberHeartSingleType: OneChamberHeartSingleType;

  mainVentricleType: typeof LocationTypeEnum;
  avConnectionType: typeof AVConnectionType;
  oneChamberHeartSingleType: typeof OneChamberHeartSingleType;

  constructor(private validationHelperService: ValidationHelperService) {
    this.mainVentricleType = LocationTypeEnum;
    this.avConnectionType = AVConnectionType;
    this.oneChamberHeartSingleType = OneChamberHeartSingleType;
  }

  ngOnInit() {
    this.previousMainVerticleType = this.model.mainVentricleType;
    this.previousOneChamberHeartSingleType = this.model.oneChamberHeartSingleType;
  }

  resetMainVerticle(choosenMainVerticle: LocationTypeEnum): void {
    if (choosenMainVerticle === this.previousMainVerticleType) {
      return;
    }

    this.model.avConnectionType = AVConnectionType.None;
    this.model.mainVentricleType = choosenMainVerticle;
    this.previousMainVerticleType = choosenMainVerticle;
  }

  removeMainVentricleValidationError(): void {
    if (this.previousOneChamberHeartSingleType === this.model.oneChamberHeartSingleType) {
      return;
    }

    this.validationHelperService.removeError(
      nameof<CongenitalHeartDiseasesFindingUiModel>(m => m.mainVentricleType),
      this.model.validationId
    );
    this.previousOneChamberHeartSingleType = this.model.oneChamberHeartSingleType;
  }
}
