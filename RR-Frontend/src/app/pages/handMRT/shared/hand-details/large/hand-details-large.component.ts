import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { HandDetails } from '@models/handMRT/ui/hand/localizers/hand-details.model';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { WristBonesType } from '@enums/handMRT/bones/common/wrist-bones-type.enum';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-hand-details-large',
  templateUrl: './hand-details-large.component.html',
  styleUrls: ['./hand-details-large.component.scss'],
  providers: [MakeProvider(HandDetailsLargeComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HandDetailsLargeComponent extends LocalizerBase<HandDetails> implements OnInit {
  @Input() side: LocationTypeEnum;
  @Input() wristOnly = false; // display wrist bones only
  @Input() isComplex = true;
  @Input() isAdjacentSelection = false; // only adjacent wrist bones can be selected
  @Input() subtitle: string;
  @Output() selectedElement = new EventEmitter();
  @Output() close = new EventEmitter();

  sideText: string;
  hoveredElement: string;

  locationType = LocationTypeEnum;
  wristBonesType = WristBonesType;

  constructor() {
    super(HandDetails);
  }

  ngOnInit() {
    this.side = this.side || LocationTypeEnum.Left;
    this.sideText = this.side === LocationTypeEnum.Left ? 'hand-details.left' : 'hand-details.right';
  }

  closeLargeLocalizer() {
    this.close.emit();
  }

  selectWristBone(selectedBone: string) {
    if (this.isAdjacentSelection) {
      const selectedBones = this.getAlreadySelectedWristElements();
      const isBoneSelected = selectedBones.includes(selectedBone);

      if (selectedBones.length === 0) {
        this.selectElement(selectedBone);
      } else {
        const allowedOptions = this.getSelectedBonesNeighbors();
        if (allowedOptions.includes(selectedBone)) {
          this.selectElement(selectedBone);
        } else {
          this.resetWristSelection(selectedBone);
        }
        if (isBoneSelected) {
          this.resetWristSelection(null);
        }
      }
    } else {
      this.selectElement(selectedBone);
    }
    this.announceSelection.emit();
    this.writeValue(this.ngValue);
  }

  private resetWristSelection(boneToSkip: string) {
    Object.keys(this.ngValue).forEach(key => {
      this.ngValue[key] = key === boneToSkip;
    });
  }

  private getSelectedBonesNeighbors(): string[] {
    const neighbors = [];
    this.getAlreadySelectedWristElements().forEach(elem => {
      this.getAllowedWristBones(elem).forEach(neighbor => neighbors.push(neighbor));
    });
    return neighbors;
  }

  private getAlreadySelectedWristElements(): string[] {
    const selectedElements = [];
    Object.keys(this.ngValue).forEach(key => {
      if (this.ngValue[key] === true) {
        selectedElements.push(key);
      }
    });
    return selectedElements;
  }

  private getAllowedWristBones(selectedBone: string): string[] {
    switch (selectedBone) {
      case nameof<HandDetails>(m => m.scaphoid):
        return [
          nameof<HandDetails>(m => m.osTrapezium),
          nameof<HandDetails>(m => m.trapezoidBone),
          nameof<HandDetails>(m => m.ocapitatum),
          nameof<HandDetails>(m => m.osLunatum)
        ];
      case nameof<HandDetails>(m => m.osLunatum):
        return [
          nameof<HandDetails>(m => m.osTriquetrum),
          nameof<HandDetails>(m => m.osHamatum),
          nameof<HandDetails>(m => m.ocapitatum),
          nameof<HandDetails>(m => m.scaphoid)
        ];
      case nameof<HandDetails>(m => m.osTriquetrum):
        return [nameof<HandDetails>(m => m.osPisiforme), nameof<HandDetails>(m => m.osLunatum), nameof<HandDetails>(m => m.osHamatum)];
      case nameof<HandDetails>(m => m.osPisiforme):
        return [nameof<HandDetails>(m => m.osTriquetrum)];
      case nameof<HandDetails>(m => m.osTrapezium):
        return [nameof<HandDetails>(m => m.scaphoid), nameof<HandDetails>(m => m.trapezoidBone)];
      case nameof<HandDetails>(m => m.trapezoidBone):
        return [nameof<HandDetails>(m => m.ocapitatum), nameof<HandDetails>(m => m.osTrapezium), nameof<HandDetails>(m => m.scaphoid)];
      case nameof<HandDetails>(m => m.ocapitatum):
        return [
          nameof<HandDetails>(m => m.trapezoidBone),
          nameof<HandDetails>(m => m.osLunatum),
          nameof<HandDetails>(m => m.scaphoid),
          nameof<HandDetails>(m => m.osHamatum)
        ];
      case nameof<HandDetails>(m => m.osHamatum):
        return [nameof<HandDetails>(m => m.ocapitatum), nameof<HandDetails>(m => m.osTriquetrum), nameof<HandDetails>(m => m.osLunatum)];
      default:
        return [];
    }
  }
}
