import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

import { remove, cloneDeep } from 'lodash';

import { DifferentialDiagnosisTypeEnum } from '@enums/neckMRT/bones';
import { BonesLargeLocalizerConfigModel } from '@models/neckMRT/ui/bones/bones-large-localizer-config.model';

@Component({
  selector: 'rr-spatial-neoplasm',
  templateUrl: './spatial-neoplasm.component.html',
  styleUrls: ['./spatial-neoplasm.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SpatialNeoplasmComponent implements OnInit, DoCheck {
  @Input() model: BonesFindingUiModel;
  @Input() isCMReinforced: boolean;
  @Input() activeTabIndex: number;
  @Input('differentialDiagnosisOptions') set _differentialDiagnosisOptions(val: DropdownGroupedModel[]) {
    this.primaryDifferentialDiagnosisOptions = val;
    this.secondaryDifferentialDiagnosisOptions = cloneDeep(val);
  }
  @Input('differentialDiagnosisRestrictedOptions') set _differentialDiagnosisRestrictedOptions(val: DropdownGroupedModel[]) {
    if (val) {
      this.secondaryDifferentialDiagnosisRestrictedOptions = cloneDeep(val);
      if (!this.model.isSpine) {
        this.reduceDropdownsOptions();
      }
    }
  }

  @Output() emitLocalizer = new EventEmitter<BonesLargeLocalizerConfigModel>();

  primaryDifferentialDiagnosisOptions: DropdownGroupedModel[];

  private oldIsSpineValue: boolean;

  secondaryDifferentialDiagnosisOptions: DropdownGroupedModel[];
  secondaryDifferentialDiagnosisRestrictedOptions: DropdownGroupedModel[];

  constructor() {}

  ngOnInit(): void {
    this.oldIsSpineValue = this.model.isSpine;
  }

  ngDoCheck(): void {
    if (this.model.isSpine !== this.oldIsSpineValue) {
      this.onIsSpineChanged();
    }
  }

  onIsSpineChanged(): void {
    this.manageDifferentialDiagnosisOptions();
    this.oldIsSpineValue = this.model.isSpine;

    if (
      this.model.mainSpatialNeoplasmDifferentialDiagnosisType1 === DifferentialDiagnosisTypeEnum.VertebralHemangioma ||
      this.model.spatialNeoplasmDifferentialDiagnosisType1 === DifferentialDiagnosisTypeEnum.VertebralHemangioma
    ) {
      this.resetDiffDiag1();
    }

    if (this.model.spatialNeoplasmDifferentialDiagnosisType1 === DifferentialDiagnosisTypeEnum.VertebralHemangioma) {
      this.resetDiffDiag1();
    } else if (this.model.spatialNeoplasmDifferentialDiagnosisType2 === DifferentialDiagnosisTypeEnum.VertebralHemangioma) {
      this.resetDiffDiag2();
    } else if (this.model.spatialNeoplasmDifferentialDiagnosisType3 === DifferentialDiagnosisTypeEnum.VertebralHemangioma) {
      this.resetDiffDiag3();
    }
  }

  private resetDiffDiag1(): void {
    this.model.mainSpatialNeoplasmDifferentialDiagnosisType1 = DifferentialDiagnosisTypeEnum.None;
    this.model.spatialNeoplasmDifferentialDiagnosisType1 = DifferentialDiagnosisTypeEnum.None;
    this.model.isSuspicionOf = false;
    this.resetDiffDiag2();
  }

  private resetDiffDiag2(): void {
    this.model.spatialNeoplasmDifferentialDiagnosisType2 = DifferentialDiagnosisTypeEnum.None;
    this.model.isSubordinate = false;
    this.resetDiffDiag3();
  }

  private resetDiffDiag3(): void {
    this.model.spatialNeoplasmDifferentialDiagnosisType3 = DifferentialDiagnosisTypeEnum.None;
  }

  private manageDifferentialDiagnosisOptions(): void {
    if (!this.model.isSpine) {
      this.reduceDropdownsOptions();
    } else {
      this.restoreDropdownsOptions();
    }
  }

  private reduceDropdownsOptions(): void {
    remove(this.secondaryDifferentialDiagnosisOptions[1].items, item => item.value === DifferentialDiagnosisTypeEnum.VertebralHemangioma);
    remove(
      this.secondaryDifferentialDiagnosisRestrictedOptions[0].items,
      item => item.value === DifferentialDiagnosisTypeEnum.VertebralHemangioma
    );
  }

  private restoreDropdownsOptions(): void {
    const optionToInsert = this.primaryDifferentialDiagnosisOptions[1].items.find(
      item => item.value === DifferentialDiagnosisTypeEnum.VertebralHemangioma
    );
    this.secondaryDifferentialDiagnosisOptions[1].items.splice(2, 0, optionToInsert);
    this.secondaryDifferentialDiagnosisRestrictedOptions[0].items.splice(2, 0, optionToInsert);
  }

  passLocalizerConfig(config: BonesLargeLocalizerConfigModel): void {
    this.emitLocalizer.emit(config);
  }
}
