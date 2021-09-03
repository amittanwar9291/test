import { Component, Input, OnDestroy } from '@angular/core';
import { CysticFibrosisTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/cystic-fibrosis/cystic-fibrosis-type.enum';
import { LungParenchymaFindingUiModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import { LungParenchymaHelperService } from '../lung-parenchyma-helper.service';
import { MorphologyEditorDialogComponent } from '../../../shared/morphology/morphology-editor-dialog/morphology-editor-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ControlContainer, NgForm } from '@angular/forms';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';
import { LungsFlapsMulticolorLocalizerUi } from '@models/shared/thorax/localizers/lungs-flaps-multicolor-localizer-ui';
import { Subscription } from 'rxjs';
import { MorphologyEditorDialogData } from '@models/thoraxMRT/ui/lung-parenchyma/morphology-editor-dialog-data.model';
import { LungParenchymaLargeLocalizerConfig } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-large-localizer-config.model';

@Component({
  selector: 'rr-cystic-fibrosis',
  templateUrl: './cystic-fibrosis.component.html',
  styleUrls: ['./cystic-fibrosis.component.scss'],
  providers: [DialogService],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CysticFibrosisComponent implements OnDestroy {
  @Input() model: LungParenchymaFindingUiModel;

  isCMYes: boolean;
  cysticFibrosisType: typeof CysticFibrosisTypeEnum;
  directionType: typeof DirectionTypeEnum;

  morphologyQuantitativeLocalizers = this.lungParenchymaHelperService.morphologyQuantitativeLocalizers;
  morphologyDescriptiveLocalizers = this.lungParenchymaHelperService.morphologyDescriptiveLocalizers;

  morphologyQuantitativeLocalizersValidationProps = Object.values(this.lungParenchymaHelperService.morphologyQuantitativeLocalizers).map(
    item => item.modelProp
  );
  morphologyQuantitativeEditorValueUpdateSubscription: Subscription;

  constructor(
    private lungParenchymaHelperService: LungParenchymaHelperService,
    private dialogService: DialogService,
    private validationHelperService: ValidationHelperService
  ) {
    this.lungParenchymaHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
    });
    this.cysticFibrosisType = CysticFibrosisTypeEnum;
    this.directionType = DirectionTypeEnum;

    this.morphologyQuantitativeEditorValueUpdateSubscription = this.lungParenchymaHelperService.morphologyQuantitativeEditorValueUpdate.subscribe(
      (value: MorphologyEditorDialogData) => {
        if (value) {
          this.updateModelOnEditorChange(value);
        }
      }
    );
  }

  ngOnDestroy() {
    this.morphologyQuantitativeEditorValueUpdateSubscription.unsubscribe();
  }

  openLargeLocalizer(modelPropName: string) {
    this.lungParenchymaHelperService.largeLocalizerOpen.next(new LungParenchymaLargeLocalizerConfig(modelPropName));
  }

  openDialog(selectedLocalizer) {
    this.dialogService.open(MorphologyEditorDialogComponent, {
      showHeader: false,
      contentStyle: { padding: '0' },
      data: new MorphologyEditorDialogData(
        this.model[selectedLocalizer.modelProp],
        this.model.score,
        selectedLocalizer.title,
        selectedLocalizer.rrids,
        selectedLocalizer
      )
    });
  }

  updateModelOnEditorChange(data: MorphologyEditorDialogData) {
    this.model[data.selectedLocalizer] = data.localizerModel;
    this.model.score = data.score;
    this.removeMorphologyQuantitativeLocalizersErrors();
  }

  resetValues() {
    if (this.model.cysticFibrosisType === this.cysticFibrosisType.QuantitativeEichingerScore) {
      if (this.model.sideType === this.directionType.None) {
        this.removeSizeValidationError();
      }
      this.model.bronchiectasisOrWallThickeningLocation = new LungsFlapsModel();
      this.model.mucusPlaqueLocation = new LungsFlapsModel();
      this.model.lungParenchymaPathologyLocation = new LungsFlapsModel();
      this.model.sacculationOrAbscessLocation = new LungsFlapsModel();
      this.model.consolidationLocation = new LungsFlapsModel();
      this.model.perfusionDisorderLocation = new LungsFlapsModel();
      this.model.isPerfusionDisorder = false;
    } else if (this.model.cysticFibrosisType === this.cysticFibrosisType.Descriptive) {
      this.model.score = null;
      this.model.bronchiectasisOrWallThickeningLocalizer = new LungsFlapsMulticolorLocalizerUi();
      this.model.mucusPlaqueLocalizer = new LungsFlapsMulticolorLocalizerUi();
      this.model.sacculationOrAbscessLocalizer = new LungsFlapsMulticolorLocalizerUi();
      this.model.consolidationLocalizer = new LungsFlapsMulticolorLocalizerUi();
      this.model.otherAbnormalityLocalizer = new LungsFlapsMulticolorLocalizerUi();
      this.model.functionLocalizer = new LungsFlapsMulticolorLocalizerUi();
      this.removeMorphologyQuantitativeLocalizersErrors();
    }
  }

  clearDescriptiveLocalizer(modelProp: string) {
    this.model[modelProp] = new LungsFlapsModel();
  }

  removeSizeValidationError() {
    this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.sideType));
  }

  removeMorphologyQuantitativeLocalizersErrors() {
    this.morphologyQuantitativeLocalizersValidationProps.forEach(item => this.validationHelperService.removeError(item));
  }
}
