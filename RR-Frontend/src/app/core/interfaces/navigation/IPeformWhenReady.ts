import { ReportUiModel } from '@models/shared/report';
import { HttpHeaders } from '@angular/common/http';

export interface IPerformWhenReady {
  performWhenReady(callback: () => number): Promise<void>;
}
