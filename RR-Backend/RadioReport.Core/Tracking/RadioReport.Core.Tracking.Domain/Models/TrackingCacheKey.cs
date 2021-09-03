using System;

namespace RadioReport.Core.Tracking.Domain.Models
{
    public class TrackingCacheKey
    {
        private readonly Guid _reportId;
        private readonly TrackingSubjectType _trackingSubjectType;
        private readonly string _trackingSubjectId;

        private TrackingCacheKey(Guid reportId, TrackingSubjectType trackingSubjectType, string trackingSubjectId)
        {
            _reportId = reportId;
            _trackingSubjectType = trackingSubjectType;
            _trackingSubjectId = trackingSubjectId;
        }

        public static TrackingCacheKey Create(StartStopTrackingRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException(nameof(request));
            }

            if (request.TrackingSubjectType == TrackingSubjectType.None)
            {
                throw new ArgumentException("tracking subject type not set");
            }
            if (string.IsNullOrEmpty(request.TrackingSubjectId))
            {
                throw new ArgumentException("tracking subject id not set");
            }
            return new TrackingCacheKey(request.ReportId, request.TrackingSubjectType, request.TrackingSubjectId);
        }

        public string Key => $"{_reportId.ToString()}__{_trackingSubjectType.ToString()}__{_trackingSubjectId}";

        public override bool Equals(object obj) => Equals(obj as TrackingCacheKey);

        private bool Equals(TrackingCacheKey obj) =>
            obj != null &&
            obj._reportId == _reportId &&
            obj._trackingSubjectType == _trackingSubjectType &&
            obj._trackingSubjectId.Equals(_trackingSubjectId, StringComparison.InvariantCulture);

        public override int GetHashCode() =>
            _reportId.GetHashCode() ^ _trackingSubjectType.GetHashCode() ^ _trackingSubjectId.GetHashCode(StringComparison.InvariantCulture);
    }
}
