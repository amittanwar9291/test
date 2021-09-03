using System;

namespace RadioReport.Common.Exceptions
{
    public class MissingReportSessionException : DomainException
    {
        public MissingReportSessionException()
        {
        }

        public MissingReportSessionException(string message) : base(message)
        {
        }

        public MissingReportSessionException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
