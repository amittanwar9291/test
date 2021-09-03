import { IHttpService } from '@interfaces/http-service.interface';

export abstract class HttpListService {
  abstract getServices(): IHttpService[];
}
