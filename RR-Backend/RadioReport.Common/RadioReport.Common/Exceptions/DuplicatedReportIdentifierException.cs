using System;

namespace RadioReport.Common.Exceptions
{
    public class DuplicatedReportIdentifierException : DomainException
    {
        public DuplicatedReportIdentifierException()
        {
        }

        public DuplicatedReportIdentifierException(string message) : base(message)
        {
        }

        public DuplicatedReportIdentifierException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
