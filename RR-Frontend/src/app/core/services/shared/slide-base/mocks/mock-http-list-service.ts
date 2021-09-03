import { HttpListService } from '@abstractions/abstract-classes/http-list-service';

import { IHttpService } from '@interfaces/http-service.interface';
import { IReport } from '@interfaces/report.interface';

import { MockSettableHttpService } from './mock-settable-http-service';

import { Guid } from '@models/shared/guid/guid';

export class MockHttpListService extends HttpListService {
  private servicesArray: MockSettableHttpService[];

  constructor() {
    super();

    this.servicesArray = [];

    for (let i = 0; i < 9; i++) {
      this.servicesArray.push(new MockSettableHttpService());

      const emptyModel: IReport = { id: Guid.createEmpty(), reportId: Guid.createEmpty() };
      this.servicesArray[i].setModel(emptyModel);
    }
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }

  setServiceModel(pageNumber: number, model: IReport): void {
    this.servicesArray[pageNumber - 1].setModel(model);
  }
}
