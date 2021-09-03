using System;
using System.Collections.Generic;

namespace RadioReport.Core.Tracking.Domain.Models
{
    public class RemoveTrackingRequest
    {
        public Guid? UserId { get; set; }
        public IEnumerable<string> ReportIds { get; set; }
    }
}