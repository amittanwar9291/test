import { TrackingEventType } from '@enums/shared/tracking-event-type.enum';
import { TrackingSubjectType } from '@enums/shared/tracking-subject-type.enum';

export class StartStopTrackingRequest {
  trackingEventType: TrackingEventType;
  reportId: string;
  trackingSubjectId: string;
  trackingSubjectType: TrackingSubjectType;
  moduleName: string;
}
