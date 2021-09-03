using System;

namespace RadioReport.Common.Exceptions
{
    public class AddReportFailedException : DomainException
    {
        public AddReportFailedException()
        {
        }

        public AddReportFailedException(string message) : base(message)
        {
        }

        public AddReportFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
