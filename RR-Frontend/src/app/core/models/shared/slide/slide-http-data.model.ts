import { IHttpService } from '@interfaces/http-service.interface';
import { SafeHttpRequest } from '@services/shared/slide-base/safe-http-request';
import { IReport } from '@interfaces/report.interface';
import { IModel } from '@interfaces/model.interface';
import { Subscription } from 'rxjs';
import { DataStructure } from './data-structure.model';
import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';

export class SlideHttpData {
  isBinded: boolean;

  service: IHttpService;
  requestHandler: SafeHttpRequest;
  pageId: string;
  model: IReport;
  modelStructure: DataStructure;
  modelCtor: INoParamConstructor<IReport>;
  typeName: string;

  postCallback: (out: IModel) => void;
  updateCallback: (out: IModel) => void;

  prePostCallback: () => void;
  preUpdateCallback: () => void;

  postSubscription: Subscription;
  updateSubscription: Subscription;

  constructor(service: IHttpService, pageId: string) {
    this.service = service;
    this.requestHandler = new SafeHttpRequest(service);

    this.pageId = pageId;

    this.isBinded = false;
  }
}
