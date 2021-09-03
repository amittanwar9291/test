using System;

namespace RadioReport.Common.Exceptions
{
    public class ReportNotFoundException : NotFoundException
    {
        public ReportNotFoundException()
        {
        }

        public ReportNotFoundException(string message) : base(message)
        {
        }

        public ReportNotFoundException(Guid id) : base($"Report with id {id} not found")
        {
        }

        public ReportNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
