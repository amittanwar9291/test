import { ReportUiModel } from '@models/shared/report/report-ui.model';
import { AbstractNavigationStreamService } from '@abstractions/abstract-classes/navigation/navigation-stream';
import { NavigationStreamModel } from '@models/shared/navigation/navigation-stream.model';
import { Observable } from 'rxjs';

export class MockStreamService extends AbstractNavigationStreamService {
  getStream(): Observable<NavigationStreamModel> {
    return new Observable<NavigationStreamModel>();
  }
  emitStream(reportData: ReportUiModel, pageNumber: number) {
    // intentionaly empty
  }
}
