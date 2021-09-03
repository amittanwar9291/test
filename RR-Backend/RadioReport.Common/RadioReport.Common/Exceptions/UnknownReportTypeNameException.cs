using System;

namespace RadioReport.Common.Exceptions
{
    public class UnknownReportTypeNameException : DomainException
    {
        public UnknownReportTypeNameException()
        {
        }

        public UnknownReportTypeNameException(string message) : base(message)
        {
        }

        public UnknownReportTypeNameException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
