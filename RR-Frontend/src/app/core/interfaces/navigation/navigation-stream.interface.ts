import { ReportUiModel } from '@models/shared/report';
import { Observable } from 'rxjs';
import { NavigationStreamModel } from '@models/shared/navigation/navigation-stream.model';

export interface INavigationStream {
  getStream(): Observable<NavigationStreamModel>;
  emitStream(reportData: ReportUiModel, pageNumber: number);
}
