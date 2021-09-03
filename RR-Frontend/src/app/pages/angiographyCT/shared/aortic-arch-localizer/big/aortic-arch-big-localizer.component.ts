import { Component, Output, EventEmitter, ViewEncapsulation, Input, OnInit } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { AorticArch } from '@models/angiographyCT/ui/localizers/aortic-arch.model';

import { TranslateService } from '@ngx-translate/core';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-aortic-arch-big-ct-localizer',
  templateUrl: './aortic-arch-big-localizer.component.html',
  styleUrls: ['./aortic-arch-big-localizer.component.scss'],
  providers: [MakeProvider(AorticArchBigLocalizerCtComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AorticArchBigLocalizerCtComponent extends LocalizerBase<AorticArch> implements OnInit {
  @Input() isArcusAortaeDivided: boolean;
  @Input() isAdjacentSelection: boolean;
  @Output() close = new EventEmitter();

  allowedSelections: string[] = [];

  elements = {
    aorticRoot: nameof<AorticArch>(m => m.aorticRoot),
    ascendingAorta: nameof<AorticArch>(m => m.ascendingAorta),
    aorticArch: nameof<AorticArch>(m => m.aorticArch),
    descendingAorta: nameof<AorticArch>(m => m.descendingAorta),
    suprarenalAbdominalAorta: nameof<AorticArch>(m => m.suprarenalAbdominalAorta),
    infrarenalAbdominalAorta: nameof<AorticArch>(m => m.infrarenalAbdominalAorta),
    rightCommonIliacArtery: nameof<AorticArch>(m => m.rightCommonIliacArtery),
    leftCommonIliacArtery: nameof<AorticArch>(m => m.leftCommonIliacArtery),
    rightExternalIliacArtery: nameof<AorticArch>(m => m.rightExternalIliacArtery),
    leftExternalIliacArtery: nameof<AorticArch>(m => m.leftExternalIliacArtery),
    arcusAortaeBetweenTruncusAndCarotis: nameof<AorticArch>(m => m.arcusAortaeBetweenTruncusAndCarotis),
    arcusAortaeBetweenCarotisAndSubclavia: nameof<AorticArch>(m => m.arcusAortaeBetweenCarotisAndSubclavia)
  };

  constructor(public translate: TranslateService) {
    super(AorticArch);
  }

  ngOnInit(): void {
    if (this.isAdjacentSelection) {
      this.assignWriteCallback(() => {
        this.allowedSelections = this.getAllowedSelections();
      });
    }
  }

  selectArchElement(selectedPart: string): void {
    if (this.isAdjacentSelection) {
      const selectedParts = this.getAlreadySelectedArchParts();
      const isAlreadySelected = selectedParts.includes(selectedPart);

      if (selectedParts.length === 0) {
        this.selectElement(selectedPart);
      } else {
        if (this.allowedSelections.includes(selectedPart)) {
          this.selectElement(selectedPart);
        } else {
          this.resetArchSelection(selectedPart);
        }
        if (isAlreadySelected) {
          this.resetArchSelection(null);
        }
      }
      this.allowedSelections = this.getAllowedSelections();
    } else {
      this.selectElement(selectedPart);
    }
    this.writeValue(this.ngValue);
  }

  hoverArchText(part: string) {
    if (this.checkIfAllowedSelection(part)) {
      this.hoverElement(part);
    }
  }

  checkIfPartEnabled(part: string): boolean {
    return this.checkIfAllowedSelection(part) || this.getAlreadySelectedArchParts().includes(part);
  }

  checkIfAllowedSelection(part: string) {
    return this.allowedSelections.includes(part) || this.allowedSelections.length === 0;
  }

  private resetArchSelection(partToSkip: string) {
    Object.keys(this.ngValue).forEach(key => {
      this.ngValue[key] = key === partToSkip;
    });
  }

  private getAlreadySelectedArchParts(): string[] {
    const selectedElements = [];
    Object.keys(this.ngValue).forEach(key => {
      if (this.ngValue[key] === true) {
        selectedElements.push(key);
      }
    });
    return selectedElements;
  }

  private getAllowedSelections(): string[] {
    const neighbours = [];
    this.getAlreadySelectedArchParts().forEach(elem => {
      this.getAllowedArchParts(elem).forEach(neighbor => neighbours.push(neighbor));
    });
    return neighbours;
  }

  private getAllowedArchParts(selectedPart: string): string[] {
    switch (selectedPart) {
      case nameof<AorticArch>(m => m.aorticRoot):
        return [nameof<AorticArch>(m => m.ascendingAorta)];
      case nameof<AorticArch>(m => m.ascendingAorta):
        return [
          nameof<AorticArch>(m => m.aorticRoot),
          nameof<AorticArch>(m => m.arcusAortaeBetweenTruncusAndCarotis),
          nameof<AorticArch>(m => m.aorticArch)
        ];
      case nameof<AorticArch>(m => m.arcusAortaeBetweenTruncusAndCarotis):
        return [nameof<AorticArch>(m => m.ascendingAorta), nameof<AorticArch>(m => m.arcusAortaeBetweenCarotisAndSubclavia)];
      case nameof<AorticArch>(m => m.arcusAortaeBetweenCarotisAndSubclavia):
        return [nameof<AorticArch>(m => m.arcusAortaeBetweenTruncusAndCarotis), nameof<AorticArch>(m => m.descendingAorta)];
      case nameof<AorticArch>(m => m.aorticArch):
        return [nameof<AorticArch>(m => m.ascendingAorta), nameof<AorticArch>(m => m.descendingAorta)];
      case nameof<AorticArch>(m => m.descendingAorta):
        return [
          nameof<AorticArch>(m => m.arcusAortaeBetweenCarotisAndSubclavia),
          nameof<AorticArch>(m => m.suprarenalAbdominalAorta),
          nameof<AorticArch>(m => m.aorticArch)
        ];
      case nameof<AorticArch>(m => m.suprarenalAbdominalAorta):
        return [nameof<AorticArch>(m => m.descendingAorta), nameof<AorticArch>(m => m.infrarenalAbdominalAorta)];
      case nameof<AorticArch>(m => m.infrarenalAbdominalAorta):
        return [
          nameof<AorticArch>(m => m.suprarenalAbdominalAorta),
          nameof<AorticArch>(m => m.rightCommonIliacArtery),
          nameof<AorticArch>(m => m.leftCommonIliacArtery)
        ];
      case nameof<AorticArch>(m => m.rightCommonIliacArtery):
        return [
          nameof<AorticArch>(m => m.infrarenalAbdominalAorta),
          nameof<AorticArch>(m => m.leftCommonIliacArtery),
          nameof<AorticArch>(m => m.rightExternalIliacArtery)
        ];
      case nameof<AorticArch>(m => m.leftCommonIliacArtery):
        return [
          nameof<AorticArch>(m => m.infrarenalAbdominalAorta),
          nameof<AorticArch>(m => m.rightCommonIliacArtery),
          nameof<AorticArch>(m => m.leftExternalIliacArtery)
        ];
      case nameof<AorticArch>(m => m.rightExternalIliacArtery):
        return [nameof<AorticArch>(m => m.rightCommonIliacArtery)];
      case nameof<AorticArch>(m => m.leftExternalIliacArtery):
        return [nameof<AorticArch>(m => m.leftCommonIliacArtery)];
      default:
        return [];
    }
  }

  closeLargeLocalizer() {
    this.close.emit();
  }
}
