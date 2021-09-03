import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subject } from 'rxjs';

import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-mass',
  templateUrl: './mass.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassComponent {
  @Input() model: PancreasFindingUiModel;
  @Input() mainMassOptions1: DropdownModel[];
  @Input() mainMassOptions2: DropdownModel[];
  @Input() isCMReinforced: boolean;
  @Input() isDWI: boolean;

  diagnosisChanged = new Subject<void>();

  localizationValidationProperties = [
    nameof<PancreasFindingUiModel>(m => m.isUncinateProcess),
    nameof<PancreasFindingUiModel>(m => m.isPancreaticHead),
    nameof<PancreasFindingUiModel>(m => m.isPancreaticCorpus),
    nameof<PancreasFindingUiModel>(m => m.isPancreaticTail),
    nameof<PancreasFindingUiModel>(m => m.isPancreaticDuct)
  ].join(' ');

  affectedVesselValidationProperties = [
    nameof<PancreasFindingUiModel>(m => m.isCeliacTrunk),
    nameof<PancreasFindingUiModel>(m => m.isSplenicArtery),
    nameof<PancreasFindingUiModel>(m => m.isCommonHepaticArtery),
    nameof<PancreasFindingUiModel>(m => m.isGastroduodenalArtery),
    nameof<PancreasFindingUiModel>(m => m.isPancreaticoduodenalArtery),
    nameof<PancreasFindingUiModel>(m => m.isASuperiorMesentericArtery),
    nameof<PancreasFindingUiModel>(m => m.isPortalVein),
    nameof<PancreasFindingUiModel>(m => m.isVSuperiorMesentericArtery),
    nameof<PancreasFindingUiModel>(m => m.isVCavaInferior)
  ].join(' ');

  affectedVesselsValidationDropdowns = [
    nameof<PancreasFindingUiModel>(m => m.celiacTrunkCharacteristicsType),
    nameof<PancreasFindingUiModel>(m => m.splenicArteryCharacteristicsType),
    nameof<PancreasFindingUiModel>(m => m.commonHepaticArteryCharacteristicsType),
    nameof<PancreasFindingUiModel>(m => m.gastroduodenalArteryCharacteristicsType),
    nameof<PancreasFindingUiModel>(m => m.pancreaticoduodenalArteryCharacteristicsType),
    nameof<PancreasFindingUiModel>(m => m.aSuperiorMesentericArteryCharacteristicsType),
    nameof<PancreasFindingUiModel>(m => m.portalVeinCharacteristicsType),
    nameof<PancreasFindingUiModel>(m => m.vSuperiorMesentericArteryCharacteristicsType),
    nameof<PancreasFindingUiModel>(m => m.vCavaInferiorCharacteristicsType)
  ];

  get characterizationIIIValidationProps(): string[] {
    return [this.affectedVesselValidationProperties, ...this.affectedVesselsValidationDropdowns];
  }

  applyTab1DiffDiagnosisLogic(): void {
    this.diagnosisChanged.next();
  }
}
