using System;

namespace RadioReport.Common.Exceptions
{
    public class InvalidReportStatusChangeException : DomainException
    {
        public InvalidReportStatusChangeException()
        {
        }

        public InvalidReportStatusChangeException(string message) : base(message)
        {
        }

        public InvalidReportStatusChangeException(string message, Exception innerException) : base(message, innerException)
        {
        }

        public InvalidReportStatusChangeException(string oldStatus, string newStatus) : base($"Invalid report status change from {oldStatus} to {newStatus}")
        {
        }
    }
}
