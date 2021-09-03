using System;

namespace RadioReport.Common.Exceptions
{
    public class InvalidReportDataException : DomainException
    {
        public InvalidReportDataException()
        {
        }

        public InvalidReportDataException(string message) : base(message)
        {
        }

        public InvalidReportDataException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
