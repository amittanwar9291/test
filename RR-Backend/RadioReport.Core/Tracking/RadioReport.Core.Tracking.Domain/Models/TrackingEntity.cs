using RadioReport.Common.Logic.Enums;
using System;

namespace RadioReport.Core.Tracking.Domain.Models
{
    public class TrackingEntity
    {
        public Guid ReportId { get; set; }
        public Guid InstituteId { get; set; }
        public Guid UserId { get; set; }
        public string TrackingSubjectId { get; set; }
        public TrackingSubjectType TrackingSubjectType { get; set; }
        public string ModuleName { get; set; }
        public int VisitDuration { get; set; }
        public int VisitCount { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastModified { get; set; }

        // fields for statistics feature
        public ReportStatus ReportStatus { get; set; }

        public override string ToString() =>
            $"{ReportId};" +
            $"{TrackingSubjectId};" +
            $"{TrackingSubjectType};" +
            $"{UserId};" +
            $"{ModuleName};" +
            $"{VisitDuration};" +
            $"{VisitCount};" +
            $"{InstituteId};" +
            $"{CreationDate};" +
            $"{LastModified};";
    }
}
