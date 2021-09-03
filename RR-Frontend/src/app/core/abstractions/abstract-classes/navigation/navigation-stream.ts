import { INavigationStream } from '@interfaces/navigation/navigation-stream.interface';
import { NavigationStreamModel } from '@models/shared/navigation/navigation-stream.model';
import { Observable } from 'rxjs';
import { ReportUiModel } from '@models/shared/report';

export abstract class AbstractNavigationStreamService implements INavigationStream {
  abstract getStream(): Observable<NavigationStreamModel>;
  abstract emitStream(reportData: ReportUiModel, pageNumber: number);
}
