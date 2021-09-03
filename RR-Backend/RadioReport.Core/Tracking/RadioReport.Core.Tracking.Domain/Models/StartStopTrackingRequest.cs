using System;

namespace RadioReport.Core.Tracking.Domain.Models
{
    public class StartStopTrackingRequest
    {
        public TrackingEventType TrackingEventType { get; set; }
        public Guid ReportId { get; set; }
        public string TrackingSubjectId { get; set; }
        public TrackingSubjectType TrackingSubjectType { get; set; }
        public string ModuleName { get; set; }
        public DateTime Time { get; set; }
    }
}