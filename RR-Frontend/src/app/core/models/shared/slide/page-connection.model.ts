import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';
import { IReport } from '@interfaces/report.interface';

export class PageConnectionModel<TModel> {
  callback: (model: TModel) => void;
  condition: () => boolean;
  modelCtor: INoParamConstructor<IReport>;
  pageNumber: number;

  constructor(pageNumber: number, modelCtor: INoParamConstructor<IReport>, condition: () => boolean, callback: (model: TModel) => void) {
    this.pageNumber = pageNumber;
    this.callback = callback;
    this.condition = condition;
    this.modelCtor = modelCtor;
  }
}
