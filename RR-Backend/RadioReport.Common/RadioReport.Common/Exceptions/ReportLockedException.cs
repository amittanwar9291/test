using System;

namespace RadioReport.Common.Exceptions
{
    public class ReportLockedException : DomainException
    {
        public ReportLockedException()
        {
        }

        public ReportLockedException(string message) : base(message)
        {
        }

        public ReportLockedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
