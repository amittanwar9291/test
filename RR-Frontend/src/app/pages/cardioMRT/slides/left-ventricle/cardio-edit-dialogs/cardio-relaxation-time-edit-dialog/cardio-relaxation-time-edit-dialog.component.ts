import { AfterViewInit, Component } from '@angular/core';

import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';

import { LeftVentricleUiModel } from '@models/cardioMRT/ui/left-ventricle/left-ventricle-ui.model';

import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';

import { ColorsEnum } from '@enums/cardioMRT/left-ventricle/colors.enum';
import { LocalizerPositionEnum } from '@enums/cardioMRT/left-ventricle/localizer-position.enum';

import { LeftVentricleHelperService } from '@services/cardioMRT/left-ventricle-helper.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';

import { IRelaxationTimeControlsConfig } from '@interfaces/relaxation-time-controls-config.interface';
import { RelaxationTimeTypeEnum } from '@enums/cardioMRT/left-ventricle/relaxation-time-type.enum';
import { MeasureType } from '@enums/cardioMRT/left-ventricle/measure-type.enum';
import { ImageFileTypeEnum } from '@enums/cardioMRT/left-ventricle/image-file-type.enum';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-cardio-relaxation-time-edit-dialog',
  templateUrl: './cardio-relaxation-time-edit-dialog.component.html',
  styleUrls: ['cardio-relaxation-time-edit-dialog.component.scss']
})
export class CardioRelaxationTimeEditDialogComponent extends ResizableBaseComponent implements AfterViewInit {
  // TODO move these configs to a separate file
  colors = {
    purple: ColorsEnum.Purple,
    turquoise: ColorsEnum.Turquoise,
    blue: ColorsEnum.Blue
  };

  t1ControlsConfig: IRelaxationTimeControlsConfig = {
    evaluationRRID: 'car_m_0601100',
    referencePictureRRID: 'car_m_0601101',
    qualitativeRRID: 'car_m_060125',
    quantitativelyRRID: 'car_m_060126',
    pathologyDistributionRRID: 'car_m_0601201',
    diffuseRRID: 'car_m_060130',
    focalRRID: 'car_m_060127',
    severityRRID: 'car_m_0601104',
    severityDDLRRID: 'car_m_0601105',
    valueMyocardiumRRID: 'car_m_0601202',
    inputValueMyocardiumRRID: 'car_m_060128',
    labelInputValueMyocardiumRRID: 'car_m_060129',
    referenceValueMyocardiumRRID: 'car_m_0601203',
    inputReferenceValueMyocardiumRRID: 'car_m_060133',
    labelInputReferenceValueMyocardiumRRID: 'car_m_060134',
    valueBloodRRID: 'car_m_060137',
    inputValueBloodRRID: 'car_m_060138',
    labelInputValueBloodRRID: 'car_m_060136',
    localizationAHASegmentRRID: 'car_m_0601102',
    lvTotalRRID: 'car_m_0601103',
    areValueMyocardiumNumberInputsMandatory: true,
    referencePictureObjectRRID: {
      headerId: 'none',
      serialNoLabelId: 'uni_06_002_02',
      serialNoInputId: 'uni_06_003_02',
      pictureNoLabelId: 'uni_06_004_02',
      pictureNoInputId: 'uni_06_005_02',
      importLabelId: 'uni_06_006_02',
      importInputId: 'uni_06_007_02'
    }
  };

  t2ControlsConfig: IRelaxationTimeControlsConfig = {
    evaluationRRID: 'car_m_0602100',
    referencePictureRRID: 'car_m_0602101',
    qualitativeRRID: 'car_m_060225',
    quantitativelyRRID: 'car_m_060226',
    pathologyDistributionRRID: 'car_m_0602201',
    diffuseRRID: 'car_m_060230',
    focalRRID: 'car_m_060227',
    severityRRID: 'car_m_0602104',
    severityDDLRRID: 'car_m_0602105',
    valueMyocardiumRRID: 'car_m_0602202',
    inputValueMyocardiumRRID: 'car_m_060228',
    labelInputValueMyocardiumRRID: 'car_m_060229',
    referenceValueMyocardiumRRID: 'car_m_0602203',
    inputReferenceValueMyocardiumRRID: 'car_m_060233',
    labelInputReferenceValueMyocardiumRRID: 'car_m_060234',
    localizationAHASegmentRRID: 'car_m_0602102',
    lvTotalRRID: 'car_m_0602103',
    referencePictureObjectRRID: {
      headerId: 'none',
      serialNoLabelId: 'uni_06_002_03',
      serialNoInputId: 'uni_06_003_03',
      pictureNoLabelId: 'uni_06_004_03',
      pictureNoInputId: 'uni_06_005_03',
      importLabelId: 'uni_06_006_03',
      importInputId: 'uni_06_007_03'
    }
  };

  t1GdControlsConfig: IRelaxationTimeControlsConfig = {
    evaluationRRID: 'car_m_0603100',
    referencePictureRRID: 'car_m_0603104',
    qualitativeRRID: 'car_m_060311',
    quantitativelyRRID: 'car_m_060436',
    pathologyDistributionRRID: 'car_m_0603201',
    diffuseRRID: 'car_m_060313',
    focalRRID: 'car_m_060312',
    severityRRID: 'car_m_0603107',
    severityDDLRRID: 'car_m_0603105',
    valueMyocardiumRRID: 'car_m_0603202',
    inputValueMyocardiumRRID: 'car_m_060437',
    labelInputValueMyocardiumRRID: 'car_m_060438',
    referenceValueMyocardiumRRID: 'car_m_0603203',
    inputReferenceValueMyocardiumRRID: 'car_m_060441',
    labelInputReferenceValueMyocardiumRRID: 'car_m_060442',
    valueBloodRRID: 'car_m_0603204',
    inputValueBloodRRID: 'car_m_0603205',
    labelInputValueBloodRRID: 'car_m_0603206',
    localizationAHASegmentRRID: 'car_m_0603106',
    lvTotalRRID: 'car_m_0603103',
    inputEcvValueRRID: 'car_m_0603207',
    labelInputEcvValueRRID: 'car_m_0603208',
    referencePictureObjectRRID: {
      headerId: 'none',
      serialNoLabelId: 'uni_06_002_04',
      serialNoInputId: 'uni_06_003_04',
      pictureNoLabelId: 'uni_06_004_04',
      pictureNoInputId: 'uni_06_005_04',
      importLabelId: 'uni_06_006_04',
      importInputId: 'uni_06_007_04'
    }
  };

  model: LeftVentricleUiModel;
  haematocritPercent: number;
  callback: () => void;

  localizerPosition: typeof LocalizerPositionEnum;
  relaxationType: typeof RelaxationTimeTypeEnum;
  measureType: typeof MeasureType;
  imageFileType: typeof ImageFileTypeEnum;

  dividingByZeroError: boolean;
  negativeValueError: boolean;

  constructor(
    private dialogService: DialogService,
    config: DynamicDialogConfig,
    private toastMessageService: ToastMessageService,
    private translate: TranslateService
  ) {
    super();

    this.model = config.data.model;
    this.haematocritPercent = config.data.haematocritPercent;
    this.callback = config.data.callback;

    this.localizerPosition = LocalizerPositionEnum;
    this.relaxationType = RelaxationTimeTypeEnum;
    this.measureType = MeasureType;
    this.imageFileType = ImageFileTypeEnum;
  }

  ngAfterViewInit(): void {
    // hack to resolve problem with ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.updateECVCalculation();
    });
  }

  onDataUpdate(ecvCalculationComponentName?: string) {
    this.callback();

    if (
      [
        't1LocalizerValueBlood',
        't1GdLocalizerValueBlood',
        't1LocalizerQuantitativelyValue',
        't1GdLocalizerQuantitativelyValue',
        't1LocalizerMeasureType',
        't1GdLocalizerMeasureType'
      ].includes(ecvCalculationComponentName)
    ) {
      this.updateECVCalculation();
    }
  }

  private updateECVCalculation() {
    const formulaComponents = {
      haematocritValue: this.haematocritPercent / 100, // value that comes from page 2 (car_m_020124 numeric input)
      t1ValueMyocardiumInMs: this.model.t1Localizer.valueMyocardiumInMs,
      t1ValueBloodInMs: this.model.t1Localizer.valueBloodInMs,
      t1GdValueMyocardiumInMs: this.model.t1GdLocalizer.valueMyocardiumInMs,
      t1GdValueBloodInMs: this.model.t1GdLocalizer.valueBloodInMs
    };

    if (this.areCalculationComponentsValid(formulaComponents)) {
      const calculatedECVValue = LeftVentricleHelperService.calculateECV(formulaComponents);
      this.model.t1GdLocalizer.ecv = calculatedECVValue >= 0 ? calculatedECVValue : null;

      if (calculatedECVValue >= 0) {
        this.model.t1GdLocalizer.ecv = calculatedECVValue;
        this.negativeValueError = false;
      } else {
        this.toastMessageService.showErrorToast(
          this.translate.instant('cardioMRT.leftVentricle.ecvValueIsNegativ'),
          this.translate.instant('cardioMRT.leftVentricle.ecvCalculationError')
        );
        this.negativeValueError = true;
      }
    } else {
      this.model.t1GdLocalizer.ecv = null;
    }
  }

  private areCalculationComponentsValid(formulaComponents): boolean {
    const areComponentsNotZero = Object.values(formulaComponents).every(val => val > 0);
    const areBloodValuesNotIdentical =
      this.isValidBloodValue(formulaComponents.t1ValueBloodInMs) &&
      this.isValidBloodValue(formulaComponents.t1GdValueBloodInMs) &&
      formulaComponents.t1ValueBloodInMs !== formulaComponents.t1GdValueBloodInMs;

    if (areComponentsNotZero) {
      if (areBloodValuesNotIdentical) {
        this.dividingByZeroError = false;
        return true;
      } else {
        this.toastMessageService.showErrorToast(this.translate.instant('cardioMRT.leftVentricle.theValuesForT1BloodMustBeDifferent'));
        this.dividingByZeroError = true;
        return false;
      }
    } else {
      return false;
    }
  }

  private isValidBloodValue(val: number): boolean {
    return val !== null && val !== 0;
  }

  close() {
    /**
     * According to the documentation, in order to close the dialog we should call the "close" method of the DynamicDialogRef. However,
     * there is a bug in the library that causes this way of closing the dialog not showing a closing animation.
     * To fix it we can use a hack published here: https://github.com/primefaces/primeng/issues/7728
     *
     * IMPORTANT NOTE: this way lets the dialog to close with
     *  the animation but it doesn't let us pass any data back to the parent component that
     * opens the dialog
     */
    this.dialogService.dialogComponentRef.instance.close();
  }

  localizerDisableConditions(localizerName: string) {
    return (
      (this.model[localizerName].qualitativeType !== RelaxationTimeTypeEnum.Focal &&
        this.model[localizerName].measureType !== this.measureType.Quantitative) ||
      this.model[localizerName].isLVTotal ||
      this.model[localizerName].measureType === MeasureType.None
    );
  }
}
