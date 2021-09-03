using System;
using RadioReport.Common.Extensions;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.ReportModels
{
    public class ReportSession : ModelBase
    {
        private ReportSession()
        {
        }

        public static ReportSession Create(Guid reportId, HttpAuthContext httpAuthContext)
        {
            if (reportId.IsEmpty()) throw new ArgumentNullException(nameof(reportId));
            if (httpAuthContext == null) throw new ArgumentNullException(nameof(httpAuthContext));
            if (httpAuthContext.UserId.IsEmpty()) throw new ArgumentException(nameof(httpAuthContext.UserId));
            if (httpAuthContext.InstituteId.IsEmpty()) throw new ArgumentException(nameof(httpAuthContext.InstituteId));

            return new ReportSession
            {
                ReportId = reportId,
                UserId = httpAuthContext.UserId,
                InstituteId = httpAuthContext.InstituteId,
                CreationDate = DateTime.Now
            };
        }

        public Guid ReportId { get; protected set; }
        public Guid InstituteId { get; protected set; }
        public Guid UserId { get; protected set; }
        public DateTime CreationDate { get; protected set; }
    }
}
