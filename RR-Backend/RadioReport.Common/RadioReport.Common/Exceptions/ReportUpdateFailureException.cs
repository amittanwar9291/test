using System;
using RadioReport.Common.Logic.Resources;

namespace RadioReport.Common.Exceptions
{
    public class ReportUpdateFailureException : DomainException
    {
        public override string Reason { get; set; } = ErrorMessageResources.ReportUpdateFailure;

        public ReportUpdateFailureException()
        {
        }

        public ReportUpdateFailureException(string message) : base(message)
        {
        }

        public ReportUpdateFailureException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
