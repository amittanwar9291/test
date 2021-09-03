import { LoggingService } from '@services/shared/logging/logging.service';

import { IReport } from '@interfaces/report.interface';

import { isEqual, cloneDeep, isArray, isPlainObject, forIn } from 'lodash';

import { BaseReport } from '@interfaces/base-report.interface';

export class ModelDiff<TModel extends IReport> {
  private initialModelRef: BaseReport;

  constructor(public logger: LoggingService) {}

  public isEqualOrEmpty(model: TModel): boolean {
    if (!this.initialModelRef) {
      this.logger.error('ModelDiff', 'Creating raport and page...');
    }
    return this.isEqual(model) || !this.initialModelRef;
  }

  set modelRef(model: TModel) {
    if (!model) {
      throw Error('Model not provided');
    }
    this.initialModelRef = this.getModelWithoutIds(cloneDeep(model));
  }

  isEqual(model: TModel): boolean {
    this.logger.info('ModelDiff', 'Model changes detection started...');
    const isObjectEqual = isEqual(this.getModelWithoutIds(cloneDeep(model)), this.initialModelRef);

    if (isObjectEqual) {
      this.logger.info('ModelDiff', 'Model changes detection finished. Model not changed.');
    } else {
      this.logger.info('ModelDiff', 'Model changes detection finished. Model changed.');
    }
    return isObjectEqual;
  }

  private getModelWithoutIds(inputModel) {
    const { id, reportId, ...modelWithoutIds } = inputModel;
    const modelWithoutValidationId = this.omitDeepValidationId(modelWithoutIds);
    return modelWithoutValidationId;
  }

  /**
   * This prevents marking model as different when the 'validationId' property differs (and it differs always when
   * simply toggling an active finding without any model changes which unnecessarily triggers autosave).
   */
  private omitDeepValidationId(model) {
    forIn(model, (value, key) => {
      if (key === 'validationId') {
        delete model[key];
      } else if (isArray(value)) {
        model[key].forEach(item => {
          this.omitDeepValidationId(item);
        });
      } else if (isPlainObject(value)) {
        this.omitDeepValidationId(value);
      }
    });

    return model;
  }
}
